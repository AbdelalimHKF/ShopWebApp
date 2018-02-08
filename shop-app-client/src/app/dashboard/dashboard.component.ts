import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

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
  }

}
