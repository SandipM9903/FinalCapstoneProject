import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCuisineComponent } from './add-cuisine/add-cuisine.component';
import { AdminTestComponent } from './admin-test/admin-test.component';
import { AdminComponent } from './admin/admin.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { FavCuisineComponent } from './fav-cuisine/fav-cuisine.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SignupComponent } from './signup/signup.component';
import { UserCuisineComponent } from './user-cuisine/user-cuisine.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'add-cuisine', component:AddCuisineComponent},
  {path:'fav-cuisine', component:FavCuisineComponent},
  {path:'cuisine/:id', component:CuisineComponent},
  {path:'user-cuisine/:id', component:UserCuisineComponent},
  {path:'login', component:LoginComponent},
  {path:'test', component:AdminTestComponent},
  {path:'admin' , component:AdminComponent},
  {path:'user' , component:UserComponent},
  {path:'home' , component:HomeComponent},
  {path:'restaurant' , component:RestaurantComponent},
  {path:'signup', component:SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
