import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category } from './Category';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public selectedCategory!: Category;

  constructor(private http: HttpClient) {

  }
  getCategories() {
  return this.http.get<Category[]>(environment.apiUrl + '/Item/GetCategories').toPromise();
  }
  //getSubCategories() {
  //  return this.http.get<SubCategory>(environment.apiUrl + 'Item/GetSubCategories').toPromise();
  //}
}






