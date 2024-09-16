import { NgSwitchCase } from '@angular/common';
import { NgSwitch } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../nav-menu/Category';
import { CategoryService } from '../../nav-menu/Category.service';
import { SubCategory } from '../../nav-menu/SubCategory';
import { CartService } from '../Cart/Cart.service';
import { Item } from './Item';
import { ItemService } from './Item.service';


@Component({
  selector: 'app-Item',
  templateUrl: './Item.component.html',
  styleUrls: ['./Item.component.css'],

})
export class ItemComponent implements OnInit {

  public menuForm!: FormGroup;
  catItems!: Item[];
  productsPerPage: number = 6;
  selectedPage: number = 1;
  subCategories!: SubCategory[];
  pageCount!: number;
  selectedCategory!: SubCategory;
  Items!: any[];
  mainCategory!: number;
  currentCartItem!: Item;
  pageList: Array<any> = [];





  constructor(public itemService: ItemService, private cartService: CartService, public categoryService: CategoryService) {
    this.mainCategory = Number(localStorage.getItem("CategoryId"));





  }
  ngOnInit(): void {
    this.getItems(this.mainCategory);



  }

  getItems(mainCatId?: number, categoryId?: number) {

    this.itemService.getItems(this.selectedPage, this.productsPerPage, mainCatId, categoryId).then(r => {
      this.Items = r.ItemList; this.pageCount = r.PageCount; this.Pager; this.getSubCategories();
      ;


    })

  }

  changeCategory(category: SubCategory) {
    this.selectedCategory = category;
    this.selectedPage = 1;
    this.itemService.getItems(this.selectedPage, this.productsPerPage, this.mainCategory, this.selectedCategory.id).then(r => this.Items = r.ItemList as Item[]);
  }

  changePage(pageNumber: number) {

    this.selectedPage = pageNumber;
    if (this.selectedCategory) {
      this.getItems(this.mainCategory, this.selectedCategory.id);
    } else {
      this.getItems(this.mainCategory)
    }


  }
  getSubCategories() {
    this.itemService.getSubCategories(this.mainCategory).then(subData => { this.subCategories = subData as SubCategory[]; localStorage.removeItem("CategoryId"); });
  }
  displayDetails(item: Item) {
    this.itemService.selectedItem = item;
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
  }

  get Pager() {
    //this.pageList= Array<number>(Math.ceil(pageSize)).fill(0).map((a, i) => {
    //a = i + 1
    //})
    /*    if (this.pageList.length == 0) {*/
    for (var i = 1; i <= Math.ceil(this.pageCount); i++) {
      this.pageList.push(i);

      //}
    }

    return this.pageList;

    //  //for dongusu
    //}
    //PageIndex(index: number) {
    //  return Math.abs(this.selectedPage - index) < 3;
    //}



  }







  //<a routerLink="['/items',p.id]" > </a>
  //this.route.paramMap.subscribe(params => {
  //  let id = params.get('id');
  //  this.selectedProduct = products.find(i => i.id === id);

  //})
  //}

  //get pageNumbers(): any[] {
  //  return Array(Math.ceil(this.pageCount)).fill(0).map((a, i) => {
  //    i + 1
  //  })

  //}
  //}
  //ROUTE PARAMS

  //Component yeniden yüklenmediği durumlarda,aynı komponent içindeyken asenkron işlem
  //this.route.paramMap.subscribe(params.get("id değeri"));
  //Farklı komponentler de ,sayfa yenileneceği zaman
  //this.route.snapshot.paramMap.get("id değeri")
  //   query params,query parametrelerini alırken

  //this.route.queryParamMap.subscribe(
  //  params => params.get()
  //)



}
