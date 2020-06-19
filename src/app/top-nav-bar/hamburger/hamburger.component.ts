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
  
  color ='';
  
  openHamburgerNav() {
    document.getElementById("hbSidenav").style.width = "100%";
    this.color = '#3b5998';
  }
  
  closeHamburgerNav() {
    // alert(this.color);
    document.getElementById("hbSidenav").style.width = "0";
    this.color = 'whitesmoke';
    // alert(this.color);
  }

}
