package com.example.demo.model;

import java.security.Timestamp;

import java.sql.Date;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class industry {

	@Id
	@GeneratedValue
	private int id;
	private String name;
	private String cpname;
	private String cpemail1;
	private String cpemail2;
	private String contactno1;
	private String contactno2;
	private String contactno3;
	private boolean passive_backlogs;
	private boolean active_backlogs;
	@ElementCollection
	private List<String> skills;
	private float criteria;

	@ElementCollection
	private List<String> locality;
	private float package_lpa;
	private int no_of_students;
	@JsonFormat(timezone = JsonFormat.DEFAULT_TIMEZONE)
	private Date start_date;
	@JsonFormat(timezone = JsonFormat.DEFAULT_TIMEZONE)
	private Date final_date;
	private Boolean computer;

	public Boolean getComputer() {
		return computer;
	}

	public void setComputer(Boolean computer) {
		this.computer = computer;
	}

	public Boolean getIt() {
		return it;
	}

	public void setIt(Boolean it) {
		this.it = it;
	}

	public Boolean getEntc() {
		return entc;
	}

	public void setEntc(Boolean entc) {
		this.entc = entc;
	}

	private Boolean it;
	private Boolean entc;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getCriteria() {
		return criteria;
	}

	public void setCriteria(float criteria) {
		this.criteria = criteria;
	}

	public float getPackage_lpa() {
		return package_lpa;
	}

	public void setPackage_lpa(float package_lpa) {
		this.package_lpa = package_lpa;
	}

	public int getNo_of_students() {
		return no_of_students;
	}

	public void setNo_of_students(int no_of_students) {
		this.no_of_students = no_of_students;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getFinal_date() {
		return final_date;
	}

	public void setFinal_date(Date end_date) {
		this.final_date = end_date;
	}

	public String getCpname() {
		return cpname;
	}

	public void setCpname(String cpname) {
		this.cpname = cpname;
	}

	public String getCpemail1() {
		return cpemail1;
	}

	public void setCpemail1(String cpemail1) {
		this.cpemail1 = cpemail1;
	}

	public String getCpemail2() {
		return cpemail2;
	}

	public void setCpemail2(String cpemail2) {
		this.cpemail2 = cpemail2;
	}

	public String getContactno1() {
		return contactno1;
	}

	public void setContactno1(String contactno1) {
		this.contactno1 = contactno1;
	}

	public String getContactno2() {
		return contactno2;
	}

	public void setContactno2(String contactno2) {
		this.contactno2 = contactno2;
	}

	public String getContactno3() {
		return contactno3;
	}

	public void setContactno3(String contactno3) {
		this.contactno3 = contactno3;
	}

	public boolean isPassive_backlogs() {
		return passive_backlogs;
	}

	public void setPassive_backlogs(boolean passive_backlogs) {
		this.passive_backlogs = passive_backlogs;
	}

	public boolean isActive_backlogs() {
		return active_backlogs;
	}

	public void setActive_backlogs(boolean active_backlogs) {
		this.active_backlogs = active_backlogs;
	}

	public List<String> getSkills() {
		return skills;
	}

	public void setSkills(List<String> skills) {
		this.skills = skills;
	}

	public List<String> getLocality() {
		return locality;
	}

	public void setLocality(List<String> locality) {
		this.locality = locality;
	}

}
