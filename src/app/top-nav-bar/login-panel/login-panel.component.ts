import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css'],
})
export class LoginPanelComponent implements OnInit {
  constructor(private _signUpService: SignupService,
              private _loginService: LoginService,
              private toastr: ToastrService) {}

  isElementForWeb = false;
  isElementForMobile = false;
  hide = true;
  loginColor = '';

  //For API response
  statusCode : number;
  successMessage = null;
  errorMessage = null;

  userSignUpInfo = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword : null,
    mobileNumber: null,
  };

  userLoginInfo = {
    mobileNumber: null,
    password: null
  };

  postLoginInfo = {
    accessToken : null,
    firstName : null,
    message : null
    }

  ngOnInit() {
    if (window.screen.width <= 1024) {
      this.isElementForMobile = true;
    } else {
      this.isElementForWeb = true;
    }
  }

  openUserNav() {
    if (this.isElementForMobile) {
      document.getElementById('userSidenav').style.width = '100%';
      this.loginColor = '#3b5998';
    } else {
      document.getElementById('userSidenav').style.width = '25%';
    }
  }

  closeUserNav() {
    document.getElementById('userSidenav').style.width = '0';
    this.loginColor = this.isElementForMobile ? 'whitesmoke' : '';
  }

  onSubmitSignup() {
    if (this.userSignUpInfo.password ===
        this.userSignUpInfo.confirmPassword) {
            if (
              this.userSignUpInfo.firstName != null &&
              this.userSignUpInfo.mobileNumber != null &&
              this.userSignUpInfo.password != null
            ) {
              this._signUpService.signUp(this.userSignUpInfo).subscribe(
                (data) => {
                          if (data.status == 201) { //new user
                            this.toastr.success("You've sucessfully regsitered...");
                          }
                          if (data.status == 200) { //existing user
                            this.toastr.warning("You're already registered, please login...");
                          }
                        },
                (error) => {
                          if (error) {
                            this.toastr.error("Something went wrong, please try again...");
                          }
                }
              );
            }
            else {
              this.toastr.warning("Please fill the required fields...");
            }
      }
    else {
      this.toastr.error("Password and Confirm password must be same...")
    }
  }

  //Login
  login() {
    if (
      this.userLoginInfo.mobileNumber != null &&
      this.userLoginInfo.password != null
    ) {
      this._loginService.login(this.userLoginInfo).subscribe(
        (data) => {
                  this.postLoginInfo = <any>(data).body;
                  if (data.status == 201) { //sucessful login
                    
                    this.toastr.success("Welcome, " + JSON.stringify(this.postLoginInfo.firstName + "!!"));
                  }
                },
        (error) => {
                  if (error) {
                    this.toastr.error(JSON.stringify(this.postLoginInfo.message));
                  }
        }
      );
    }
    else {
      this.toastr.warning("Please fill the required fields...");
    }
  }
}
