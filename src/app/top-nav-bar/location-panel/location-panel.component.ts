import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-panel',
  templateUrl: './location-panel.component.html',
  styleUrls: ['./location-panel.component.css'],
})
export class LocationPanelComponent implements OnInit {
  locations = [
    { id: 1, name: 'Ghaziabad' },
    { id: 2, name: 'Raj Nagar' },
    { id: 3, name: 'Extension' }
  ];
  
  constructor() {}

  ngOnInit(): void {}

  myFunction() {
    document.getElementById("locationDropdown").classList.toggle("show");
  }
  
  filterFunction() {
    let input, filter, ul, li, a, i, div, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("locationDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
}
