import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../model/FileHandle';
import { passwordMatch } from '../Password Check/PasswordMatch';
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
    emailId: new FormControl('',[Validators.required,Validators.email]),
    profilePicture : new FormControl(''),
    firstName : new FormControl('',[Validators.required]),
    lastName : new FormControl('',[Validators.required]),
    gender : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    // cpassword : new FormControl('',[Validators.required])
  },
  );

  constructor(private sanitizer: DomSanitizer, private userService:UserService, private snackBar : MatSnackBar) { }

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
        this.snackBar.open("Signed Up Successfull", "Close", {duration:2000});
      }
    )
  }

  get EmailId()
  {
    return this.profileForm.get('emailId');
  }

  get FirstName()
  {
    return this.profileForm.get('firstName');
  }

  get LastName()
  {
    return this.profileForm.get('lastName');
  }

  get Gender()
  {
    return this.profileForm.get('gender');
  }

  get Passwords()
  {
    return this.profileForm.get('password');
  }

  get cPasswords()
  {
    return this.profileForm.get('cpassword');
  }

}
