import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css'],
})
export class BottomBarComponent implements OnInit {
  constructor(private _categoryService: CategoryService) {}

  categories: [];
  isElementForWeb = false;
  
  ngOnInit(): void {
    this.getCategory();

    if (window.screen.width >= 1024) {
      this.isElementForWeb = true;
    }   
  }

  //Services
  getCategory() {
    this._categoryService.getCategory().subscribe((data) => {
      this.categories = <any>data;
    });
  }
}
