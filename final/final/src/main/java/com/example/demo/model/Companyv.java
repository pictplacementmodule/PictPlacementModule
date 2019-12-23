package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="companyvisitec")
public class Companyv {
@Id
	String SrNo;
@Column

	String Company ;
	@Column
		String CGPA ;
	@Column
String Branch ;
	@Column

		String BEC ;
	@Column

		String CE ;
	@Column

		  String BEE ;
	@Column
		String ENTC ;
	@Column
		String BEIT ;
	@Column
		String MECE ;
	@Column
		String MEENTC ;
	@Column
		String MEIT ;
	@Column
		String M ;
	@Column
		String F ;
	@Column
		String T;
	@Column
		String SalLPA ;
	@Column
		String VisitDate ;
	@Column
		String TSalLPA ;
	
	    public Companyv(){
	
	    }
	 
	    public Companyv(String SrNo,String Company ,String CGPA ,String Branch ,String BEC ,String CE ,String BEE ,String ENTC ,String BEIT ,String MECE ,String MEENTC,String MEIT,String M ,String F,String T,String SalLPA,String VisitDate,String TSalLPA)     {
	    	this.SrNo = SrNo;
	    	this.Company  = Company;
	    	this.CGPA  = CGPA;
	    	this.Branch = Branch;
	    	this.BEC = BEC;
	    	this.CE = CE;
	    	this.BEE= BEE;
	    	this.ENTC = ENTC;
	    	this.BEIT = BEIT;
	    	this.MECE = MECE;
	    	this.MEENTC = MEENTC;
	    	this.MEIT = MEIT;
	    			this.Company = M;
	    this.F = F;
	  this.T = T;
	  this.SalLPA = SalLPA;
	  this.VisitDate= VisitDate;
	  this.TSalLPA = TSalLPA;     
	 	     
	    }

		

		public String getSrNo() {
			return SrNo;
		}

		public void setSrNo(String srNo) {
			SrNo = srNo;
		}

		public String getCompany() {
			return Company;
		}

		public void setCompany(String company) {
			Company = company;
		}

		public String getCGPA() {
			return CGPA;
		}

		public void setCGPA(String cGPA) {
			CGPA = cGPA;
		}

		public String getBranch() {
			return Branch;
		}

		public void setBranch(String branch) {
			Branch = branch;
		}

		public String getBEC() {
			return BEC;
		}

		public void setBEC(String bEC) {
			BEC = bEC;
		}

		public String getCE() {
			return CE;
		}

		public void setCE(String cE) {
			CE = cE;
		}

		public String getBEE() {
			return BEE;
		}

		public void setBEE(String bEE) {
			BEE = bEE;
		}

		public String getENTC() {
			return ENTC;
		}

		public void setENTC(String eNTC) {
			ENTC = eNTC;
		}

		public String getBEIT() {
			return BEIT;
		}

		public void setBEIT(String bEIT) {
			BEIT = bEIT;
		}

		public String getMECE() {
			return MECE;
		}

		public void setMECE(String mECE) {
			MECE = mECE;
		}

		public String getMEENTC() {
			return MEENTC;
		}

		public void setMEENTC(String mEENTC) {
			MEENTC = mEENTC;
		}

		public String getMEIT() {
			return MEIT;
		}

		public void setMEIT(String mEIT) {
			MEIT = mEIT;
		}

		public String getM() {
			return M;
		}

		public void setM(String m) {
			M = m;
		}

		public String getF() {
			return F;
		}

		public void setF(String f) {
			F = f;
		}

		public String getT() {
			return T;
		}

		public void setT(String t) {
			T = t;
		}

		public String getSalLPA() {
			return SalLPA;
		}

		public void setSalLPA(String salLPA) {
			SalLPA = salLPA;
		}

		public String getVisitDate() {
			return VisitDate;
		}

		public void setVisitDate(String visitDate) {
			VisitDate = visitDate;
		}

		public String getTSalLPA() {
			return TSalLPA;
		}

		public void setTSalLPA(String tSalLPA) {
			TSalLPA = tSalLPA;
		}
		@Override
		public String toString() {
			return "Companyv [SrNo=" + SrNo + ", Company=" + Company + ", CGPA=" + CGPA + ", Branch=" + Branch
					+ ", BEC=" + BEC + ", CE=" + CE + ", BEE=" + BEE + ", ENTC=" + ENTC + ", BEIT=" + BEIT + ", MECE="
					+ MECE + ", MEENTC=" + MEENTC + ", MEIT=" + MEIT + ", M=" + M + ", F=" + F + ", T=" + T
					+ ", SalLPA=" + SalLPA + ", VisitDate=" + VisitDate + ", TSalLPA=" + TSalLPA + "]";
		}
}

