import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-popular-items',
  templateUrl: './popular-items.component.html',
  styleUrls: ['./popular-items.component.css'],
})
export class PopularItemsComponent implements OnInit {
  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategory();
    
  }

  categories: [];
  categoryCode: number;
  subCategoryCode: number;

  scrollToItemsGrid() {
    window.scrollTo(window.scrollX, window.scrollY + 400);
  }

  //Services
  getCategory() {
    this._categoryService.getCategory().subscribe((data) => {
      this.categories = <any>data;
      console.log(this.categories);
    });
  }
}
