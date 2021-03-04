package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

@Component
public class countofplaced {
long count;
public long getCount() {
	return count;
}
public void setCount(long count) {
	this.count = count;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
String name;
}
