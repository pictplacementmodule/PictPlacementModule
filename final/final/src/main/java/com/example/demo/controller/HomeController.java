package com.example.demo.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

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

import com.example.demo.model.Academicdetails;
import com.example.demo.model.AdminPlaced;
import com.example.demo.model.Branches;
import com.example.demo.model.Companyv;
import com.example.demo.model.EligibleStudents;
import com.example.demo.model.Studentdetails;
import com.example.demo.model.countofplaced;
import com.example.demo.model.industry;
import com.example.demo.model.location;
import com.example.demo.model.placedstudents;
import com.example.demo.model.skills;
import com.example.demo.model.users;
import com.example.demo.repository.Academicrepository;
import com.example.demo.repository.CompanyVisitedRepo;
import com.example.demo.repository.Personalrepository;
import com.example.demo.repository.industryrepo;
import com.example.demo.repository.locationrepo;
import com.example.demo.repository.placedstudentsrepo;
import com.example.demo.repository.skillsrepo;
import com.example.demo.service.Userservice;

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
	private industryrepo ir;
	@Autowired
	private placedstudentsrepo placedrepo;
	@Autowired
	private Academicrepository academicrepo;
	@Autowired
	private Personalrepository personalRepo;
	@Autowired
	private CompanyVisitedRepo cvr;
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
	
	@RequestMapping("/findPersonalDetails")
	public Studentdetails findStuPer(@RequestParam int id) {
		return personalRepo.findById(id).orElse(null);
	}
	
	@RequestMapping("/findAcademicDetails")
	public Academicdetails findStuAca(@RequestParam int id) {
		return academicrepo.findById(id).orElse(null);
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
			System.out.println(user.getPass());
			System.out.println(user1.getPass());

			if (passwordEncoder.matches(user.getPass(), user1.getPass().toString())) {
				System.out.println(user1.getPass());
				System.out.println(user.getPass());
				return user1.getType();

			} else {
				System.out.println("password mismatch");
				return "FALSE";
			}

		}
	}

	@RequestMapping("/addPersonaldetails") // for adding student personal details
	public void addPersonaldetails(@RequestBody Studentdetails user) {
		System.out.println("user "+user);
		userservice.addpd(user);
	}

	@RequestMapping("/c") // for adding student personal details
	public List<Studentdetails> getPersonaldetails() {
		return userservice.findallpersonaldetails();
	}

	@RequestMapping("/adduser") // for adding sign up details
	public String addUser(@RequestBody users user) {
		if (userservice.adduser(user))
			return "TRUE";
		else
			return "FALSE";

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

		return userservice.eligible(id);
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
		return userservice.eligible(a);
	}

	@PostMapping("/getStatusOfPlaced")
	public void ChangeStatusOfPlaced(@RequestBody List<Integer> a) {
		placedstudents p;
		Academicdetails ad;
//		System.out.println(a.size());
		for (int i = 0; i < a.size(); i++) {
//			System.out.println(i);
			p = placedrepo.findById(a.get(i)).get();
//			System.out.println(p);
			p.setPL_status(2);
			placedrepo.deleteStuPlaced(p.getId());
			ad = academicrepo.findById(p.getId()).get();
			ad.setPlaced(true);
			placedrepo.save(p);
		}

		// userservice.mail(a);

	}

	@PostMapping("/selectByCompany")
	public void selectByCompany(@RequestBody List<String> myParams) {
		// myParams.size() -1 will contain the company id
		int len = myParams.size();
		int comp_id = Integer.parseInt(myParams.get(len - 1));
		System.out.println(comp_id);
		industry indus = ir.findById(comp_id).get();
		System.out.println((float) indus.getPackage_lpa());
		for (int i = 0; i < len - 1; i++) {
			placedstudents ps = new placedstudents();
			ps.setCompId(comp_id);
			ps.setId(Integer.parseInt(myParams.get(i)));
			ps.setPackage_lpa((float) ir.findById(comp_id).get().getPackage_lpa());
			ps.setLocation("MUMBAI");
			// System.out.println((float) ir.findById(comp_id).get().getPackage_lpa());
			ps.setIdname(ir.findById(comp_id).get().getName());
			ps.setPL_status(0);
			placedrepo.save(ps);
		}

	}

	@PostMapping("/PlacedByCompany")
	public Boolean PlacedByCompany(@RequestBody List<String> myParams) {
		// myParams.size() -1 will contain the company id
		int len = myParams.size();
		int comp_id = Integer.parseInt(myParams.get(len - 1));
		myParams.remove(len - 1);
		List<Integer> p = new ArrayList<Integer>();
		for (String s : myParams) {
			p.add(Integer.parseInt(s));
		}
		placedrepo.findByCompIdAndStudent(p, comp_id);
		return true;

	}

	@PostMapping("/addskills")
	public void skills(@RequestBody skills skill) {
		skillrepo.save(skill);
	}

	@GetMapping("/findallskills")
	public List<String> skills() {
		List<String> skills = new ArrayList<String>();
		for (skills s : skillrepo.findAll()) {
			skills.add(s.getSkills());
		}
		return skills;
	}

	@PostMapping("/addlocation")
	public void skills(@RequestBody location loc) {
		locationrep.save(loc);
	}

	@PostMapping("/findallCompaniesVisited")
	public List<Companyv> returnCompanyvisited() {
		return cvr.findAll();
	}

	@GetMapping("/findalllocation")
	public List<String> location() {
		List<String> cities = new ArrayList<String>();
		for (location l : locationrep.findAll()) {
			cities.add(l.getLocation());
		}
		return cities;
	}

	@PostMapping("/short-listed")
	public List<Academicdetails> shortlisted_details(@RequestParam("comp_id") int id) {
		List<Integer> stu_id;
		stu_id = placedrepo.findByComp(id);
		System.out.println(stu_id);
		for (Academicdetails a : academicrepo.findTheseStu(stu_id, id)) {
			System.out.println(a.getCollegeId());
		}
		if (!stu_id.isEmpty()) {
			return academicrepo.findTheseStu(stu_id, id);
		}
		List<Academicdetails> a = new ArrayList<Academicdetails>();
		// alternate solution for return when false
		return a;
	}

	@PostMapping("/filter")
	public List<Academicdetails> filtered_details(@RequestParam("comp_id") int id) {
		List<Integer> stu_id;
		stu_id = placedrepo.findByComp(id);
		System.out.println(stu_id);
		if (!stu_id.isEmpty()) {
			return academicrepo.findExceptTheseStu(stu_id);
		}
		return userservice.findAllstu();
	}

	@PostMapping("/PendingSelectedByCompany")
	public List<Academicdetails> SelectedByCompany(@RequestParam("comp_id") int id) {
		List<Integer> stu_id;
		stu_id = placedrepo.findByComp(id);
		if (!stu_id.isEmpty()) {
			return academicrepo.findPlacedByComp(stu_id, id);
		}
		List<Academicdetails> a = new ArrayList<Academicdetails>();
		// alternate solution for return when false
		return a;
	}

	@PostMapping("/FinalPlaced")
	public List<Academicdetails> PlacedByAdminToComp(@RequestParam("comp_id") int id) {
		List<Integer> stu_id;
		stu_id = placedrepo.findByComp(id);
		if (!stu_id.isEmpty()) {
			return academicrepo.findFinalPlacedByComp(stu_id, id);
		}
		List<Academicdetails> a = new ArrayList<Academicdetails>();
		// alternate solution for return when false
		return a;
	}

	// compress the image bytes before storing it in the database
	public static byte[] compressBytes(byte[] data) {
		Deflater deflater = new Deflater();
		deflater.setInput(data);
		deflater.finish();
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		while (!deflater.finished()) {
			int count = deflater.deflate(buffer);
			outputStream.write(buffer, 0, count);
		}
		try {
			outputStream.close();
		} catch (IOException e) {
		}
		System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
		return outputStream.toByteArray();
	}

	// uncompress the image bytes before returning it to the angular application
	public static byte[] decompressBytes(byte[] data) {
		Inflater inflater = new Inflater();
		inflater.setInput(data);
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		try {
			while (!inflater.finished()) {
				int count = inflater.inflate(buffer);
				outputStream.write(buffer, 0, count);
			}
			outputStream.close();
		} catch (IOException ioe) {
		} catch (DataFormatException e) {
		}
		return outputStream.toByteArray();
	}
}
