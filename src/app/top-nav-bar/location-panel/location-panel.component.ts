import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../services/locations.service';
import { ILocations } from 'src/app/services/templates';

@Component({
  selector: 'app-location-panel',
  templateUrl: './location-panel.component.html',
  styleUrls: ['./location-panel.component.css'],
})
export class LocationPanelComponent implements OnInit {
  isElementForMobile = false;
  isElementForWeb = false;
  locationColor = '';


  locations: ILocations[] = [];

  constructor(private _locationsService: LocationsService) {}

  ngOnInit() {
    if (window.screen.width <= 1024) {
      this.isElementForMobile = true;
    } else {
      this.isElementForWeb = true;
    }

    //Bringing locations
    this.getLocations();
  }

  openLocationNav() {
    document.getElementById('locationSidenav').style.width = '80%';
    this.locationColor = '#f4511e';
  }

  closeLocationNav() {
    document.getElementById('locationSidenav').style.width = '0';
    this.locationColor = 'whitesmoke';
  }

  //Services
  getLocations() {
    this._locationsService.getLocations().subscribe((data) => {
      this.locations = data;
    });
  }
}
