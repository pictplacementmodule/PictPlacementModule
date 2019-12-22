package com.example.demo.daoimplmentation;

import java.util.List;

import com.example.demo.model.AdminPlaced;
import com.example.demo.model.EligibleStudents;
import com.example.demo.model.countofplaced;

public interface CustomerDao {
	  int getTotalNumberCustomer();
	  List<countofplaced> countofstudents();
	  List<AdminPlaced> adminplaced();
	  List<EligibleStudents> eligibility(String comp_id);
	}

// void insert(Customer cus);
// void inserBatch(List<Customer> customers);
//  List<Customer> loadAllCustomer();
// Customer findCustomerById(long cust_id);
// String findNameById(long cust_id);
