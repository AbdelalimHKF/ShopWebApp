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
  
  @Input() nbshop : Content;

  preferredShops : Shop[]=this.userService.authenticatedUser.preferredShops;


  like(shop : Shop){
    //check if shop doesn't exist befor push
    if(this.isExist(shop)){
    }else{
      this.userService.authenticatedUser.preferredShops.push(shop);
      this.shopService.like(this.userService.authenticatedUser);
    }

  }
  dislike(shop : Shop){
    console.log("index lalal: ", this.userService.authenticatedUser.preferredShops.
      findIndex(obj => obj.id.timestamp === shop.id.timestamp));

    this.shopService.dislike(this.userService.authenticatedUser);
  }

  i : number;
  isExist(shop : Shop) :boolean{
    if(this.preferredShops
      .findIndex(obj => obj.id.timestamp === shop.id.timestamp 
            && obj.id.processIdentifier === shop.id.processIdentifier)>=0){
        return true;
    }
    return false;
  }


  ngOnInit() {
  }

}
