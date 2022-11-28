import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit {

  id:any;
  data: any;
  retrievedImage: any;

  constructor(private route:ActivatedRoute, private restaurantService:RestaurantService) {
    this.id=this.route.snapshot.params['id'];
    this.getRestaurant();
   }

  ngOnInit(): void {
    
  }

  getRestaurant()
  {
    this.restaurantService.getRestaurant(this.id).subscribe(
      data=>{
          this.data = data; 
          this.restaurantService.restaurantId = this.data.restaurantId;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.data.picByte;
      }
    )
  }

  deleteCuisine(cuisineId:any)
  {
    this.restaurantService.deleteCuisine(cuisineId).subscribe(
      data=>
      {
        alert("Deleted");
        this.getRestaurant();
      }
    )
  }
}
