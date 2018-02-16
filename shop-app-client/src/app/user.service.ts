import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shop } from './shop';
import { Observable } from 'rxjs/Observable';
import { Form } from './form';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable()
export class UserService {
  

  constructor(private http : HttpClient, private router : Router) {
    this.isAuthenticated=false;
   }
  uri ="http://localhost:8080/authentification/";
  regitUri ="http://localhost:8080/register/";
  url :any;
  authenticatedUser : User;
  message : String;
  resForm : any;
  isAuthenticated : boolean ;

  getPreferredShops(): Shop[] {
     if (this.authenticatedUser != null) {
      return this.authenticatedUser.preferredShops;
     }
  }

  login(form : any) : Observable<User> {
    return this.http.post<User>("http://localhost:8080/authentification",form);
 }


 register(form : Form) : Observable<User> {
   return this.http.post<User>("http://localhost:8080/register", form, httpOptions);
}

  coordinate={ "latitude": 0,"longitude": 0} ;
  getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(p =>{
       this.coordinate = {
        "longitude": p.coords.longitude,
        "latitude": p.coords.latitude
        }
      });
    } else { 
    console.log("can't find location");
    } 
   }

   setIsAuthenticated( v : boolean ) : void {
     this.isAuthenticated = v;
   }
   getIsAuthenticated() : boolean {
    return this.isAuthenticated;
  }
 
}

