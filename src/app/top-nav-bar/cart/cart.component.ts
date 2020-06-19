import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  isElementForWeb = false;
  isElementForMobile = false;
  cartColor = '';

  ngOnInit() {
    if (window.screen.width <= 1024) { 
      this.isElementForMobile = true;
    }
    else {
      this.isElementForWeb = true;
    }
  }
  
  openCartNav() {
    if (this.isElementForMobile) {
      document.getElementById('cartSidenav').style.width = '100%';
      this.cartColor = '#3b5998';
      }
      else {
        document.getElementById('cartSidenav').style.width = '40%';
      }
    }
  
  closeCartNav() {
    document.getElementById("cartSidenav").style.width = "0";
    this.cartColor = this.isElementForMobile ? 'whitesmoke' : '';
  }

}
