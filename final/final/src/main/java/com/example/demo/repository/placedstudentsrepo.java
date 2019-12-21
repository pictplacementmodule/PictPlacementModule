package com.example.demo.repository;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.AdminPlaced;
import com.example.demo.model.placedstudents;

public interface placedstudentsrepo extends JpaRepository<placedstudents,Integer>{
	//for admin to see pending request
	/*@Modifying(clearAutomatically = true)
	@Transactional
	@Query(value = "select p.id,s.fn,c.name,p.package_lpa,p.location,p.pl_status from placedstudents as p,Studentpersonal_Details as s,industry as c where p.id = s.rollno ", nativeQuery = true)
	public List<AdminPlaced> pendingStudents();
	*/
	
	
	
	
	}