import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private userService : UserService) { }

  message : String;

  login(email : String, passWd : String)  : void {
    if( this.userService.login(email,passWd)==null){
     this.message = this.userService.message;
    }
   
  }
  ngOnInit() {
  }

}
