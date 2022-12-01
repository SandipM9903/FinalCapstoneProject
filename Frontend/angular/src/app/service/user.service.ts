import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  baseUrl = "http://localhost:9000/api/v2/register"
  constructor(private httpClient: HttpClient) { }

  registerUser(formData:FormData):Observable<any>
  {
    return this.httpClient.post(this.baseUrl, formData);
  }
}
