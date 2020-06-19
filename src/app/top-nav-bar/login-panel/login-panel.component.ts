import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,  } from '@angular/forms';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css'],
})

export class LoginPanelComponent implements OnInit {
  constructor() {}

  isElementForWeb = false;
  isElementForMobile = false;
  hide = true;

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

  user = [{ name: 'Abhinav', photo: '../../../assets/pp.jpg' }];

  locationColor = '';

  openUserNav() {
    if (this.isElementForMobile) {
    document.getElementById('userSidenav').style.width = '100%';
    document.getElementById('userSidenav').style.backgroundColor ='darkstaleblue';
    this.locationColor = 'darkstaleblue';
    }
    else {
      document.getElementById('userSidenav').style.width = '40%';
    }
  }

  closeUserNav() {
    document.getElementById('userSidenav').style.width = '0';
    this.locationColor = 'smokewhite';
  }
}
