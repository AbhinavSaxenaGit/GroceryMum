import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  isElementForMobile = false;
  isElementForWeb = false;


  ngOnInit() {
    if (window.screen.width <= 1024) { 
      this.isElementForMobile = true;
    }
    else {
      this.isElementForWeb = true;
    }
  }

}
