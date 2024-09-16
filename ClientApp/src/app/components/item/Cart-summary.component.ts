import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../Cart/Cart.service';



@Component({
  selector: 'app-Cart-summary',
  templateUrl: './Cart-summary.component.html',

})
export class CartSummaryComponent implements OnInit {




  constructor(public cartService:CartService) { }
  

  ngOnInit() {

  }

 


}
