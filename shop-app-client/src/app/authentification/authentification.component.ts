import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Tree } from '@angular/router/src/utils/tree';
import { Form } from '../form';
import { User } from '../user';
import { Router } from '@angular/router';

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

  login(email : String, passWd : String) {
    this.form.email=email; this.form.passWd=passWd;
    this.userService.login(this.form).map(data => data).subscribe(data  =>  {
      if(data==null){
        this.userService.isAuthenticated=false;
        this.message="uncorrect email or password";       
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
