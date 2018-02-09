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
    this.preferredShops=this.userService.authenticatedUser.preferredShops;
    this.shopService.dislike(this.userService.authenticatedUser);
  }

  i : number;
  isExist(shop : Shop) :boolean{
    for(this.i=0;this.i<this.preferredShops.length;this.i++){
      console.log(this.preferredShops[this.i]);
      if(this.preferredShops.length==0) return false;
      if(this.preferredShops[this.i].id.timestamp==shop.id.timestamp 
      && this.preferredShops[this.i].id.machineIdentifier==shop.id.machineIdentifier){
        return true;
      }
    }
    return false;
  }


  ngOnInit() {
  }

}
