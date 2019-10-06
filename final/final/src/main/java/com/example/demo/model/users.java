package com.example.demo.model;

import javax.persistence.Entity;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.annotation.JsonRawValue;
import com.fasterxml.jackson.annotation.JsonRootName;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name="Signin",schema = "public")
public class users implements Serializable {
	
	
@Id
@Column(name="id")
private int id;

@Column(name="pass")
private String pass;
public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getPass() {
	return pass;
}

public void setPass(String pass) {
	this.pass = pass;
}
@Column
String type;
public String getType() {
	return type;
}

public void setType(String type) {
	this.type = type;
}
}
