import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {

  constructor(private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategory();
  }
  
  color ='';
  categories: [];
  
  openHamburgerNav() {
    document.getElementById("hbSidenav").style.width = "80%";
    document.getElementById("hbSidenavBG").style.width = "100%";
    this.color = '#f4511e';
  }
  
  closeHamburgerNav() {
    // alert(this.color);
    document.getElementById("hbSidenav").style.width = "0";
    document.getElementById("hbSidenavBG").style.width = "0";
    this.color = 'whitesmoke';
    // alert(this.color);
  }

  categoryTapped(){
    this.closeHamburgerNav();
  }

  //Services
  getCategory() {
    this._categoryService.getCategory().subscribe((data) => {
      this.categories = <any>data;
    });
  }

}
