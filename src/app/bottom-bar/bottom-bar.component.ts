import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css'],
})
export class BottomBarComponent implements OnInit {
  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategory();
  }

  categories: [];

  //Services
  getCategory() {
    this._categoryService.getCategory().subscribe((data) => {
      this.categories = <any>data;
    });
  }
}
