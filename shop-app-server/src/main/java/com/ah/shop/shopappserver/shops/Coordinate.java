package com.ah.shop.shopappserver.shops;

public class Coordinate {
	
	double latitude;
	double longitude;
	
	public Coordinate(double latitude, double longitude) {
		super();
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public Coordinate() {
		super();
		// TODO Auto-generated constructor stub
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	
	
	
	

}
