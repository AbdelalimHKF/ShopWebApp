import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Tree } from '@angular/router/src/utils/tree';
import { Form } from '../form';
import { User } from '../user';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private userService : UserService,
              private router : Router) { }
 
  message : String;
  form : Form = new Form("","");
  hide = true;
  email : FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwd : FormControl = new FormControl('', Validators.required);
  getErrorEmailMessage() {
    return  this.email.hasError('required') ? 'You must enter an email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorPasswdMessage() {
    return  this.passwd.hasError('required') ? 'You must enter a password' :
            '';
  }

  btnDisabled : boolean = true;
  onKey(){
    this.getError();
  }
  getError() {
    return  this.email.hasError('required') ?  this.btnDisabled=true:
      this.passwd.hasError('required') ?  this.btnDisabled=true:
      this.email.hasError('email') ?  this.btnDisabled=true :
      this.btnDisabled=false;
  }


  login( ) {
    this.form.email=this.email.value; this.form.passWd=this.passwd.value;
    this.userService.login(this.form).map(data => data).subscribe(data  =>  {
      if(data==null){
        this.userService.isAuthenticated=false;
        this.message="incorrect email or password";       
      }else{
        this.userService.authenticatedUser = data;
        this.userService.isAuthenticated=true;
        this.router.navigate(['dashboard']);
      }
    });  
  }



  ngOnInit() {
  }

}
