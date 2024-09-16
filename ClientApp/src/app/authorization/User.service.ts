import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginUser } from './login/LoginUser';
import { User } from './register/User';



@Injectable({
  providedIn: 'root'
})

export class UserService {


  constructor(private http: HttpClient) {


  }
  saveUser(registerUser: User) {

    return this.http.post(environment.apiUrl + '/Auth/Register', registerUser).toPromise();
  }
  login(loginUser: LoginUser) {
    return this.http.post(environment.apiUrl + '/Auth/Login', loginUser).subscribe((val)=>console.log(val));
  }
  sendMail(mailUser: string) {
    return this.http.post(environment.apiUrl + '/Auth/SendMail', mailUser).toPromise();
  }
}
