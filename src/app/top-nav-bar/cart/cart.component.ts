import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickCart() {
    let element = document.getElementById("cartImg");
    element.classList.toggle("user-cart-selected");
}
  showCartSideBar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.display = 'block';
  }

  closeCartSideBar() {
    let background = document.getElementById('sidebar');
    background.style.display = 'none';
  }

  
  // openCartNav() {
  //   document.getElementById("cartSidenav").style.width = "100%";
  // }
  
  // closeCartNav() {
  //   document.getElementById("cartSidenav").style.width = "0";
  // }

}
