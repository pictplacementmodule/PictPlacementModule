package com.example.demo.repository;
import java.sql.Date;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Studentdetails;
import com.example.demo.model.industry;

public interface industryrepo extends JpaRepository<industry,Integer>{
	
	@Query(value="select * from industry order by id ASC",nativeQuery = true)
	public List<industry> findAll2();

	  @Query(value="SELECT * FROM industry ORDER BY package_lpa desc",nativeQuery=true)
		public List<industry> ByPackage();
		@Query(value="SELECT * FROM industry as i ORDER BY no_of_students desc",nativeQuery=true)
		public List<industry> ByNoOfStudent();
//----------------dates
	@Query("SELECT count(*) > 0 from industry where (?1 = final_date )")
	public boolean addIndustry(Date d1);
	
	@Query("select cast(final_date as date) from industry")
	public List<Date> addFinalDates();
	
	@Query("select cast(start_date as date) from industry")
	public List<Date> addStartDates();
	
	@Query(value="SELECT * FROM industry where (final_date between ?1 and ?2) order by id asc",nativeQuery=true)
	public List<industry> findIndustryByDate(Date d1,Date d2);
	
	@Query(value="SELECT * FROM industry where final_date < NOW() order by id asc",nativeQuery=true)
	public List<industry> findIndustryForUpcomig();
	
	@Query(value = "SELECT distinct skills from industry_skills",nativeQuery=true)
	public List<String> finaAllSkills();
	
	
	@Query(value = "SELECT distinct locality from industry_locality",nativeQuery=true)
	public List<String> finaAllLocations();
	
	
	}

//@Query("SELECT count(*) > 0 from industry where (?1 between start_date and end_date) or (?2 between start_date and end_date)")
		//public boolean addIndustry(Date d1,Date d2);
		
//		@Query("select end_date from industry")
//		public List<Date> addEndDates();
		
//		@Query("select start_date from industry")
//		public List<Date> addStartDates();
		
//		@Query(value="SELECT * FROM industry where (?1 between start_date and end_date) or (?2 between start_date and end_date) or ((start_date between ?1 and ?2) and (end_date between ?1 and ?2))",nativeQuery=true)
//		public List<industry> findIndustryByDate(Date d1,Date d2);
		