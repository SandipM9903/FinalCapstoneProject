import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../model/FileHandle';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userFile1:any = File;


  profileForm = new FormGroup({
    emailId: new FormControl(''),
    profilePicture : new FormControl(''),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    location : new FormControl(''),
    role : new FormControl(''),
    password : new FormControl('')
  });

  constructor(private sanitizer: DomSanitizer) { }

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
    this.userFile1 = fileHandle;
  }

}
