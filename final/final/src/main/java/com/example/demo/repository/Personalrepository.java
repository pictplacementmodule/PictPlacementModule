package com.example.demo.repository;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Academicdetails;
import com.example.demo.model.Studentdetails;
import com.example.demo.model.users;

import antlr.collections.List;


public interface Personalrepository extends JpaRepository<Studentdetails,Integer>{
	

@Modifying(clearAutomatically = true)
@Transactional
@Query(value = "select * from student", nativeQuery = true)
public users addToTable(@Param("columnName") String columnName, @Param("dataType") String dataType);
}
