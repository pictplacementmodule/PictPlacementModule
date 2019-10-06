package com.example.demo.model;
import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonRootName;

import java.io.Serializable;

import javax.persistence.*;
@Entity
@Table(name="Studentpersonal_Details",schema="public")
public class Studentdetails implements Serializable {
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="rollno",referencedColumnName="id",unique = true)
	private users user;
	public users getUser() {
		return user;
	}
	public void setUser(users user) {
		this.user = user;
	}
	private static final long serialVersionUID = 1234567L;
	@Id
	@Column(name="rollno")
	private int rollno;
	@Column(name="adn")
	private String aadharNumber;
	@Column(name="fn")
	private String firstName;
	@Column(name="mn")
    private String middleName;
	@Column(name="ln")
	private String lastName;
	
	@Column(name="mn1")
	private String mobileNumber1;
	@Column(name="mn2")
	private String mobileNumber2;
	@Column(name="email")
	private String email ;
	@Column(name="dob")
	private String dateOfBirth;
    @Column(name="gender")
    private String gender;
    @Column(name="cadd")
    private String currentAddress;
    @Column(name="padd")
    private String permanentAddress;
	
    public int getrollno() {
		return rollno;
	}
	public void setrollno(int rollno) {
		this.rollno = rollno;
	}
	public String getAadharNumber() {
		return aadharNumber;
	}
	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getMobileNumber1() {
		return mobileNumber1;
	}
	public void setMobileNumber1(String mobileNumber1) {
		this.mobileNumber1 = mobileNumber1;
	}
	public String getMobileNumber2() {
		return mobileNumber2;
	}
	public void setMobileNumber2(String mobileNumber2) {
		this.mobileNumber2 = mobileNumber2;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCurrentAddress() {
		return currentAddress;
	}
	public void setCurrentAddress(String currentAddress) {
		this.currentAddress = currentAddress;
	}
	public String getPermanentAddress() {
		return permanentAddress;
	}
	public void setPermanentAddress(String permanentAddress) {
		this.permanentAddress = permanentAddress;
	}
	
	}
/*
@Entity
@Table(name="Academicdetails")
class Academicdetails {
	@Id
	int collegeId;
	public int getCollegeId() {
		return collegeId;
	}
	
	@JsonRootName("percentage")
	  class percentage
	  {	float twelfth;
	   float diploma;
	   
	   //public float getTenth() {
		//return tenth;
	//}
	//public void setTenth(float tenth) {
		//this.tenth = tenth;
	//}
	public float getTwelfth() {
		return twelfth;
	}
	public void setTwelfth(float twelfth) {
		this.twelfth = twelfth;
	}
	public float getDiploma() {
		return diploma;
	}
	public void setDiploma(float diploma) {
		this.diploma = diploma;
	}
	//public float getEngineering() {
	//	return engineering;
	//}
	//public void setEngineering(float engineering) {
		//this.engineering = engineering;
	//}

	  }
	public void setCollegeId(int collegeId) {
		this.collegeId = collegeId;
	}  	
}
*/