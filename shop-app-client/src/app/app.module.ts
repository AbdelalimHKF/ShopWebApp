import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NearbyShopsComponent } from './nearby-shops/nearby-shops.component';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { PreferredShopsComponent } from './preferred-shops/preferred-shops.component';
import { PreferredShopComponent } from './preferred-shop/preferred-shop.component';


@NgModule({
  declarations: [
    AppComponent,
    NearbyShopsComponent,
    ShopComponent,
    PreferredShopsComponent,
    PreferredShopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
