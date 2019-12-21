package com.example.demo.model;

import org.springframework.stereotype.Component;

@Component
public class AdminPlaced {
	int roll;
	String stu_name;
	String comp_name;
	int package_lpa;
	String location;
	Boolean status;
	public int getRoll() {
		return roll;
	}
	public void setRoll(int roll) {
		this.roll = roll;
	}
	public String getStu_name() {
		return stu_name;
	}
	public void setStu_name(String stu_name) {
		this.stu_name = stu_name;
	}
	public String getComp_name() {
		return comp_name;
	}
	public void setComp_name(String comp_name) {
		this.comp_name = comp_name;
	}
	public int getPackage_lpa() {
		return package_lpa;
	}
	public void setPackage_lpa(int package_lpa) {
		this.package_lpa = package_lpa;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	
}
