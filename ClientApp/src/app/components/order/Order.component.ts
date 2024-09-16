import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../Cart/Cart.service';
import { AddressService } from './Address.service';
import { Order } from './Order';
import { OrderService } from './Order.service';



@Component({
  selector: 'app-Order',
  templateUrl: './Order.component.html',
  styleUrls: ['./Order.component.css'],

})
export class OrderComponent implements OnInit {

  public orderForm!: FormGroup;
  isSent: boolean = false;
  cartItemList: any[] = [];
  orderNo: string = "";
  cities: any = [];
  districts: any = [];

  constructor(private router: Router, public orderService: OrderService, private formBuilder: FormBuilder, public cartService: CartService, private address: AddressService) {

    this.address.getCities().then(c => this.cities=c as any)

  }

  getDistrict(id: any) {
    this.address.getDistricts(id).then(c => this.districts = c as any);
  }


  ngOnInit() {
    this.orderForm = this.createOrderForm();
    this.cartService.cartItems.map(i => {
      this.cartItemList.push(i);
      console.log(this.cartItemList)
    })
  }

  submitForm() {
    if (this.orderForm.valid) {
      var order = this.orderService.saveOrder({ OrderDetails: { receiverName: this.orderForm.value.receiverName, contactNumber: this.orderForm.value.contactNumber, shippingAddress: this.orderForm.value.shippingAddress, city: this.orderForm.value.city, district: this.orderForm.value.district, sameAddress: this.orderForm.value.sameAddress, saveInfo: this.orderForm.value.saveInfo }, OrderItem: [] } as any).then(a => sessionStorage.setItem("orderNo", String(a?.OrderNo)))
      this.isSent = true;
      this.orderService.contactNumber = this.orderForm.value.contactNumber;
      this.orderService.shippingAddress = this.orderForm.value.shippingAddress;
      this.orderService.receiverName = this.orderForm.value.receiverName;
      this.orderService.city = this.orderForm.value.city;
      this.orderService.district = this.orderForm.value.district;
      this.resetForm();
      this.router.navigate(["/payment"]);
      sessionStorage.getItem("orderNo")


    }


  }
  createOrderForm(): FormGroup {

    return this.formBuilder.group({
      receiverName: this.formBuilder.control(null, [Validators.required]),
      contactNumber: this.formBuilder.control("", [Validators.required, Validators.maxLength(11), Validators.minLength(11)]),
      shippingAddress: this.formBuilder.control(null, [Validators.required]),
      sameAddress: this.formBuilder.control(null),
      saveInfo: this.formBuilder.control(true),
      city: this.formBuilder.control("", Validators.required),
      district: this.formBuilder.control("", Validators.required),

    })
  }

  resetForm() {
    this.orderForm.reset();
  }

  BackToHome() {
    this.router.navigate(["/home"]);
  }




}
