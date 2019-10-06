package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="placedstudents",schema = "public")
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
public String getIndname() {
	return indname;
}
public void setIndname(String indname) {
	this.indname = indname;
}
@Id
int id;
@Column
private String indname;

}
