import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../nearby-shops/nearByShops';
import { Shop } from '../shop';
import { ShopService } from '../shop.service';
import { UserService } from '../user.service';

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
    console.log("shop to be likeed ",shop);
    //check if shop doesn't exist befor push
    if(this.isExist(shop)){
    }else{
      this.userService.authenticatedUser.preferredShops.push(shop);
      this.shopService.like(this.userService.authenticatedUser);
    }

  }
  dislike(shop : Shop){
    this.shopService.deleteShop(shop);
    this.shopService.dislike(this.userService.authenticatedUser);
    console.log("after remove",
      this.userService.authenticatedUser.preferredShops);
  }

  i : number;
  isExist(shop : Shop) :boolean{
    console.log("length ",this.userService.authenticatedUser.preferredShops.length);
    if(this.userService.authenticatedUser.preferredShops.length > 0){
      if(this.userService.authenticatedUser.preferredShops
        .findIndex(obj => obj.id.timestamp === shop.id.timestamp 
              && obj.id.processIdentifier === shop.id.processIdentifier)>=0){
          return true;
      }
      return false;
    }
    return false;
    
  }



  ngOnInit() {
  }

}
