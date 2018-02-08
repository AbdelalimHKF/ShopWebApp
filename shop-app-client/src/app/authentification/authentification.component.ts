import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Tree } from '@angular/router/src/utils/tree';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private userService : UserService) { }
  authFormShowd : boolean = true;
  sigupClicked : boolean = false;
  message : String;

  login(email : String, passWd : String)  : void {
    if( this.userService.login(email,passWd)==null){
     this.message = this.userService.message;
    }
  }

  signUp(){
    this.sigupClicked=true;
    this.authFormShowd = false;
  }
  ngOnInit() {
  }

}
