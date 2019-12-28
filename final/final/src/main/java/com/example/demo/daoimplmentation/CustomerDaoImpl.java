package com.example.demo.daoimplmentation;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Academicdetails;
import com.example.demo.model.AdminPlaced;
import com.example.demo.model.EligibleStudents;
import com.example.demo.model.countofplaced;
import com.example.demo.service.Userservice;
//-------------CLASS FOR WRITING SQL QUERIES IN JDBC---------------------
@Repository
public class CustomerDaoImpl extends JdbcDaoSupport implements CustomerDao{
 
    @Autowired 
    DataSource dataSource;
 
    @PostConstruct
    private void initialize(){
        setDataSource(dataSource);
    }
    //...

	@Override
	 public List<countofplaced> countofstudents(){
	    String sql = "Select count(id),idname from placedstudents group by idname";
	    List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);
	    
	    List<countofplaced> result = new ArrayList<countofplaced>();
	    for(Map<String, Object> row:rows){
	      countofplaced cus = new countofplaced();
	      cus.setCount((Long)row.get("count"));
	      cus.setName((String)row.get("idname"));
		    System.out.println(cus.getCount()+" name "+cus.getName());

	      result.add(cus);
	    }
	    return result;
	  }
	 @Override
	 public List<AdminPlaced> adminplaced(){
		    List<AdminPlaced> result = new ArrayList<AdminPlaced>();

		 try
	  
	  {
		 String sql = "select p.id as pid,concat(s.fn,' ',s.ln) as sfn,c.name as cname,p.package_lpa as pack,p.location as loc,p.pl_status as status from placedstudents as p,Studentpersonal_Details as s,industry as c where p.id = s.rollno AND c.id = p.comp_id AND p.pl_status='false'";
	    List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);
	    
	    for(Map<String, Object> row:rows){
	      AdminPlaced cus = new AdminPlaced();
	      cus.setRoll(((int)row.get("pid")));
	      System.out.print(cus.getRoll());
	      cus.setStu_name((String)row.get("sfn"));
	      cus.setComp_name((String)row.get("cname"));
	      cus.setPackage_lpa(((Float)row.get("pack")).intValue());
	      System.out.print(cus.getPackage_lpa());

	      cus.setLocation((String)row.get("loc"));
	      cus.setStatus((Boolean)row.get("status"));
	     

	      result.add(cus);
	    }
	  }
	  catch(Exception e)
	  {
		System.out.println(e);  
	  }
	    return result;

	  }
	 
	 @Override
	 public List<EligibleStudents> eligibility( String comp_id){
		 int i;
		 System.out.println("\n"+comp_id);
	    String sql = "select s.rollno as sid,concat(s.fn,' ',s.ln) as sname,a.sgpatefs as sgpa from studentpersonal_details as s,academic_details as a,industry as i where a.sgpatefs>=i.criteria  AND s.rollno=a.college_id AND a.placed='false' AND i.id =?";
	    try{
	        i = Integer.parseInt(comp_id);
	
	    } catch(NumberFormatException ex){ // handle your exception
	    	System.out.print("come here");
	        i=0;
	    }
	   
	    List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql,new Object[] {i});
	    
	    List<EligibleStudents> result = new ArrayList<EligibleStudents>();
	    for(Map<String, Object> row:rows){
	      EligibleStudents cus = new EligibleStudents();
	      
	      cus.setRoll((int)row.get("sid"));
	      cus.setName((String)row.get("sname"));
	      cus.setSgpaTEFS((float)row.get("sgpa"));

	      result.add(cus);
	    }
	    System.out.println(result);
	    return result;
	  }

	@Override
	 public int getTotalNumberCustomer() {
	     String sql = "SELECT Count(*) FROM log";
	     int total = getJdbcTemplate().queryForObject(sql, Integer.class);
	     return total;
	 }
}



/*
@Override
 public Customer findCustomerById(long cust_id) {
   String sql = "SELECT * FROM customer WHERE CUST_ID = ? ";
   return (Customer)getJdbcTemplate().queryForObject(sql, new Object[]{cust_id}, new RowMapper<Customer>(){
     @Override
     public Customer mapRow(ResultSet rs, int rwNumber) throws SQLException {
       Customer cust = new Customer();
       cust.setCustId(rs.getLong("cust_id"));
       cust.setName(rs.getString("name"));
       cust.setAge(rs.getInt("age"));
       return cust;
     }
   });
 }
@Override
public String findNameById(long cust_id) {
    String sql = "SELECT name FROM customer WHERE cust_id = ?";
    return getJdbcTemplate().queryForObject(sql, new Object[]{cust_id}, String.class);
}*/