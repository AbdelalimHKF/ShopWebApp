import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NearbyShopsComponent } from './nearby-shops/nearby-shops.component';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { PreferredShopsComponent } from './preferred-shops/preferred-shops.component';
import { PreferredShopComponent } from './preferred-shop/preferred-shop.component';
import { UserService } from './user.service';
import { AuthentificationComponent } from './authentification/authentification.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShopService } from './shop.service';
import { AuthGuard } from './auth.guard';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    NearbyShopsComponent,
    ShopComponent,
    PreferredShopsComponent,
    PreferredShopComponent,
    AuthentificationComponent,
    RegistrationComponent,
    DashboardComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers: [UserService, ShopService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
