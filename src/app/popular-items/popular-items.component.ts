import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-items',
  templateUrl: './popular-items.component.html',
  styleUrls: ['./popular-items.component.css'],
})
export class PopularItemsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  items = [
    { code: 1, name: 'Top selling items', imgURL: '../assets/1.jpg'},
    { code: 2, name: 'Oils', imgURL: '../assets/1.jpg'},
    { code: 3, name: 'Cold Drinks', imgURL: '../assets/1.jpg'},
    { code: 4, name: 'Baby Products', imgURL: '../assets/1.jpg'},
    { code: 5, name: 'Beverages', imgURL: '../assets/1.jpg'},
    { code: 6, name: 'Bread & Bakery', imgURL: '../assets/1.jpg'},
    { code: 7, name: 'Breakfast & Cereal', imgURL: '../assets/1.jpg'},
    { code: 8, name: 'Canned Goods', imgURL: '../assets/1.jpg'},
  ];
}
