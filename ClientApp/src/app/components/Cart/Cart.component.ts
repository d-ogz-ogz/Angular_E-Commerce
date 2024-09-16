import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../item/Item';
import { ItemService } from '../item/Item.service';
import { CartService } from './Cart.service';



@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls:['./Cart.component.css']

})
export class CartComponent implements OnInit {




  constructor(public cartService: CartService, private itemService: ItemService) { }
  

  ngOnInit() {

  }

  displayDetails(item: Item) {
    this.itemService.selectedItem = item;

  }
  clearAll() {
    this.cartService.clear();
  }

}
