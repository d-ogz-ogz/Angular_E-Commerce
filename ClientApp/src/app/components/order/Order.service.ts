import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'redux';
import { environment } from '../../../environments/environment';
import { CartService } from '../Cart/Cart.service';
import { Order } from './Order';


@Injectable({
  providedIn: 'root'
})

export class OrderService {
  receiverName: string = "";
  shippingAddress: string = "";
  city: string = "";
  district: string = "";
  contactNumber: string = "";

;


  constructor(private http: HttpClient,) {

  }
  getOrders() {
    return this.http.get<Order[]>(environment.apiUrl + '/Order/GetOrders').toPromise();
  }
  saveOrder(order: Order) {

    return this.http.post<Order>(environment.apiUrl + '/Order/SaveOrder', order).toPromise();
    
  }
  deleteOrder(orderId: number) {
    return this.http.post(environment.apiUrl + `/Order/DeleteOrder/${orderId}`, orderId);
  }
 

}

