import { Injectable } from '@angular/core';
import { Shop } from './shop';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShopService {
  uri = "http://localhost:8080/updateUser";

  constructor(private http : HttpClient) { }
  
  like(user : User){
    console.log("user with liked shop from service ",user);
    this.http.put(this.uri,user).map( data => data).subscribe(data =>{
      console.log( "respons",data);
    });

  }
  dislike(user : User){
    console.log("user with disliked shop from service ",user);
  }

}
