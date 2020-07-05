import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { ProductsService } from '../services/products'
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.css']
})

export class ItemsGridComponent {

  constructor(private _productsService: ProductsService,
              private cartService: CartService) {
  }

  ngOnInit() {
    //Bringing locations
    this.getProducts();
  }

  products: [];

  getProducts() { 
    this._productsService.getProducts().subscribe(data =>{
      this.products = <any>data.body;
    });
  }

  addProductToCart(product){
    this.cartService.addProductToCart(product); 
  }

  removeProduct(product) {
    this.cartService.removeProduct(product);
  }
}