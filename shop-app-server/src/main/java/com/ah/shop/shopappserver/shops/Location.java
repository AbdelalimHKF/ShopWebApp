package com.ah.shop.shopappserver.shops;

import java.util.ArrayList;

public class Location {
	

	private String type;
	private ArrayList<Double> coordinates;
	
	public Location() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Location(String type, ArrayList<Double> coordinates) {
		super();
		this.type = type;
		this.coordinates = coordinates;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public ArrayList<Double> getCoordinates() {
		return coordinates;
	}

	public void setCoordinates(ArrayList<Double> coordinates) {
		this.coordinates = coordinates;
	}
	


}