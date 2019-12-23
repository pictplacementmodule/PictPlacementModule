package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.daoimplmentation.CustomerDao;
import com.example.demo.model.Academicdetails;
import com.example.demo.model.AdminPlaced;
import com.example.demo.model.Branches;
import com.example.demo.model.EligibleStudents;
import com.example.demo.model.Studentdetails;
import com.example.demo.model.countofplaced;
import com.example.demo.model.location;
import com.example.demo.model.placedstudents;
import com.example.demo.model.users;
import com.example.demo.repository.Academicrepository;
import com.example.demo.repository.industryrepo;
import com.example.demo.repository.locationrepo;
import com.example.demo.repository.placedstudentsrepo;
import com.example.demo.repository.skillsrepo;
import com.example.demo.service.Userservice;
import com.example.demo.model.skills;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class HomeController {
	@Autowired
	private skillsrepo skillrepo;
	@Autowired
	private locationrepo locationrep;
	@Autowired
	private Userservice userservice;
	@Autowired
	private industryrepo industryrepo;
	@Autowired
	private placedstudentsrepo placedrepo;
	@Autowired
	private Academicrepository academicrepo;
	private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	@RequestMapping("/home")
	public void Home() {
		System.out.println("home");
	}

	@RequestMapping("/findall") // for all login id and pass in users class
	public List<users> findall() {
		return userservice.findAll();
	}

	@RequestMapping("/findallstu") // all the academic details
	public List<Academicdetails> findallstu() {
		return userservice.findAllstu();
	}

	@RequestMapping(value = "/authenticate") // for authentication of login details
	public String authenticate(@RequestBody users user) {

		System.out.println(user.getPass());
		users user1 = null;

		user1 = userservice.findById(user.getId());

		if (user1 == null) {
			System.out.println("does not exist");
			return "FALSE";
		} else {
			System.out.println(passwordEncoder.encode(user.getPass()));
			System.out.println(user1.getPass());

			if (passwordEncoder.matches(user.getPass(), user1.getPass())) {
				return user1.getType();

			} else {
				System.out.println("not exists");
				return "FALSE";
			}

		}
	}

	@RequestMapping("/addPersonaldetails") // for adding student personal details
	public void addPersonaldetails(@RequestBody Studentdetails user) {
		System.out.println(user);
		userservice.addpd(user);
	}

	@RequestMapping("/c") // for adding student personal details
	public List<Studentdetails> getPersonaldetails() {
		return userservice.findallpersonaldetails();
	}

	@RequestMapping("/adduser") // for adding sign up details
	public void addUser(@RequestBody users user) {

//	if(user.getType().equals("Company"))
//	{
//		
//		industry obj=new industry();
//		obj.setUser(user);
//		obj.setId(user.getId());
//		System.out.println(obj.getUser().getId());
//		industryrepo.save(obj);
//	
//		
//	}
		user.setPass(passwordEncoder.encode(user.getPass()));
		System.out.println(user.getId() + " " + user.getPass());
		userservice.adduser(user);
	}

	@RequestMapping("/addacademicdetails")
	public void a(@RequestBody Academicdetails user) {
		System.out.println(user);
		userservice.saveaca(user);
	}

	@RequestMapping("/findacademicdetails")
	public List<Academicdetails> findacademicdetails() {
		return userservice.findaca();
	}

	@RequestMapping(value = "/removeUser", method = RequestMethod.POST)
	public void delUser(@RequestParam("id") int sid) {
		userservice.deleteById(sid);
	}

	@RequestMapping("/gettotalstudent") // total number of students
	public void gettotalstudents() {
		userservice.getTotalNumerCustomer();
	}

	@RequestMapping("/sortbybranch")
	public List<Academicdetails> show(@RequestBody Branches b) {
		List<String> branches = new ArrayList<String>();
		if (b.isComputer()) {
			branches.add("Computer");
		}
		if (b.isIt()) {
			branches.add("IT");
		}
		if (b.isEntc()) { 
			branches.add("ENTC");
		}
		return userservice.sortbybranch(branches);
	}

	@RequestMapping("/sortbyskills")
	public List<Academicdetails> show(@RequestParam int id) {
		System.out.println("hey");
		return userservice.sortbyskills(id);
	}

	@RequestMapping("/countofplaced")
	public List<countofplaced> countofstudents() {
		return userservice.countofstudents();

	}

	@PostMapping("/fetchToAdminPendingStudents")
	public List<AdminPlaced> fetch() {
		return userservice.adminplaced();
	}

	@PostMapping("/fetchToCompanyEligibleStudents")
	public List<EligibleStudents> fetchToCompany(@RequestParam("a") String a) {
		System.out.println(a);
		return userservice.eligible(a);
	}

	
	@PostMapping("/getStatusOfPlaced")
	public void ChangeStatusOfPlaced(@RequestBody List<Integer> a) {
		placedstudents p;
		Academicdetails ad;
		System.out.println("hello world");
		for (int i = 0; i < a.size(); i++) {
			p = placedrepo.findById(a.get(i)).get();
			p.setPL_status(true);
			ad = academicrepo.findById(a.get(i)).get();
			ad.setPlaced(true);
			placedrepo.save(p);
			System.out.print(p.getId());
		}
	}
	
	@PostMapping("/selectByCompany")
	public void selectByCompany(@RequestParam("comp_id") String cid,@RequestParam(name="b[]") String[] sid) {
		System.out.println(cid);
//		for(int i=0;i<sid.size();i++) {
//			System.out.println(sid.get(i));
//		}
	}
	@PostMapping("/addskills")
	public void skills(@RequestBody skills skill)
	{
		skillrepo.save(skill);
	}
	@GetMapping("/findallskills")
	public List<String> skills()
	{
		List<String>skills = new ArrayList<String>();
		for(skills s:skillrepo.findAll()) {
			skills.add(s.getSkills());
		}
	return skills;
	}
	@PostMapping("/addlocation")
	public void skills(@RequestBody location loc)
	{
		locationrep.save(loc);
	}
	@GetMapping("/findalllocation")
	public List<String> location()
	{
		List<String>cities = new ArrayList<String>();
		for(location l:locationrep.findAll()) {
			cities.add(l.getLocation());
		}
	return cities;
	}
}
