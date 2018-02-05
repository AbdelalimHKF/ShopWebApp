import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shop } from './shop';
import { Observable } from 'rxjs/Observable';
import { Form } from './form';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable()
export class UserService {
  

  constructor(private http : HttpClient) { }
  uri ="http://localhost:8080/auth/";
  regitUri ="http://localhost:8080/register/";
  url :any;
  authenticatedUser : User;
  message : String;

  login(email : String, passWd : String) : void {
    this.url = this.uri+email+":"+passWd ;
    console.log(this.url);
    this.http.get<User>(this.url).map(data =>data).subscribe(data => {
      console.log("data : ",data);
      if(data==null){
        this.message="uncorrect email or password";
        console.log("uncorrect email or password");
      }else{
        this.authenticatedUser = data;
      }
      
    });
  }

  getUPreferredShops(): Shop[] {
    
     if (this.authenticatedUser != null) {
      console.log(this.authenticatedUser.preferredShops)
      return this.authenticatedUser.preferredShops;
     }
  }

  registerService(form : Form) : void {
    
    this.http.post(this.regitUri , form , httpOptions).pipe();
    
  }
}

