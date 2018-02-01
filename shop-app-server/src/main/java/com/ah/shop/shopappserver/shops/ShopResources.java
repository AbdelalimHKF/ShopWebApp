package com.ah.shop.shopappserver.shops;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Distance;
import org.springframework.data.geo.GeoResults;
import org.springframework.data.geo.Metrics;
import org.springframework.data.geo.Point;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




@RestController
public class ShopResources {
	@Autowired
	private ShopRepository shopRepository;
	
	@RequestMapping("/shops")
	 public List<Shop> getAllShops(){
		
		return shopRepository.findAll();
		 
	 }
	
	@RequestMapping("/nearbyhops")
	 public GeoResults<Shop> getNearShops(){
		
	
		Point p = new Point(-6.81134,33.95564);
		Distance d = new Distance(0.5, Metrics.KILOMETERS);
		return shopRepository.findByLocationNear(p, d);
		 
	 }
	
	@RequestMapping("/preferredShops")
	 public List<Shop> getPreferredShops() {
		 
		List<Shop> preferredShops = new ArrayList<Shop>();
		
		preferredShops.add(shopRepository.findByName("Gushkool"));
		preferredShops.add(shopRepository.findByName("Datagene"));
		
		
		return preferredShops;
	 }
	 
}
