import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../shop';
import { NearByshops, Content } from './nearByShops';
import 'rxjs/add/operator/map';
import { UserService } from '../user.service';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-nearby-shops',
  templateUrl: './nearby-shops.component.html',
  styleUrls: ['./nearby-shops.component.css']
})
export class NearbyShopsComponent implements OnInit {

  constructor(private http : HttpClient,
              private userService : UserService,
              private shopService : ShopService ) { }

  nearByshops : NearByshops; //{averagdist ,content} || {averagdist,{shop,distance}}
  nbshops : Content[];// [{shop,distance},{}...]
  listNbShop : Shop[]=[];
  //nbShopsExcludeLikedOnes : Shop[]=[];

  url ='http://localhost:8080/nearbyShops';

  getNearbyShops() : void {
    this.http.get<NearByshops>(this.url)
      .map(resp => resp).subscribe(data => {
        this.nearByshops = data;
        this.nbshops=this.nearByshops.content;
        console.log(this.nearByshops);
        console.log(data);
        console.log("nbshops",this.nbshops);
        console.log("preferred shops",this.userService.authenticatedUser.preferredShops);
        this.displayNearByShops();
        console.log("listNbShop listNbShop After displayNearByShops()", this.listNbShop);
      });
  }

  index :number;
  i : number;

  displayNearByShops(){
    this.shopService.nbShopsExcludeLikedOnes=[];

    for(this.i=0;this.i<this.nbshops.length;this.i++){

      this.index= this.myfindIndex(this.nbshops[this.i].content ,
        this.userService.authenticatedUser.preferredShops )
      if(this.index < 0){// the near by shop doesn't exist in the preferred shops
      //this.nbShopsExcludeLikedOnes.push(this.nbshops[this.i].content);
      this.shopService.nbShopsExcludeLikedOnes.push(this.nbshops[this.i].content);
      }
    }

  }


  myfindIndex(shop : Shop , listShops : Shop[]) : number {
    return listShops
      .findIndex(obj => obj.id.timestamp === shop.id.timestamp 
            && obj.id.processIdentifier === shop.id.processIdentifier);
  }

  


  ngOnInit() {
    this.getNearbyShops();
  }

}
