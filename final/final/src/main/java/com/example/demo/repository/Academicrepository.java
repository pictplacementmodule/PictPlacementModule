package com.example.demo.repository;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.demo.model.users;
import com.example.demo.model.Academicdetails;

public interface Academicrepository extends JpaRepository<Academicdetails,Integer>{
	

@Modifying(clearAutomatically = true)
@Transactional
@Query(value = "select * from student", nativeQuery = true)
public users addToTable(@Param("columnName") String columnName, @Param("dataType") String dataType);

@Query(value = "select * from academic_details where br=?1", nativeQuery = true)
public List<Academicdetails> sortbybranch(String branch);

@Query(value = "select skills from industry_skills where industry_id=?1", nativeQuery = true)
public List<String> sortbyskills(int id);

@Query(value = "select college_id from academic_details ", nativeQuery = true)
public List<Integer> findid();
@Query(value = "select skills from academicdetails_skills where academicdetails_college_id=?1", nativeQuery = true)
public List<String> getskills(int id);


	
}
