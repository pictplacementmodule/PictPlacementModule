package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Entity
public class jobdescription {
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="id",referencedColumnName="id")
	private industry industry;
	@Id
	@Column(columnDefinition ="serial")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int count;

	
	public industry getIndustry() {
		return industry;
	}


	public void setIndustry(industry industry) {
		this.industry = industry;
	}


	



	public int getCount() {
		return count;
	}


	public void setCount(int count) {
		this.count = count;
	}


	public String getJobDesc() {
		return jobDesc;
	}


	public void setJobDesc(String jobDesc) {
		this.jobDesc = jobDesc;
	}


	public String getJobDesignation() {
		return jobDesignation;
	}


	public void setJobDesignation(String jobDesignation) {
		this.jobDesignation = jobDesignation;
	}






	@Column(name="jobdescription")
	private String jobDesc;
	

	@Column(name="designation")
	private String jobDesignation;
	
	
}
