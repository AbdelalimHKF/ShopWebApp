package com.ah.shop.shopappserver.shops;

import java.util.Date;

public class DislikedShop {
	
	private Date date;
    private Shop  shop;
    
	public DislikedShop() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DislikedShop(Date date, Shop shop) {
		super();
		this.date = date;
		this.shop = shop;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Shop getShop() {
		return shop;
	}

	public void setShop(Shop shop) {
		this.shop = shop;
	}
	
    

}
