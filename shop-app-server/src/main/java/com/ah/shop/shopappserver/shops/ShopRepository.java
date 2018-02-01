package com.ah.shop.shopappserver.shops;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ShopRepository  extends MongoRepository<Shop, ObjectId>{
  
}
