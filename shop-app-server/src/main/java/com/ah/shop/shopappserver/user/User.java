package com.ah.shop.shopappserver.user;


import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.ah.shop.shopappserver.shops.Shop;

@Document(collection = "users")
public class User {
	
	@Id
    private ObjectId id ; 
    private String userName;
    private String email ;
    private String passwd ;
    public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}

	private List<Shop> preferredShops;
    
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User( String userName, String email, String passwd,  List<Shop> preferredShops) {
		super();
	
		this.userName = userName;
		this.email = email;
		this.passwd = passwd;
		this.preferredShops = preferredShops;
	}

	

	public User(String email, String passwd, List<Shop> preferredShops) {
		super();
		this.email = email;
		this.passwd = passwd;
		this.preferredShops = preferredShops;
	}

	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<Shop> getPreferredShops() {
		return preferredShops;
	}

	public void setPreferredShops(List<Shop> preferredShops) {
		this.preferredShops = preferredShops;
	}
	
	
    
    
}
