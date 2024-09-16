import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SubCategory } from '../../nav-menu/SubCategory';
import { Category } from '../../nav-menu/Category';
import { Item } from '../item/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  selectedItem?: Item;
  constructor(private http: HttpClient) {
   
  }

  getItems(selectedPage: number, perPage: number, mainCatId?: number, categoryId?: number) {
    return this.http.get<any>(environment.apiUrl + `/Item/GetItems?selectedPage=${selectedPage}&perPage=${perPage}&mainCatId=${mainCatId}&categoryId=${categoryId}`).toPromise();
  }

  getRandomItems() {
    return this.http.get(environment.apiUrl + '/Item/GetRandomItems').toPromise();
  }

  getFavouriteItem() {
    return this.http.get<Item>(environment.apiUrl + '/Item/GetFavouriteItem',).toPromise();
  }

  getSubCategories(id: number) {
    return this.http.get<SubCategory[]>(environment.apiUrl + `/Item/GetSubCategories/` + id).toPromise();
  }




}

  //getItems(selectedPage: number, productsPerPage: number) {
  //  console.log("selectedPage :" + selectedPage)
  //  console.log("productsPerPage :" + productsPerPage)
  //  return this.http.post(environment.apiUrl + '/Item/GetAllItems', { selectedPage, productsPerPage }).toPromise();
  //}
