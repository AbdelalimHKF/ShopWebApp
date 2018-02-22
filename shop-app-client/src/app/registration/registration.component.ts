import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Conditional } from '@angular/compiler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import { Form } from '../form';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

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

  match_pw_message = "Re-Enter your password";
  displayForm = true ;
  isUserAdded = false;
  form : Form = new Form("","");

  hide = true;
  email : FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwd : FormControl = new FormControl('', Validators.required);
  re_entred_passwd : FormControl = new FormControl('', Validators.required);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getErrorPasswdMessage() {
    return  this.passwd.hasError('required') ? 'You must enter a password' :
            '';
  }

  getErrorPasswd2Message() {
    return  this.re_entred_passwd.hasError('required') ? 'You must reenter the password' :
            '';
  }

  btnDisabled : boolean = true;
  onKey(){
    this.getError();
  }
  onKey2(){
    this.getError();
    this.isPasswdMatchs();
  }
  getError() {
    return  this.email.hasError('required') ?  this.btnDisabled=true:
      this.passwd.hasError('required') ?  this.btnDisabled=true:
      this.re_entred_passwd.hasError('required') ?  this.btnDisabled=true:
      this.email.hasError('email') ?  this.btnDisabled=true :
      this.re_entred_passwd.value !=this.passwd.value ? this.btnDisabled=true:
      this.btnDisabled=false;
  }

  passwdMatchs : boolean;
  isPasswdMatchs(){
   this.passwdMatchs = this.re_entred_passwd.value != this.passwd.value ;
  }

  register() {
    this.form.email=this.email.value; this.form.passWd=this.passwd.value;
    this.userService.register(this.form).map(data => data).subscribe(data => {
      if(data){
        console.log("added User",data);
        this.isUserAdded=true;
        this.displayForm=false;
      }
    });   
  } 

  ngOnInit() {
  }

}
