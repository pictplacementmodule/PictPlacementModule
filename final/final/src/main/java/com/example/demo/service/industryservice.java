package com.example.demo.service;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.example.demo.daoimplmentation.CustomerDao;
import com.example.demo.model.industry;
import com.example.demo.repository.industryrepo;

@Service
public class industryservice {
@Autowired 
CustomerDao customerDao;

@Autowired
private industryrepo industryrepo;//repository for admin

}