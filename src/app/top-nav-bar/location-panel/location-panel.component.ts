import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-panel',
  templateUrl: './location-panel.component.html',
  styleUrls: ['./location-panel.component.css'],
})
export class LocationPanelComponent implements OnInit {
  isElementForMobile = false;
  isElementForWeb = false;

  locations = [
    { id: 1, name: 'Ghaziabad' },
    { id: 2, name: 'Raj Nagar' },
    { id: 3, name: 'Extension' }
  ];
  
  constructor() {}

  ngOnInit() {
    if (window.screen.width <= 1024) { 
      this.isElementForMobile = true;
    }
    else {
      this.isElementForWeb = true;
    }
  }

  locationColor = '';

  openLocationNav() {
    document.getElementById("locationSidenav").style.width = "100%";
    this.locationColor = '#3b5998';
  }
  
  closeLocationNav() {
    document.getElementById("locationSidenav").style.width = "0";
    this.locationColor = 'whitesmoke';
  }
}
