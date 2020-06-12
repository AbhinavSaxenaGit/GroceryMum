import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css'],
})
export class LoginPanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  user = [{name:'Abhinav', photo:'../../../assets/pp.jpg'}];

  showLoginModal() {
    let modal = document.getElementById('login-modal');
    modal.style.display = 'block';
  };

  closeLoginModal() {
    let modal = document.getElementById('login-modal');
    let mobnumInput = document.getElementById('mobnum');
    let otpInput = document.getElementById('otp');
    modal.style.display = 'none';
    otpInput.style.display = 'none';
    mobnumInput.style.display = 'block';
  };

  toggleMobnOtp(){
    let mobnumInput = document.getElementById('mobnum');
    let otpInput = document.getElementById('otp');
    let mobnumBtn = document.getElementById('mobnumBtn');
    let otpBtn = document.getElementById('otpBtn');
    mobnumInput.style.display = 'none';
    otpInput.style.display = 'block';
    mobnumBtn.style.display = 'none';
    otpBtn.style.display = 'flex';    
  }

  showUserProfile(){
    this.closeLoginModal();
    let loginDiv = document.getElementById('loginPanel');
    let loggedinDiv = document.getElementById('loggedinPanel');
    loginDiv.style.display = 'none';
    loggedinDiv.style.display = 'block';
  }
}
