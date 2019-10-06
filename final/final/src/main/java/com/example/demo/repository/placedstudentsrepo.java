package com.example.demo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.demo.model.countofplaced;
import com.example.demo.model.placedstudents;

public interface placedstudentsrepo extends JpaRepository<placedstudents,Integer>{
	
	
	}