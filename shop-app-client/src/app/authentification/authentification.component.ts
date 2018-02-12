import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Tree } from '@angular/router/src/utils/tree';
import { Form } from '../form';
import { log } from 'util';
import { User } from '../user';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private userService : UserService) { }
 
  message : String;
  form : Form = new Form("","");

  login(email : String, passWd : String) {
    this.form.email=email; this.form.passWd=passWd;
    this.userService.login(this.form)
    
    if(this.userService.isAuthenticated==false){
      this.message = "uncorrect email or password";
    }
  } 

  ngOnInit() {
  }

}
