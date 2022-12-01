import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Filehandle } from '../model/file-handle.model';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {


  constructor(private restaurantService:RestaurantService, private fb:FormBuilder, private httpClient : HttpClient, private sanitizer: DomSanitizer) { 
    this.getAllRestaurants();
  }

  ngOnInit(): void {
  }
  restaurants:Restaurant[]= [];
  restaurantId='';
  restaurantData:any;
  public userFile1:any = File;
  public userFile2:any = File;


  restaurantForm = new FormGroup({
    restaurantId:new FormControl(''),
    restaurantName:new FormControl(''),
    restaurantLocation:new FormControl(''),
    picByte: new FormControl('')
  });

  onFileSelect(event:any)
  {
    const file = event.target.files[0];
    const fileHandle : Filehandle={
      file: file,
      url:this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.userFile1 = fileHandle;
    this.userFile2 = fileHandle.file;
  }

  addRestaurant(submitForm:FormGroup)
  {
    const restaurant = submitForm.value;
    const formData = new FormData();
    formData.append('restaurant', JSON.stringify(restaurant));
    formData.append('file',this.userFile2);
    this.restaurantService.addRestaurant(formData).subscribe(
      response =>
      {
        alert("Restaurant Added");
        this.getAllRestaurants();
      }
    )
  }

  getAllRestaurants()
  {
    this.restaurantService.getAllRestaurants().subscribe(
      data=>this.restaurants=data
    );
  }
}
