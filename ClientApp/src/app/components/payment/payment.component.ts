import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../order/Order.service';
import { DataFormControl } from './DataFormControl';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {

  constructor(orderService: OrderService, private router: Router) { }
  paymentForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    cardNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DataFormControl(null, [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ]),
  })




  ngOnInit(): void {

  }
  resetForm() {
    this.paymentForm.reset();
  }
  onSubmit() {
    let submitData = localStorage.getItem("orderData")
    console.log(submitData)
    alert("paymentForm works!")
  }
}
