import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ContactInfo } from './Contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {

  }

  getContactInfo() {
    return this.http.get<ContactInfo>(environment.apiUrl + `/Contact/GetContactInfo`).toPromise();
  }

}
