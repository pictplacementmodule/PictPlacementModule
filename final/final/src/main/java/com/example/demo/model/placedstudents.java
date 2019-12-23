package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="placedstudents")
public class placedstudents {
	
@OneToOne(cascade = CascadeType.ALL)
@JoinColumn(name="id",referencedColumnName="id",unique = true)
private users user;


public users getUser() {
	return user;
}
public void setUser(users user) {
	this.user = user;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}

public int getCompId() {
	return compId;
}
public void setCompId(int compId) {
	this.compId = compId;
}



@Id
int id;
int compId;
float package_lpa;
String location;


public String getLocation() {
	return location;
}
public void setLocation(String location) {
	this.location = location;
}
public float getPackage_lpa() {
	return package_lpa;
}
public void setPackage_lpa(float f) {
	this.package_lpa = f;
}
public Boolean getPL_status() {
	return PL_status;
}
public void setPL_status(Boolean pL_status) {
	PL_status = pL_status;
}


@Column(columnDefinition="Boolean default 'false'")
Boolean PL_status;

}
