import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCuisineComponent } from './add-cuisine/add-cuisine.component';
import { AddressComponent } from './address/address.component';
import { AdminTestComponent } from './admin-test/admin-test.component';
import { AdminComponent } from './admin/admin.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { FavCuisineComponent } from './fav-cuisine/fav-cuisine.component';
import { AuthGuard } from './Guarding/auth.guard';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { UserCuisineComponent } from './user-cuisine/user-cuisine.component';
import { UserComponent } from './user/user.component';
import { ViewAddressComponent } from './view-address/view-address.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'landing', component:LandingPageComponent},
  {path:'address', component:AddressComponent,canActivate:[AuthGuard]},
  {path:'view-address', component:ViewAddressComponent,canActivate:[AuthGuard]},
  {path:'add-cuisine', component:AddCuisineComponent,canActivate:[AuthGuard]},
  {path:'fav-cuisine', component:FavCuisineComponent,canActivate:[AuthGuard]},
  {path:'cuisine/:id', component:CuisineComponent,canActivate:[AuthGuard]},
  {path:'user-cuisine/:id', component:UserCuisineComponent,canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'test', component:AdminTestComponent,canActivate:[AuthGuard]},
  {path:'admin' , component:AdminComponent,canActivate:[AuthGuard]},
  {path:'user' , component:UserComponent},
  {path:'home' , component:HomeComponent},
  {path:'restaurant' , component:RestaurantComponent,canActivate:[AuthGuard]},
  {path:'signup', component:SignupComponent},
  {path:'search',component:SearchComponent,canActivate:[AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
