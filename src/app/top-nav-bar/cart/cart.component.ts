import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  showCartLabel = true;
  products = <any> [];
  isElementForWeb = false;
  isElementForMobile = false;
  cartColor = '';
  totalItemsCount = 0;
  totalAmount = 0;
  showCartPanelBackground = false;

  ngOnInit() {
    if (window.screen.width <= 1024) { 
      this.isElementForMobile = true;
    }
    else {
      this.isElementForWeb = true;
    }
  }
  
  openCartNav() {
    this.showCartPanelBackground = true;
    if (this.isElementForMobile) {
      document.getElementById('cartSidenav').style.width = '100%';
      // document.getElementById('cartSidenavBG').style.width = '100%';
      this.cartColor = '#f4511e';
      }
      else {
        document.getElementById('cartSidenav').style.width = '40%';
      }
      this.products = this.cartService.itemsToShowInCart();
      this.totalItemsCount = this.cartService.totalItemsCount;
      this.totalAmount = this.cartService.totalAmount;
      console.log(this.products);
      this.showCartLabel = false;
    }
  
  closeCartNav() {
    document.getElementById("cartSidenav").style.width = "0";
    // document.getElementById('cartSidenavBG').style.width = "0";
    this.cartColor = this.isElementForMobile ? 'whitesmoke' : '';
    this.showCartPanelBackground = false;    
  }

  addProductToCart(product){
    this.cartService.addProductToCart(product);
    this.totalItemsCount = this.cartService.totalItemsCount;
    this.totalAmount = this.cartService.totalAmount;    
  }

  removeProduct(product) {
    this.cartService.removeProduct(product);
    this.totalItemsCount = this.cartService.totalItemsCount;
    this.totalAmount = this.cartService.totalAmount;    
  }

}
