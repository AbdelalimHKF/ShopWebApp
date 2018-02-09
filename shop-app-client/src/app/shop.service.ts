import { Injectable } from '@angular/core';
import { Shop } from './shop';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable()
export class ShopService {
  uri = "http://localhost:8080/updateUser";

  constructor(private http : HttpClient,private userService : UserService ) { }
  
  like(user : User){
    console.log("user with liked shop from service ",user);
    this.http.put(this.uri,user).map( data => data).subscribe(data =>{
      console.log( "respons",data);
    });

  }
  dislike(user : User){
    console.log("user with disliked shop from service ",user);
  }

  remove(user : User){
    this.http.put(this.uri,user).map( data => data).subscribe(data =>{
      console.log( "updated user",data);
    });
  }

  index : number;
  deleteShop(shop : Shop){
    console.log("deleteShop Called : preferredShops",
    this.userService.authenticatedUser.preferredShops);
    this.index = this.userService.authenticatedUser.preferredShops
    .findIndex(obj => obj.id.timestamp === shop.id.timestamp 
      && obj.id.processIdentifier === shop.id.processIdentifier);
      this.userService.authenticatedUser.preferredShops.splice(this.index, 1);
      console.log("shop deleted",
      this.userService.authenticatedUser.preferredShops);
  }

}
