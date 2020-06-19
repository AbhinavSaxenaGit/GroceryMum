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

  loginColor = '';

  openUserNav() {
    if (this.isElementForMobile) {
    document.getElementById('userSidenav').style.width = '100%';
    this.loginColor = '#3b5998';
    }
    else {
      document.getElementById('userSidenav').style.width = '40%';
    }
  }

  closeUserNav() {
    document.getElementById('userSidenav').style.width = '0';
    this.loginColor = this.isElementForMobile ? 'whitesmoke' : '';
  }
}
