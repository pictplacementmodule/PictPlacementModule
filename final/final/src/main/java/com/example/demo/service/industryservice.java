package com.example.demo.service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.daoimplmentation.CustomerDao;
import com.example.demo.model.Academicdetails;
import com.example.demo.model.Studentdetails;
import com.example.demo.model.placedstudents;
import com.example.demo.repository.Academicrepository;
import com.example.demo.repository.Personalrepository;
import com.example.demo.repository.industryrepo;
import com.example.demo.repository.placedstudentsrepo;

@Service
public class industryservice {
@Autowired 
CustomerDao customerDao;
@Autowired
private Academicrepository acarepo;
@Autowired
private industryrepo industryrepo;//repository for admin
@Autowired
private Personalrepository studentrepo;
@Autowired
private placedstudentsrepo placedRepo;

public List<Studentdetails> findStudents(List<String> skills) {
	List<Academicdetails> students = acarepo.findAll();
	List<Studentdetails> sorted = new ArrayList<Studentdetails>();
	
	for(int i=0;i<students.size();i++) {
		for(int j=0;j<skills.size();j++)
		if(students.get(i).getSkills().contains(skills.get(j))) {
			sorted.add(students.get(i).getStudent());
		}
	}
	
	return sorted;
}

}

