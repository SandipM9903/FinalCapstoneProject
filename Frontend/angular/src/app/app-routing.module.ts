import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuisineComponent } from './cuisine/cuisine.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';

const routes: Routes = [
  {path:'', component:RestaurantComponent},
  {path:'restaurant', component:RestaurantComponent},
  {path:'view/:id', component:ViewRestaurantComponent},
  {path:'cuisine', component:CuisineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
