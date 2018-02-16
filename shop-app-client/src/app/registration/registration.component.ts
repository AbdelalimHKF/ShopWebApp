import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Conditional } from '@angular/compiler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import { Form } from '../form';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regitUri ="http://localhost:8080/register/";

  constructor(private userService : UserService,
              private http :HttpClient,
              private router : Router) { }

  passwd :String;
  match_pw_message = "";
  displayForm = true ;
  isUserAdded = false;
  form : Form = new Form("","");

  onKey1(passwd : String ){
    this.passwd = passwd;
  }
  onKey2(re_entred_passwd : String ){
   if(re_entred_passwd != this.passwd){
    this.match_pw_message = "Passwds dosen't match";
   }else{
    this.match_pw_message="";
   }
  }

  register(email : String, passWd : String) {
    this.form.email=email; this.form.passWd=passWd;
    this.userService.register(this.form).map(data => data).subscribe(data => {
      if(data){
        console.log("added User",data);
        this.isUserAdded=true;
        this.displayForm=false;
        //this.router.navigate(['']);
      }
    });   
  } 

  ngOnInit() {
  }

}
