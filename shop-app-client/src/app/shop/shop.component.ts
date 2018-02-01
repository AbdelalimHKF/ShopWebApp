import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../nearby-shops/nearByShops';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }
  
  @Input() nbshop : Content;

  ngOnInit() {
  }

}
