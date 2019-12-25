package com.example.demo.controller;

import java.io.PrintStream;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.AdminPlaced;
import com.example.demo.model.Studentdetails;
import com.example.demo.model.industry;
import com.example.demo.model.placedstudents;
import com.example.demo.repository.industryrepo;
import com.example.demo.repository.placedstudentsrepo;
import com.example.demo.service.Userservice;
import com.example.demo.service.industryservice;

@RestController
@CrossOrigin(origins = "*",allowedHeaders="*")
@RequestMapping("/industry")
public class IndustryController {
	@Autowired
	private Userservice userservice;
	@Autowired
	private industryrepo industryrepo;
	@Autowired
	private industryservice industryserv;
	@Autowired
	private placedstudentsrepo placedrepo;
	
	@PostMapping("/add")
	public industry addIndystry(@RequestBody industry industry)
	{
		System.out.println(industry);
		if(!industryrepo.addIndustry(industry.getStart_date())) {
			industryrepo.save(industry);
			
			return industryrepo.findById(industry.getId()).get();
		}
		System.out.print("choose different date\n");
		return null;
	}
	
	
	@GetMapping("/findall")
	public List<industry> findindustry()
	{
		System.out.println(industryrepo.findAll2());
		return industryrepo.findAll2();
	}
	
	@GetMapping("/getDateList")
	public List<Date> getDateList()
	{
		ArrayList<Date> datelist = new ArrayList<Date>();
		datelist.addAll(industryrepo.addFinalDates());
		return datelist;
	}
	
	@PostMapping("/findStudents")
	public List<Studentdetails> findStudents(@RequestBody industry industry)
	{
		return industryserv.findStudents(industry.getSkills());
	}
	
	@PostMapping("/findByDate")
	public List<industry> findIndustryByDate(@RequestBody industry industry)
	{
		System.out.println(industry.getStart_date()+" "+industry.getFinal_date());
		System.out.println(industryrepo.findIndustryByDate(industry.getStart_date(),industry.getFinal_date()));
		return industryrepo.findIndustryByDate(industry.getStart_date(),industry.getFinal_date());
	}
	
	
	@PostMapping("/findById")
	public industry findIndustryById(@RequestParam("id") int id)
	{
		try {
			return industryrepo.findById(id).get();

		}
		catch(Exception e) {
			return null;
		}
	}
	
	 @PostMapping("/sortbypackage")
	 public List<industry> ByPackage()
	 {
		 return industryrepo.ByPackage();
	 }
	 
	 @PostMapping("/pushPlacedByCompany")
	 public void pushPlaced(@RequestBody List<placedstudents> p) {
		 placedrepo.saveAll(p);
		 
	 }
	 

	 @PostMapping("/finalPlaced")//for placing the students and changing placed field to 1
	 public void finalPlaced(@RequestBody List<placedstudents> p) {
		 placedrepo.saveAll(p);
		 System.out.print("hvhjbhj");

		 ArrayList<Integer> x=new ArrayList<Integer>();

		 for(int i=0;i<p.size();i++)
		 {
			 	 x.add(p.get(i).getId());
		 }
		 System.out.print(x);
		 
		 userservice.finalplaced(x);
		 userservice.mail(x);
	 }
	 
	 @GetMapping("/getAllSkills")
		public List<String> getAllSkills()
		{
			
			return industryrepo.finaAllSkills();
		}

	 
	 @GetMapping("/getAllLocations")
		public List<String> getAllLocations()
		{
			
			return industryrepo.finaAllLocations();
		}
}
