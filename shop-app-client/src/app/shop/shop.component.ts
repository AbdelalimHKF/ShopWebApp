import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../nearby-shops/nearByShops';
import { Shop } from '../shop';
import { ShopService } from '../shop.service';
import { UserService } from '../user.service';
import { DislikedShop } from '../dislikedShop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private shopService : ShopService,
              private userService : UserService) { }
  
  //@Input() nbshop : Content;
  @Input() nbshop :Shop;

  preferredShops : Shop[]=this.userService.authenticatedUser.preferredShops;


  like(shop : Shop){
    //delete liked shop from nearbayshops
    this.shopService.deleteShop(shop,this.shopService.nbShopsExcludeLikedOnes);
    console.log("shop to be likeed ",shop);
    //check if shop doesn't exist befor push
    if(this.isExist(shop)){
    }else{
      this.userService.authenticatedUser.preferredShops.push(shop);
      this.shopService.like(this.userService.authenticatedUser);
    }

  }
  dislike(shop : Shop){
    let dislikedShop : DislikedShop;
    dislikedShop = new DislikedShop(new Date(),shop);
    this.shopService.deleteShop(shop,this.shopService.nbShopsExcludeLikedOnes);
    //this.shopService.deleteShop(dislikedShop.shop,this.userService.authenticatedUser.preferredShops);
    this.shopService.addDislikedShop(dislikedShop , this.userService.authenticatedUser.dislikedShops);
    this.shopService.dislike(this.userService.authenticatedUser);
    console.log("after remove preferredShops ",
      this.userService.authenticatedUser.preferredShops);
      console.log("after dislikedshops",
      this.userService.authenticatedUser.dislikedShops);
  }

  i : number;
  isExist(shop : Shop) :boolean{
    console.log("length ",this.userService.authenticatedUser.preferredShops.length);
    if(this.userService.authenticatedUser.preferredShops.length > 0){
      if(this.userService.authenticatedUser.preferredShops
        .findIndex(obj => obj.id.timestamp === shop.id.timestamp 
              && obj.id.processIdentifier === shop.id.processIdentifier
              && obj.name === shop.name)>=0){
          return true;
      }
      return false;
    }
    return false; 
  }
  
  ngOnInit() {
  }

}
