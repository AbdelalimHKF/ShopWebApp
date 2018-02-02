package com.ah.shop.shopappserver.user;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ah.shop.shopappserver.shops.Shop;
import com.ah.shop.shopappserver.shops.ShopRepository;

@RestController
public class UserRecources {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ShopRepository shopRepository;
	
	@RequestMapping("/allusers")
	public List<User> getAllUsers(){
		
		return userRepository.findAll();
		}
	
	@RequestMapping("/initusers")
	public List<User> initUsers(){
		
		List<Shop> preferredShops= new ArrayList<Shop>();
		
		preferredShops.add(shopRepository.findByName("Gushkool"));
		preferredShops.add(shopRepository.findByName("Datagene"));
		
		User user = new User("Alice", "alice@email.com","passwd", preferredShops);
		userRepository.save(user);
		return userRepository.findAll();
		}
	
	//to be modified : add userName & passwd pathVars)
	@RequestMapping("/auth")
	public User getAuthUser(){
		
		return userRepository.findByUserName("Alice");
		}
	
	

}
