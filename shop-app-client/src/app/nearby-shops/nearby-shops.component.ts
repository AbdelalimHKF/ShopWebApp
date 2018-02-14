import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../shop';
import { NearByshops, Content } from './nearByShops';
import 'rxjs/add/operator/map';
import { UserService } from '../user.service';
import { ShopService } from '../shop.service';
import { DislikedShop } from '../dislikedShop';
import { forEach } from '@angular/router/src/utils/collection';

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
  url ='http://localhost:8080/nearbyShops';

  getNearbyShops() : void {
    this.http.get<NearByshops>(this.url)
      .map(resp => resp).subscribe(data => {
        this.nearByshops = data;
        this.nbshops=this.nearByshops.content;
        this.displayNearByShops();
      });
  }

  index :number;
  index2 :number;
  displayShop : boolean;
  i : number;
  displayNearByShops(){
    //let displayShop : boolean=true;
    this.shopService.nbShopsExcludeLikedOnes=[];
    for(this.i=0; this.i<this.nbshops.length; this.i++){
      this.displayShop = true;
      //hasn't to be in the disliked shops list && disliked.date > 2 hours 
      // to be added in nbShopsExcludeLikedOnes
      this.index2= this.myfindIndexDS(this.nbshops[this.i].content ,
        this.userService.authenticatedUser.dislikedShops)
        if(this.index2 > -1){
          // shop exist in the dislikes shops so it won't be diplayed in the nearbyshops
          //if the time witch is disliked in < than 2 hours (7200000ms) || 1 min (60000ms) for testing
          // 
          console.log(this.userService.authenticatedUser
            .dislikedShops[this.index2].shop.name,"should be displayed? :","***",
          new Date().getTime() - new Date(this.userService.authenticatedUser
            .dislikedShops[this.index2].date).getTime() > 60000);

          console.log(this.userService.authenticatedUser
            .dislikedShops[this.index2].shop.name,"will be displayed in",
            new Date(new Date(this.userService.authenticatedUser
            .dislikedShops[this.index2].date).getTime()+60000)) ;
         

            this.displayShop=(new Date().getTime() - new Date(this.userService.authenticatedUser
            .dislikedShops[this.index2].date).getTime() > 60000);
            console.log("displayShop",this.displayShop);

            if(this.displayShop){
              //delete disliked shop form dislikedshops list after 2hours (1min) from the date witch the shop is disliked
              this.deleteDislikedShop(this.nbshops[this.i].content,this.userService.authenticatedUser
                .dislikedShops);

            }
        }

        this.index = this.myfindIndex(this.nbshops[this.i].content ,
        this.userService.authenticatedUser.preferredShops )

      if(this.index < 0 && this.displayShop){
      // the nearbyshop doesn't exist in the preferred shops
      this.shopService.nbShopsExcludeLikedOnes.push(this.nbshops[this.i].content);
      }
      
    }
  }


  myfindIndex(shop : Shop , listShops : Shop[]) : number {
    return listShops
      .findIndex(obj => obj.id.timestamp === shop.id.timestamp 
            && obj.id.processIdentifier === shop.id.processIdentifier
          && obj.name === shop.name);
  }

  myfindIndexDS(shop : Shop , listDislikedShops : DislikedShop[]) : number {

    return listDislikedShops
      .findIndex(obj => obj.shop.id.timestamp === shop.id.timestamp 
            && obj.shop.id.processIdentifier === shop.id.processIdentifier
          && obj.shop.name === shop.name);    
  }

  deleteDislikedShop(shop : Shop , dislikedShops : DislikedShop[]){
    console.log("deleteShop Called : dislikedShops",dislikedShops);
    let index = dislikedShops
    .findIndex(obj => obj.shop.id.timestamp === shop.id.timestamp 
      && obj.shop.id.processIdentifier === shop.id.processIdentifier
      && obj.shop.name === shop.name);
      dislikedShops.splice(index, 1);
      
  }


  ngOnInit() {
    this.getNearbyShops();
  }

}
