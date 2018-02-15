import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService : UserService) { }

  nearbyShopsShowed : Boolean = false;
  preferredShopsShowed : Boolean = false;

  showNearbyShops(){
    this.nearbyShopsShowed =true;
    this.preferredShopsShowed= false;
  }

  showPreferredShops(){
    this.preferredShopsShowed= true;
    this.nearbyShopsShowed =false;
  }

  ngOnInit() {    
    this.userService.getLocation();
  }

}
