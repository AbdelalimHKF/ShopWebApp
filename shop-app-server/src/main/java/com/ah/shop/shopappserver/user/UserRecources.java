package com.ah.shop.shopappserver.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ah.shop.shopappserver.shops.Shop;
import com.ah.shop.shopappserver.shops.ShopRepository;
import com.ah.shop.shopappserver.user.Form;

@CrossOrigin(origins = "*")
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
	@RequestMapping("/getForm")
	public Form getForm(){
		
		return new Form("@email", "passwd");
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
	
	
	
	@RequestMapping(method=RequestMethod.POST, value="/authentification")
	public User getAuthUser(@RequestBody Form form){
		
		System.out.println("email : "+form.email );
		System.out.println("passwprd : "+form.passWd );
		
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
	
	
	
	@RequestMapping("/register/{userName}:{email}:{passWd}")
	public User addUser(@PathVariable("userName") String userName,
							@PathVariable("passWd")String passWd,
							@PathVariable("email")String email){
		
		User user = new User(userName, email, passWd, new ArrayList<Shop>());
		user = userRepository.save(user);
				
		return user;
		}
	
	@RequestMapping(method=RequestMethod.POST, value="/register")
	public User addUser1(@RequestBody Form form){
		
		System.out.println("email : "+form.email );
		System.out.println("passwprd : "+form.passWd );
		User user = new User(form.getEmail(), form.getPassWd(), new ArrayList<Shop>());
		
		user = userRepository.save(user);
				
		return user;
		}

	@RequestMapping(method=RequestMethod.POST, value="/form")
	public Form form(@RequestBody Form form){
		
		System.out.println("email : "+form.email );
		System.out.println("passwprd : "+form.passWd );
		
		new Form(form.email,form.passWd);
				
		return new Form(form.email,form.passWd);
		}
	

}
