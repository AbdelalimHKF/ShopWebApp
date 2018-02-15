import { Injectable } from '@angular/core';
import { Shop } from './shop';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { DislikedShop } from './dislikedShop';
import { NearByshops } from './nearby-shops/nearByShops';
import { Observable } from 'rxjs/Observable';
import { DashboardComponent } from './dashboard/dashboard.component';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable()
export class ShopService {
  uri = "http://localhost:8080/updateUser";
  nbShopsExcludeLikedOnes : Shop[]=[];
  
  constructor(private http : HttpClient,
              private userService : UserService ) { }
  
  like(user : User){
    console.log("user with liked shop from service ",user);
    this.http.put(this.uri,user).map( data => data).subscribe(data =>{
      console.log( "respons",data);
    });

  }
  dislike(user : User){
    console.log("user with disliked shop from service ",user);
    this.http.put(this.uri,user).map( data => data).subscribe(data =>{
      console.log( "respons",data);
    });
  }

  remove(user : User){
    this.http.put(this.uri,user).map( data => data).subscribe(data =>{
      console.log( "updated user",data);
    }); 
  }
  
  getNearbyShops(url : string ) : Observable<NearByshops>{
    
         let coordinate = {
          "longitude": this.userService.coordinate.longitude,
          "latitude": this.userService.coordinate.latitude
        }
      
      return this.http.post<NearByshops>( url , coordinate);
  }     
   

  index : number;
  deleteShop(shop : Shop , shops : Shop[]){
    console.log("deleteShop Called : preferredShops",shops);
    this.index = shops
    .findIndex(obj => obj.id.timestamp === shop.id.timestamp 
      && obj.id.processIdentifier === shop.id.processIdentifier
      && obj.name === shop.name);
      shops.splice(this.index, 1);
      console.log("shop deleted",shops);
  }

  addShop(shop : Shop , shops : Shop[]){
     if(!this.isExist(shop, shops)){
      shops.push(shop);
     }
  }
  addDislikedShop(shop : DislikedShop , shops : DislikedShop[]){
    if(!this.isDislikedShopExist(shop, shops)){
     shops.push(shop);
    }
 }
  
  isExist(shop : Shop , shops : Shop[]) :boolean{
    if(shops
      .findIndex(obj => obj.name === shop.name
            && obj.id.timestamp === shop.id.timestamp 
            && obj.id.processIdentifier === shop.id.processIdentifier)>=0){
        return true;
    }
    return false;
  }

  isDislikedShopExist(dislikedShop : DislikedShop , shops : DislikedShop[]) :boolean{
    if(shops
      .findIndex(obj => obj.shop.name === dislikedShop.shop.name
            && obj.shop.id.timestamp === dislikedShop.shop.id.timestamp 
            && obj.shop.id.processIdentifier === dislikedShop.shop.id.processIdentifier)>=0){
        return true;
    }
    return false;
  }

}
