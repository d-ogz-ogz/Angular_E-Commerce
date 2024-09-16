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

export class AddressService {



  constructor(private http: HttpClient) {
  

  }
  getCities() {
    return this.http.get<any>(environment.apiUrl + "/Address/GetCities").toPromise();

  }
  getDistricts(id: number) {
    return this.http.get<any>(environment.apiUrl + "/Address/GetDistricts?cityId=" + id).toPromise();

  }
 

}

