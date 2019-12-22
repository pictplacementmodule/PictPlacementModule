package com.example.demo.model;

import java.util.List;

public class EligibleStudents {
	int roll;
	String name;
	float sgpaTEFS;
    List<String> skills;
	public int getRoll() {
		return roll;
	}
	public void setRoll(int roll) {
		this.roll = roll;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getSgpaTEFS() {
		return sgpaTEFS;
	}
	public void setSgpaTEFS(float sgpaTEFS) {
		this.sgpaTEFS = sgpaTEFS;
	}
	public List<String> getSkills() {
		return skills;
	}
	public void setSkills(List<String> skills) {
		this.skills = skills;
	}
	
}
