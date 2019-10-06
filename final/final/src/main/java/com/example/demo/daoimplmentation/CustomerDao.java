package com.example.demo.daoimplmentation;

import java.util.List;

import com.example.demo.model.countofplaced;

public interface CustomerDao {
	 // void insert(Customer cus);
	 // void inserBatch(List<Customer> customers);
	//  List<Customer> loadAllCustomer();
	 // Customer findCustomerById(long cust_id);
	 // String findNameById(long cust_id);
	  int getTotalNumberCustomer();
	  List<countofplaced> countofstudents();
	}

