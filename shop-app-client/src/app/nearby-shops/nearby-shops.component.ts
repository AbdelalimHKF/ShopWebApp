import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../shop';
import { NearByshops, Content } from './nearByShops';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-nearby-shops',
  templateUrl: './nearby-shops.component.html',
  styleUrls: ['./nearby-shops.component.css']
})
export class NearbyShopsComponent implements OnInit {

  constructor(private http : HttpClient) { }

  nearByshops : NearByshops;

  nbshops : Content[];
  url ='http://localhost:8080/nearbyShops';

  getNearbyShops() : void {
    this.http.get<NearByshops>(this.url)
      .map(resp => resp).subscribe(data => {
        this.nearByshops = data;
        this.nbshops=this.nearByshops.content;
        console.log(this.nearByshops);
        console.log(data);
        console.log("nbshops");
        console.log(this.nbshops);
      });
      
  }

  ngOnInit() {
    this.getNearbyShops();
  }

}
