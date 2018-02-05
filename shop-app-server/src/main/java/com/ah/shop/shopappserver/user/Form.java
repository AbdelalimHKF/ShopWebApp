package com.ah.shop.shopappserver.user;

public class Form {
	
	String email ;
	String passWd ;
	public Form() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Form(String email, String passWd) {
		super();
		this.email = email;
		this.passWd = passWd;
	}

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassWd() {
		return passWd;
	}
	public void setPassWd(String passWd) {
		this.passWd = passWd;
	}
	
	  
}
