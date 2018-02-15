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
  

  constructor(private http : HttpClient,private router : Router) { }
  uri ="http://localhost:8080/authentification/";
  regitUri ="http://localhost:8080/register/";
  url :any;
  authenticatedUser : User;
  message : String;
  resForm : any;
  isAuthenticated : boolean = false;

  getPreferredShops(): Shop[] {
     if (this.authenticatedUser != null) {
      console.log(this.authenticatedUser.preferredShops)
      return this.authenticatedUser.preferredShops;
     }
  }

  registerService(form : Form) : void {
    console.log("register service called");
    console.log(form);
      this.http.post<User>("http://localhost:8080/register", form, httpOptions)
      .map(data => data).subscribe(data => {
        if(data){
          console.log("added User",data);
          this.router.navigate(['welcome']);
        }
      });
    
  }

  postForm(form : any){
    console.log("postForm called");
    console.log(form);
    return this.http.post("http://localhost:8080/form",form).map(data =>data)
    .subscribe(data  =>  {
      this.resForm = data;
      console.log(this.resForm );
    });
  }

  login(form : any) : any {
    console.log("postFormLogin called");
    console.log(form);
    return this.http.post<User>("http://localhost:8080/authentification",form).map(data =>data)
    .subscribe(data  =>  {
      console.log("data : ",data);
      if(data==null){
        this.isAuthenticated=false;
        this.message="uncorrect email or password";
        console.log("from service", this.message);
      }else{
        this.isAuthenticated=true;
        this.authenticatedUser = data;
        this.router.navigate(['dashboard']);
      }
      
    });
  }

  coordinate={
    "latitude": 0,
    "longitude": 0
  } ;
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
 
}

