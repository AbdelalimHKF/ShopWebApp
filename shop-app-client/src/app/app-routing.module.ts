import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { NearbyShopsComponent } from './nearby-shops/nearby-shops.component';

const appRoutes: Routes =[
  { path:'nearbyshops', component: NearbyShopsComponent }
  /*{path:'preferredshops', component :futur preferredShopsComponent}*/ 
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports :[RouterModule]
})
export class AppRoutingModule { }