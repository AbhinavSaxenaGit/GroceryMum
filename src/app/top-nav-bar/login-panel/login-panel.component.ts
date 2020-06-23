import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,  } from '@angular/forms';
import {SignupService} from '../../services/signup/signup.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css'],
})

export class LoginPanelComponent implements OnInit {
  constructor(private _signUpService: SignupService) {}

  isElementForWeb = false;
  isElementForMobile = false;
  hide = true;
  loginColor = '';

userSignUpInfo =  
{
  "firstName" : null,
  "lastName" : null,
  "email" : null,
  "password" : null,
  "mobileNumber": null
};

  ngOnInit() {
    if (window.screen.width <= 1024) { 
      this.isElementForMobile = true;
    }
    else {
      this.isElementForWeb = true;
    }
  }
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  openUserNav() {
    if (this.isElementForMobile) {
    document.getElementById('userSidenav').style.width = '100%';
    this.loginColor = '#3b5998';
    }
    else {
      document.getElementById('userSidenav').style.width = '25%';
    }
  }

  closeUserNav() {
    document.getElementById('userSidenav').style.width = '0';
    this.loginColor = this.isElementForMobile ? 'whitesmoke' : '';
  }

  onSubmitSignup(){   
    this._signUpService.signUp(this.userSignUpInfo)
    .subscribe(
      data => console.log("Success!", data),
      error => console.log("Error!", error)
    );
  }
}
