import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-preferred-shops',
  templateUrl: './preferred-shops.component.html',
  styleUrls: ['./preferred-shops.component.css']
})
export class PreferredShopsComponent implements OnInit {

  preferredShops: Shop[];
  url ='http://localhost:8080/preferredShops';

  constructor(private http : HttpClient) { }

  getPreferredShops() : void {

    this.http.get<Shop[]>(this.url)
      .map(data => data).subscribe(data => {
        this.preferredShops =data;
        console.log(data);
      });
  }
  ngOnInit() {
    this.getPreferredShops();
  }

}
