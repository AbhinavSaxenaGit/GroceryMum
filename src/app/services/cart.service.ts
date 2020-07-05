import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  
  products: [];
  discount: number;
  count: number = 0;
  cartProductList = [];
  totalItemsCount = 0;
  totalAmount = 0;

  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(({Code}) => Code === product.Code); 
      if (!productExistInCart) {
        this.cartProductList.push({...product});
        return;
      }
      productExistInCart.count += 1;
      product.count += 1;
      this.totalItemsCount += 1;
      this.totalAmount += product.Selling_Price;
      console.log(this.cartProductList);
}

 removeProduct(product) {
  const productExistInCart = this.cartProductList.find(({Code}) => Code === product.Code); 

  if (product.count == 1) {
    this.cartProductList = this.cartProductList.filter(({Code}) => Code !== product.Code);
    productExistInCart.count -= 1;
    product.count -= 1;
    this.totalItemsCount -= 1;
    this.totalAmount -= product.Selling_Price;
  }
  else {
    productExistInCart.count -= 1;
    product.count -= 1;
    this.totalItemsCount -= 1;
    this.totalAmount -= product.Selling_Price;
  }
  console.log(this.cartProductList);
 }

 itemsToShowInCart(){
  return this.cartProductList;
 }
}
