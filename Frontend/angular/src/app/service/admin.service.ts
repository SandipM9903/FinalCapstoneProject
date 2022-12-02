import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = "http://localhost:8085/authservice/";
  constructor(private httpClient : HttpClient) { }

  emailId:any;
  role:any;

  getUserDetails()
  {
    return this.httpClient.get(this.baseUrl + this.emailId);
  }
}
