package com.ah.shop.shopappserver.shops;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Distance;
import org.springframework.data.geo.GeoResults;
import org.springframework.data.geo.Metrics;
import org.springframework.data.geo.Point;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.client.model.geojson.Position;



@CrossOrigin(origins = "*")
@RestController
public class ShopResources {
	@Autowired
	private ShopRepository shopRepository;
	
	@RequestMapping("/shops")
	 public List<Shop> getAllShops(){
		
		return shopRepository.findAll();
		 
	 }
	
	@RequestMapping(method=RequestMethod.POST, value="/nearbyShops")
	 public GeoResults<Shop> getNearShops(@RequestBody Coordinate coordinate){
				
		Point p = new Point(coordinate.longitude,coordinate.latitude);
		Distance d = new Distance(1.4, Metrics.KILOMETERS);
		return shopRepository.findByLocationNear(p, d);
		 
	 }
	
	@RequestMapping("/preferredShopsOld")
	 public List<Shop> getPreferredShops() {
		 
		List<Shop> preferredShops = new ArrayList<Shop>();
		
		preferredShops.add(shopRepository.findByName("Gushkool"));
		preferredShops.add(shopRepository.findByName("Datagene"));
		
		
		return preferredShops;
	 }
	 
}
