import { Component, OnInit, Input } from '@angular/core';
import { Shop } from '../shop';

@Component({
  selector: 'app-preferred-shop',
  templateUrl: './preferred-shop.component.html',
  styleUrls: ['./preferred-shop.component.css']
})
export class PreferredShopComponent implements OnInit {

  constructor() { }

  @Input() preferredShop : Shop;
  ngOnInit() {
  }

}
