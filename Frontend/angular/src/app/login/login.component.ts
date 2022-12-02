import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Admin } from '../model/admin';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private adminService : AdminService, private router : Router) { }

  ngOnInit(): void {
  }
  admin:Admin[] = [];

  emailId='';
  data:any;

  userForm = new FormGroup({
    "emailId" : new FormControl(''),
    "password" : new FormControl(''),
  });

  responseData : any;
  loginCheck()
  {
    this.userService.loginCheck(this.userForm.value).subscribe(
      response => {
        this.responseData = response;
        console.log(this.responseData.token);
        this.adminService.emailId = this.userForm.value.emailId;
        this.adminService.getUserDetails().subscribe(
          res =>{
            this.data = res;
            this.adminService.role = this.data.userRole;
            if(this.data.userRole === "ADMIN")
            {
              this.router.navigate(['admin']);
            }
            else
            {
              this.router.navigate(['user']);
            }
          }
        )
        localStorage.setItem('jwt',this.responseData.token);
        alert("User Logged In");
      }
    )
  }
}
