import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  authFormShowed : boolean = true;
  sigupClicked : boolean = false;

  signUp(){
    this.sigupClicked=true;
    this.authFormShowed = false;
  }
  ngOnInit() {
  }

}
