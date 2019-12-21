package com.example.demo.controller;
import java.util.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Academicdetails;
import com.example.demo.model.Branches;
import com.example.demo.model.Studentdetails;
import com.example.demo.model.countofplaced;
import com.example.demo.model.users;
import com.example.demo.service.Userservice;
@CrossOrigin(origins="*",allowedHeaders="*")
@RestController
public class HomeController {
@Autowired
private Userservice userservice;

private BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();

@RequestMapping("/home")
public void Home() {
	System.out.println("home");
}

@RequestMapping("/findall")//for all login id and pass in users class
public List<users> findall()
{
	return userservice.findAll();
}

@RequestMapping("/findallstu")//all the academic details
public List<Academicdetails> findallstu()
{
	return userservice.findAllstu();
}
@RequestMapping(value="/authenticate") //for authentication of login details
public String authenticate(@RequestBody users user)
{
	
	System.out.println(user.getPass());
	users user1=null;
	
	user1=userservice.findById(user.getId());

if(user1==null)
{
	System.out.println("does not exist");
	return "FALSE";
}
else
{
	System.out.println(passwordEncoder.encode(user.getPass()));
	System.out.println(user1.getPass());

	if(passwordEncoder.matches(user.getPass(),user1.getPass()))
	{
		return user1.getType();
		
		
	}
	else
	{
		System.out.println("not exists");
		return "FALSE";
	}

}
}	
	
@RequestMapping("/addPersonaldetails")//for adding student personal details
public void addPersonaldetails(@RequestBody Studentdetails user)
{
	userservice.addpd(user);
}

@RequestMapping("/c")//for adding student personal details
public List<Studentdetails> getPersonaldetails()
{
	return userservice.findallpersonaldetails();
}

@RequestMapping("/adduser")//for adding sign up details
public void addUser(@RequestBody users user)
{
	user.setPass(passwordEncoder.encode(user.getPass()));
	System.out.println(user.getId() + " " + user.getPass());
	userservice.adduser(user);
}

@RequestMapping("/addacademicdetails")
public void a(@RequestBody Academicdetails user)
{	
	userservice.saveaca(user);
}
@RequestMapping("/findacademicdetails")
public List<Academicdetails> findacademicdetails()
{	
	return userservice.findaca();
}

@RequestMapping(value="/removeUser",method=RequestMethod.POST)
public void delUser(@RequestParam("id") int sid)
{
	userservice.deleteById(sid);
}



@RequestMapping("/gettotalstudent")//total number of students
public void gettotalstudents()
{
	 userservice.getTotalNumerCustomer();
}

@RequestMapping("/sortbybranch")
public List<Academicdetails> show(@RequestBody Branches b) {
	List<String>branches = new ArrayList<String>();
	if(b.isComputer()) {
		branches.add("Computer");
	}
	if(b.isIt()) {
		branches.add("IT");
	}
	if(b.isEntc()) {
		branches.add("ENTC");
	}
	return userservice.sortbybranch(branches);
}

@RequestMapping("/sortbyskills")
public List<Academicdetails> show(@RequestParam int id) 
{
	System.out.println("hey");
	return userservice.sortbyskills(id);
}
@RequestMapping("/countofplaced")
public List<countofplaced> countofstudents() 
{	 return userservice.countofstudents();

}

}

