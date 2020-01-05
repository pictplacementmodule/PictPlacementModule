package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.jobdescription;

public interface Jobdescrepo extends JpaRepository<jobdescription, Integer> {

	@Modifying
	@Transactional
	@Query(value = "insert into jobdescription(jobdescription,designation,id) values (?2,?3,?1)", nativeQuery = true)
	public void addind(int id, String a, String b);

}
