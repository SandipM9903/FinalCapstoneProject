import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../model/FileHandle';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public userFile1:any = File;
  public userFile2:any = File;

  profileForm = new FormGroup({
    emailId: new FormControl(''),
    profilePicture : new FormControl(''),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    role : new FormControl(''),
    gender : new FormControl(''),
    password : new FormControl('')
  });

  constructor(private sanitizer: DomSanitizer, private userService:UserService) { }

  ngOnInit(): void {
  }

  onFileSelect(event:any)
  {
    const file = event.target.files[0];
    const fileHandle : FileHandle={
      file: file,
      url:this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.userFile1 = fileHandle.file;
    this.userFile2 = fileHandle;
  }

  registerUser(submitForm:FormGroup)
  {
    const user = submitForm.value;
    const formData = new FormData();
    formData.append('commonUser', JSON.stringify(user));
    formData.append('file',this.userFile1);
    
    this.userService.registerUser(formData).subscribe(
      response =>
      {
        alert("Added")
      }
    )
  }
}
