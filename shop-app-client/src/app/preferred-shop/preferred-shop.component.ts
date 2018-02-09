import { Component, OnInit, Input } from '@angular/core';
import { Shop } from '../shop';
import { ShopService } from '../shop.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-preferred-shop',
  templateUrl: './preferred-shop.component.html',
  styleUrls: ['./preferred-shop.component.css']
})
export class PreferredShopComponent implements OnInit {

  constructor(private shopService : ShopService, 
              private userService : UserService) { }


  @Input() preferredShop : Shop;

  remove(shop : Shop){
    this.shopService.deleteShop(shop);
    this.shopService.remove(this.userService.authenticatedUser);
    console.log("Removed shop",shop);
  }
  ngOnInit() {
  }

}
