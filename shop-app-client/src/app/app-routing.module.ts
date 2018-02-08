import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { NearbyShopsComponent } from './nearby-shops/nearby-shops.component';
import { PreferredShopsComponent } from './preferred-shops/preferred-shops.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes =[
  { path:'welcome', component: WelcomeComponent },
  { path:'dashboard', component: DashboardComponent },
  { path : '' ,redirectTo : '/welcome' , pathMatch: 'full'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports :[RouterModule]
})
export class AppRoutingModule { }