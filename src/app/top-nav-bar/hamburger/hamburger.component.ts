import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  showCartSideBar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.display = 'block';
  }

  
  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
