package com.example.demo.model;

import java.util.List;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="academic_details",schema="public")

public class Academicdetails   {
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="collegeId",referencedColumnName="rollno")
	private Studentdetails student;
@Id
@Column(name="collegeId")
int collegeId;
@Column(name="br")
String branch;

@Column(name="prn")

long prnNumber;

public List<String> getSkills() {
	return skills;
}
public void setSkills(List<String> skills) {
	this.skills = skills;
}
@ElementCollection
private List<String> skills;
@Column(name="diploma")
String diploma;
@Column(name="perten")
float percentageTenth;
@Column(name="pertwel")
float percentageTwelfth;
@Column(name="perdip")

float percentageDiploma;
@Column(name="pereng")

float percentageEngineering;
@Column(name="boetenth")

String boeTenth;
@Column(name="boetwelth")

String boeTwelfth;
@Column(name="boediploma")

String boeDiploma;
@Column(name="yoptenth")

String yopTenth;
@Column(name="yoptwelth")
String yopTwelfth;
@Column(name="yopdiploma")
String yopDiploma;
@Column(name="gaptenth")
int gapTenth;
@Column(name="gaptwelth")
int gapTwelfth;
@Column(name="gapdiploma")
int gapDiploma;
@Column(name="rogtenth")
String rogTenth;
@Column(name="rogtwelth")
String rogTwelfth;
@Column(name="rogdiploma")
String rogDiploma;
@Column(name="engstartyear")
String engineeringStartYear;
@Column(name="sgpafefs")
float sgpaFEFS;
@Column(name="sgpafess")
float sgpaFESS;
@Column(name="sgpasefs")
float sgpaSEFS;
@Column(name="sgpasess")
float sgpaSESS;
@Column(name="sgpatefs")
float sgpaTEFS;
@Column(name="sgpatess")
float sgpaTESS;
@Column(name="sgpaaggregate")
float sgpaAggregate;
@Column(name="marksfefs")
float marksFEFS;
@Column(name="marksfess")
float marksFESS;
@Column(name="markssefs")
float marksSEFS;
@Column(name="markssess")
float marksSESS;
@Column(name="markstefs")
float marksTEFS;
@Column(name="markstess")
float marksTESS;
@Column(name="activeback")
int activeBacklogs;
@Column(name="passiveback")
int passiveBacklogs;
@Column(name="yd")
int yeardowns;



public Studentdetails getStudent() {
	return student;
}
public void setStudent(Studentdetails student) {
	this.student = student;
}
public int getCollegeId() {
	return collegeId;
}
public void setCollegeId(int collegeId) {
	this.collegeId = collegeId;
}
public String getBranch() {
	return branch;
}
public void setBranch(String branch) {
	this.branch = branch;
}
public long getPrnNumber() {
	return prnNumber;
}
public void setPrnNumber(long prnNumber) {
	this.prnNumber = prnNumber;
}
public String getDiploma() {
	return diploma;
}
public void setDiploma(String diploma) {
	this.diploma = diploma;
}
public float getPercentageTenth() {
	return percentageTenth;
}
public void setPercentageTenth(float percentageTenth) {
	this.percentageTenth = percentageTenth;
}
public float getPercentageTwelfth() {
	return percentageTwelfth;
}
public void setPercentageTwelfth(float percentageTwelfth) {
	this.percentageTwelfth = percentageTwelfth;
}
public float getPercentageDiploma() {
	return percentageDiploma;
}
public void setPercentageDiploma(float percentageDiploma) {
	this.percentageDiploma = percentageDiploma;
}
public float getPercentageEngineering() {
	return percentageEngineering;
}
public void setPercentageEngineering(float percentageEngineering) {
	this.percentageEngineering = percentageEngineering;
}
public String getBoeTenth() {
	return boeTenth;
}
public void setBoeTenth(String boeTenth) {
	this.boeTenth = boeTenth;
}
public String getBoeTwelfth() {
	return boeTwelfth;
}
public void setBoeTwelfth(String boeTwelfth) {
	this.boeTwelfth = boeTwelfth;
}
public String getBoeDiploma() {
	return boeDiploma;
}
public void setBoeDiploma(String boeDiploma) {
	this.boeDiploma = boeDiploma;
}
public String getYopTenth() {
	return yopTenth;
}
public void setYopTenth(String yopTenth) {
	this.yopTenth = yopTenth;
}
public String getYopTwelfth() {
	return yopTwelfth;
}
public void setYopTwelfth(String yopTwelfth) {
	this.yopTwelfth = yopTwelfth;
}
public String getYopDiploma() {
	return yopDiploma;
}
public void setYopDiploma(String yopDiploma) {
	this.yopDiploma = yopDiploma;
}
public int getGapTenth() {
	return gapTenth;
}
public void setGapTenth(int gapTenth) {
	this.gapTenth = gapTenth;
}
public int getGapTwelfth() {
	return gapTwelfth;
}
public void setGapTwelfth(int gapTwelfth) {
	this.gapTwelfth = gapTwelfth;
}
public int getGapDiploma() {
	return gapDiploma;
}
public void setGapDiploma(int gapDiploma) {
	this.gapDiploma = gapDiploma;
}
public String getRogTenth() {
	return rogTenth;
}
public void setRogTenth(String rogTenth) {
	this.rogTenth = rogTenth;
}
public String getRogTwelfth() {
	return rogTwelfth;
}
public void setRogTwelfth(String rogTwelfth) {
	this.rogTwelfth = rogTwelfth;
}
public String getRogDiploma() {
	return rogDiploma;
}
public void setRogDiploma(String rogDiploma) {
	this.rogDiploma = rogDiploma;
}
public String getEngineeringStartYear() {
	return engineeringStartYear;
}
public void setEngineeringStartYear(String engineeringStartYear) {
	this.engineeringStartYear = engineeringStartYear;
}
public float getSgpaFEFS() {
	return sgpaFEFS;
}
public void setSgpaFEFS(float sgpaFEFS) {
	this.sgpaFEFS = sgpaFEFS;
}
public float getSgpaFESS() {
	return sgpaFESS;
}
public void setSgpaFESS(float sgpaFESS) {
	this.sgpaFESS = sgpaFESS;
}
public float getSgpaSEFS() {
	return sgpaSEFS;
}
public void setSgpaSEFS(float sgpaSEFS) {
	this.sgpaSEFS = sgpaSEFS;
}
public float getSgpaSESS() {
	return sgpaSESS;
}
public void setSgpaSESS(float sgpaSESS) {
	this.sgpaSESS = sgpaSESS;
}
public float getSgpaTEFS() {
	return sgpaTEFS;
}
public void setSgpaTEFS(float sgpaTEFS) {
	this.sgpaTEFS = sgpaTEFS;
}
public float getSgpaTESS() {
	return sgpaTESS;
}
public void setSgpaTESS(float sgpaTESS) {
	this.sgpaTESS = sgpaTESS;
}
public float getSgpaAggregate() {
	return sgpaAggregate;
}
public void setSgpaAggregate(float sgpaAggregate) {
	this.sgpaAggregate = sgpaAggregate;
}
public float getMarksFEFS() {
	return marksFEFS;
}
public void setMarksFEFS(float marksFEFS) {
	this.marksFEFS = marksFEFS;
}
public float getMarksFESS() {
	return marksFESS;
}
public void setMarksFESS(float marksFESS) {
	this.marksFESS = marksFESS;
}
public float getMarksSEFS() {
	return marksSEFS;
}
public void setMarksSEFS(float marksSEFS) {
	this.marksSEFS = marksSEFS;
}
public float getMarksSESS() {
	return marksSESS;
}
public void setMarksSESS(float marksSESS) {
	this.marksSESS = marksSESS;
}
public float getMarksTEFS() {
	return marksTEFS;
}
public void setMarksTEFS(float marksTEFS) {
	this.marksTEFS = marksTEFS;
}
public float getMarksTESS() {
	return marksTESS;
}
public void setMarksTESS(float marksTESS) {
	this.marksTESS = marksTESS;
}
public int getActiveBacklogs() {
	return activeBacklogs;
}
public void setActiveBacklogs(int activeBacklogs) {
	this.activeBacklogs = activeBacklogs;
}
public int getPassiveBacklogs() {
	return passiveBacklogs;
}
public void setPassiveBacklogs(int passiveBacklogs) {
	this.passiveBacklogs = passiveBacklogs;
}
public int getYeardowns() {
	return yeardowns;
}
public void setYeardowns(int yeardowns) {
	this.yeardowns = yeardowns;
}
/*
@Autowired
percentage obj;
public float getTwelfth() {
	return obj.getTwelfth();
}
public void setTwelfth(float twelfth) {
	obj.setTwelfth(twelfth);

}
public float getDiploma() {
	return obj.getDiploma();

}
public void setDiploma(float diploma) {
	obj.setDiploma(diploma);

}*/
}