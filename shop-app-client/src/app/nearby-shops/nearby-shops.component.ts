import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../shop';
import { NearByshops, Content } from './nearByShops';
import 'rxjs/add/operator/map';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nearby-shops',
  templateUrl: './nearby-shops.component.html',
  styleUrls: ['./nearby-shops.component.css']
})
export class NearbyShopsComponent implements OnInit {

  constructor(private http : HttpClient,
              private userService : UserService) { }

  nearByshops : NearByshops; //{averagdist ,content} || {averagdist,{shop,distance}}
  nbshops : Content[];// [{shop,distance},{}...]
  listNbShop : Shop[]=[];
  tempListNbShop : Shop[]=[];

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
        console.log("listNbShop befor displayNearByShops()", this.listNbShop);
        this.displayNearByShops();
        console.log("listNbShop listNbShop After displayNearByShops()", this.listNbShop);
      });
  }

  index :number;
  i : number;
  displayNearByShops(){

    for(this.i=0;this.i<this.nbshops.length;this.i++){
        this.listNbShop.push(this.nbshops[this.i].content);
    }
    console.log("this.listNbShop",this.listNbShop);

    //delete shop from listNbShop if exist in preferrd shop,
    for(this.i=0;this.i<this.listNbShop.length;this.i++){

      if(this.userService.authenticatedUser
        .preferredShops.length > 0 
         && this.userService.authenticatedUser
        .preferredShops[this.i] != undefined){
          if(this.isExist(this.userService.authenticatedUser
            .preferredShops[this.i])){
            this.index= this.listNbShop
            .findIndex(obj => obj.id.timestamp === this.userService.authenticatedUser
              .preferredShops[this.i].id.timestamp 
                && obj.id.processIdentifier === this.userService.authenticatedUser
                .preferredShops[this.i].id.processIdentifier)
                console.log("this.listNbShop.length befor splice",this.listNbShop.length);
              this.listNbShop.splice(this.i, 1);
              console.log("this.listNbShop.length after splice",this.listNbShop.length);
              
          }
      }
    }
  }

  myfindIndex(shop : Shop) : number {
    return this.listNbShop
      .findIndex(obj => obj.id.timestamp === shop.id.timestamp 
            && obj.id.processIdentifier === shop.id.processIdentifier);
  }

  isExist(shop : Shop) :boolean {
    if(this.listNbShop
      .findIndex(obj => obj.id.timestamp === shop.id.timestamp 
            && obj.id.processIdentifier === shop.id.processIdentifier
          && obj.name === shop.name)>=0){
        return true;
    }
    return false;
  }


  ngOnInit() {
    this.getNearbyShops();
    
    
  }

}
