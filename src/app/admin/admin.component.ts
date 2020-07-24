import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { CustomerService } from '../services/customerInfo.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  fileToUpload: File = null;
  orders = [];
  customer = [];
  customerOrder =  {
                    totalItems: 0,
                    totalPrice: 0,
                    orderDetails: []
                   };  
  totalItems : number;
  totalPrice : number;
  selectedOrder = 0;
  menuItem = 1;

  constructor(
        private _orderService: OrdersService,
        private _customerInfoService: CustomerService
        ) {}

  ngOnInit(): void {
    //Getting the active orders
    this._orderService.getOrders(1).subscribe(data =>{
      this.orders = <any>data.body;  
      this.selectedOrder = this.orders[0].orderId;
    });

    //Getting the customer info of first record
    this._customerInfoService.getCustomerInfo().subscribe(data =>{
      this.customer = <any>data.body 
    });

    //Getting the active order of first record
    this._customerInfoService.getCustomerOrder().subscribe(data =>{
      this.customerOrder = <any>data.body;   
    });

    this.totalItems = this.customerOrder.totalItems;
    this.totalPrice = this.customerOrder.totalPrice;
    console.log(this.customerOrder);
    
    console.log(this.totalItems , this.totalPrice);
    
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  selectOrder(orderId) {
    this.selectedOrder = orderId; 
  }

  selectMenu(status) { 
    //Selected the clicked meu
    this.menuItem = status;    

    //Getting the selected menu orders
    this._orderService.getOrders(status).subscribe(data =>{
      this.orders = <any>data.body;  
      this.selectedOrder = this.orders[0].orderId;
    });
  }
}
