package com.ah.shop.shopappserver.shops;

import org.bson.types.ObjectId;
import org.springframework.data.geo.Distance;
import org.springframework.data.geo.GeoResults;
import org.springframework.data.geo.Point;
import org.springframework.data.mongodb.repository.MongoRepository;




public interface ShopRepository  extends MongoRepository<Shop, ObjectId>{
  
	public GeoResults<Shop>  findByLocationNear(Point p, Distance d); 
}
