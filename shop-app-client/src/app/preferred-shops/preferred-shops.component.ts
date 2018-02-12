import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-preferred-shops',
  templateUrl: './preferred-shops.component.html',
  styleUrls: ['./preferred-shops.component.css']
})
export class PreferredShopsComponent implements OnInit {
  
  constructor(private http : HttpClient ,private userService : UserService) { }
  preferredShops: Shop[];

  getPreferredShops(): void {
    this.preferredShops = this.userService.getPreferredShops();
  }
  ngOnInit() {
    this.getPreferredShops();
  }

}
