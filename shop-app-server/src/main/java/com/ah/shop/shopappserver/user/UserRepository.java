package com.ah.shop.shopappserver.user;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User, ObjectId>   {

	User findByUserName(String string);

}
