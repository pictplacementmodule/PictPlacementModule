package com.example.demo.service;
import java.util.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.daoimplmentation.CustomerDao;
import com.example.demo.model.Academicdetails;
import com.example.demo.model.Studentdetails;
import com.example.demo.model.countofplaced;
import com.example.demo.model.placedstudents;
import com.example.demo.model.users;
import com.example.demo.repository.Academicrepository;
import com.example.demo.repository.Personalrepository;
import com.example.demo.repository.userrepository;
import com.example.demo.repository.placedstudentsrepo;

@Service
public class Userservice {
@Autowired 
CustomerDao customerDao;
@Autowired
placedstudentsrepo placedrepo;
@Autowired
private userrepository userrepo;//repository for admin
@Autowired

private Personalrepository personalrepo;//repository for personaldetails
@Autowired

private Academicrepository acarepo;//repository for academic details

public users findById(int id)
{		
	System.out.println("n");
	return userrepo.findById(id).orElse(null);
}
public void adduser(users user)
{	System.out.println("User added");
	userrepo.save(user);
}
public void addpd(Studentdetails user)
{
	personalrepo.save(user);
	System.out.println("Student personal details added");


}
public List<Studentdetails> findallpersonaldetails()
{
	return personalrepo.findAll();
}
public List<Academicdetails> findaca()
{
	return acarepo.findAll();
}
public void deleteById(int x)
{
	userrepo.deleteById(x);
}
public List<users> findAll()
{
	return userrepo.findAll();
}
public void getTotalNumerCustomer() {
    int totalNumberCustomer = customerDao.getTotalNumberCustomer();
    System.out.println("Total Number Customer is: " + totalNumberCustomer);
  }
public List<countofplaced> countofstudents() {
    List<countofplaced> x=customerDao.countofstudents();
    return x;
  }
public List<Academicdetails> findAllstu()
{
	return acarepo.findAll();
}
public void saveaca(Academicdetails user)
{
	System.out.println("User added"+user);
	
	acarepo.save(user);

}
public List<Academicdetails> sortbybranch(String branch) {
	System.out.println(branch);
	return acarepo.sortbybranch(branch);
}
public List<Academicdetails> sortbyskills(int id) {
	System.out.println(id);
	List<String> skills;
	
	 skills=acarepo.sortbyskills(id);
	 return check(skills,id);
}
public List<Academicdetails> check(List<String> skills,int cid)
{
	List<String> studentskills;
	
	List<Integer> id;
	id=acarepo.findid();
	Academicdetails a;
    List<Academicdetails> sel=new ArrayList<Academicdetails>();//selected students
	int selected=0; 
	System.out.print("id"+id.size());
	for(int i=0;i<id.size();i++)
	{	studentskills=acarepo.getskills(id.get(i));
	System.out.println(studentskills);

		for(int j=0;j<studentskills.size();j++)
		{
			for(int k=0;k<skills.size();k++)
			{
				if(studentskills.get(j).equals(skills.get(k)))
						{
							selected=1;
							System.out.println(id.get(i)+"selected");
							sel.add(acarepo.findById(id.get(i)).get());
							break;
						}
		
		}
			if(selected==1)
			{			selected=0;

				break;
			}
		}
	}
	if(selected==0)
	{
		System.out.println("notselected");

		
	}
	return sel;
}
}