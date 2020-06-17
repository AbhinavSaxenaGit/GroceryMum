import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-slider',
  templateUrl: './details-slider.component.html',
  styleUrls: ['./details-slider.component.css']
})
export class DetailsSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
