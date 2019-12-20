package com.example.demo.model;

public class Branches {
	
	boolean computer,it,entc;

	public Branches(boolean computer, boolean it, boolean entc) {
		super();
		this.computer = computer;
		this.it = it;
		this.entc = entc;
	}

	public Branches() {
	}

	@Override
	public String toString() {
		return "Branches [computer=" + computer + ", it=" + it + ", entc=" + entc + "]";
	}

	public boolean isComputer() {
		return computer;
	}

	public void setComputer(boolean computer) {
		this.computer = computer;
	}

	public boolean isIt() {
		return it;
	}

	public void setIt(boolean it) {
		this.it = it;
	}

	public boolean isEntc() {
		return entc;
	}

	public void setEntc(boolean entc) {
		this.entc = entc;
	}

}
