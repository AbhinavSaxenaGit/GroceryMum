import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../../services/signup.service';
import { LoginService } from '../../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({opacity:0}),
        animate(500, style({opacity:1}))
      ]),
      transition('* => void', [
        animate(500, style({opacity:0}))
      ])
    ])
  ]
})

export class LoginPanelComponent implements OnInit {
  constructor(
    private _signUpService: SignupService,
    private _loginService: LoginService,
    private toastr: ToastrService
  ) {}

  isElementForWeb = false;
  isElementForMobile = false;
  hide = true;
  loginColor = '';
  showPasswordField = false;
  showSignUpForm = false;
  isLoginPanelOpen = false;
  showUserName = false;
  showLogoutPanel = false;
  userType = '0';

  //For API response
  statusCode: number;
  successMessage = null;
  errorMessage = null;

  userSignUpInfo = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null,
    mobileNumber: null,
  };

  userLoginInfo = {
    mobileNumber: null,
    password: null,
  };

  postLoginInfo = {
    accessToken: null,
    firstName: null,
    message: null,
  };

  ngOnInit() {
    if (window.screen.width <= 1024) {
      this.isElementForMobile = true;
    } else {
      this.isElementForWeb = true;
    }

    this.userType = localStorage.getItem('userType');
    if(this.userType == '1') {
      this.showUserName = true;
    }
  }

  onSubmitSignup() {
    if (this.userSignUpInfo.password === this.userSignUpInfo.confirmPassword) {
      if (
        this.userSignUpInfo.firstName != null &&
        this.userSignUpInfo.mobileNumber != null &&
        this.userSignUpInfo.password != null
      ) {
        this._signUpService.signUp(this.userSignUpInfo).subscribe(
          (data) => {
            if (data.status == 201) {
              //new user
              this.toastr.success("You've sucessfully regsitered...");

              //Attemptig login
              this.userLoginInfo.mobileNumber = this.userSignUpInfo.mobileNumber;
              this.userLoginInfo.password = this.userSignUpInfo.password;
              this.onSubmitLogin();
            }
            if (data.status == 200) {
              //existing user
              this.toastr.warning("You're already registered, please login...");
            }
          },
          (error) => {
            if (error) {
              this.toastr.error('Something went wrong, please try again...');
            }
          }
        );
      } else {
        this.toastr.warning('Please fill the required fields...');
      }
    } else {
      this.toastr.error('Password and Confirm password must be same...');
    }
  }

  //Verifying if user is registered or not
  onSubmitMobNo() {
    if (this.userLoginInfo.mobileNumber != null) {
      if (this.userLoginInfo.mobileNumber == '9711323367'
         || this.userLoginInfo.mobileNumber == '9210790788') {
            this.showPasswordField = true;
            localStorage.setItem('mobileNumber', this.userLoginInfo.mobileNumber);
         }
      else this.showSignUpForm = true;
    }
    else
      this.toastr.warning("Please enter mobile number...");

    if (this.userLoginInfo.password != null) {
      if (this.userLoginInfo.password == '0112128651') {
        this.isLoginPanelOpen = false;
        this.showUserName = true;
        if (localStorage.getItem('mobileNumber') == '9711323367') {
          this.userType = '1';
          localStorage.setItem('userType', '1');
          localStorage.setItem('showUserName', 'true');
        }
      }
      else 
        this.toastr.warning("Please enter correct password...");      
    }
  }

  onCloseButton() {
    window.location.reload();    
  }

  //Login
  onSubmitLogin() {
    if (
      this.userLoginInfo.mobileNumber != null &&
      this.userLoginInfo.password != null
    ) {
      this._loginService.login(this.userLoginInfo).subscribe(
        (data) => {
          this.postLoginInfo = <any>data.body;
          if (data.status == 201) {
            //sucessful login
            this.toastr.success(
              'Welcome, ' + JSON.stringify(this.postLoginInfo.firstName + '!!')
            );
            this.isLoginPanelOpen = false;
            localStorage.setItem(
              'token',
              JSON.stringify(this.postLoginInfo.accessToken)
            );
            window.location.reload(); //Refresing the page
          }
        },
        (error) => {
          if (error) {
            this.postLoginInfo = <any>error;
            this.toastr.error(this.postLoginInfo.message); //JSON.stringify(this.postLoginInfo.message));
          }
        }
      );
    } else {
      this.toastr.warning('Please fill the required fields...');
    }
  }

  onLogout() {
    localStorage.removeItem('userType');
    window.location.reload();    
  }
}
