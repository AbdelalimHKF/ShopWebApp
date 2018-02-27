package com.ah.shop.shopappserver.user;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ah.shop.shopappserver.shops.DislikedShop;
import com.ah.shop.shopappserver.shops.Shop;

@CrossOrigin(origins = "*")
@RestController
public class UserRecources {
	
	@Autowired
	private UserRepository userRepository;
	
	
	@RequestMapping(method=RequestMethod.POST, value="/authentication")
	public User getAuthUser(@RequestBody Form form){

		User user = userRepository.findByEmail(form.email);
			if (user != null) {
				if (user.getPasswd().hashCode()==form.passWd.hashCode()) {
					return user;
					}else {
					return null;
					}
			}
		return null;
		}
	

	@RequestMapping(method=RequestMethod.POST, value="/register")
	public User addUser(@RequestBody Form form){
		
		User user = new User(form.getEmail(), form.getPassWd(),	
				new ArrayList<Shop>(), new ArrayList<DislikedShop>());
		user = userRepository.save(user);
		return user;
		}
	
	@RequestMapping(method=RequestMethod.PUT, value="/updateUser")
	public User apdateUser(@RequestBody User user){
		user = userRepository.save(user);
		return user;
		}

	

}
