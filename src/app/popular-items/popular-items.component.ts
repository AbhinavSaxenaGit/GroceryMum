import { element } from 'protractor';
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
    { code: 1, name: 'Grocery', imgURL: '../assets/p_item1.jpg'},
    { code: 2, name: 'Packaged Food', imgURL: '../assets/p_item2.jpg'},
    { code: 3, name: 'Breakfast', imgURL: '../assets/p_item3.jpg'},
    { code: 4, name: 'Snacks', imgURL: '../assets/p_item4.jpg'},
    { code: 5, name: 'Beverages', imgURL: '../assets/p_item5.jpg'},
    { code: 6, name: 'Bread & Bakery', imgURL: '../assets/p_item6.jpg'},
    { code: 7, name: 'Household care', imgURL: '../assets/p_item7.jpg'},
    { code: 8, name: 'Personal Care', imgURL: '../assets/p_item8.jpg'},
    { code: 9, name: 'Baby Care', imgURL: '../assets/p_item9.jpg'},
  ];

  scrollToItemsGrid() {
    window.scrollTo(window.scrollX, window.scrollY + 400);
  }
}
