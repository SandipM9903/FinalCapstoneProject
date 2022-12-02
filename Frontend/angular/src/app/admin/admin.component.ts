import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dialog : MatDialog, private restaurantService:RestaurantService, private fb:FormBuilder, private httpClient : HttpClient, private sanitizer: DomSanitizer) 
  {
    this.getAllRestaurants();
  }

  ngOnInit(): void {
  }

  restaurants:Restaurant[]= [];
  restaurantId='';
  restaurantData:any;
  public userFile1:any = File;
  public userFile2:any = File;
  retrievedImage: any;
  data: any;

  getAllRestaurants()
  {
    this.restaurantService.getAllRestaurants().subscribe(
      data=>
      {
        this.restaurants=data;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.data.picByte;
      }
    );
  }

}
