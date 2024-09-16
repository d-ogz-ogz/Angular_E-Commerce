import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../Cart/Cart.service';
import { OrderService } from '../order/Order.service';




@Component({
  selector: 'app-AfterPurchase',
  templateUrl: './AfterPurchase.component.html',
  styleUrls: ['./AfterPurchase.css'],
  

})
export class AfterPurchaseComponent implements OnInit {
  orderNo!: string;



  constructor(public cartService: CartService, public orderService: OrderService) {
    this.orderNo = sessionStorage.getItem("orderNo") as string;
  }
  

  ngOnInit() {

  }



}
