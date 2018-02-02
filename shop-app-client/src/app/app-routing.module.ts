import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { NearbyShopsComponent } from './nearby-shops/nearby-shops.component';
import { PreferredShopsComponent } from './preferred-shops/preferred-shops.component';

const appRoutes: Routes =[
  { path:'nearbyshops', component: NearbyShopsComponent },
  {path:'preferredshops', component :PreferredShopsComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports :[RouterModule]
})
export class AppRoutingModule { }