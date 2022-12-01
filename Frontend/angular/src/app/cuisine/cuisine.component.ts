import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent implements OnInit {

  constructor(private restaurantService:RestaurantService) {
    this.getAllCuisine();
   }

  ngOnInit(): void {
  }

  cuisineForm = new FormGroup({
    cuisineId:new FormControl(''),
    cuisineName:new FormControl(''),
    cuisineDescription:new FormControl(''),
    price:new FormControl('')
  });
  
  cuisineData:any;

  getAllCuisine()
  {
    this.restaurantService.getAllCuisine().subscribe(
      response =>
      {
        this.cuisineData=response;
      }
    )
  }

  addCuisine()
  {
    this.restaurantService.addCuisine(this.cuisineForm.value).subscribe(
      response=>
      {
        alert("Created");
        this.getAllCuisine();
      }
    )
  }
}
