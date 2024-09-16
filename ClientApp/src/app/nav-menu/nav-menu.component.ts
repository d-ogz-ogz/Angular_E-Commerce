import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../components/Cart/Cart.service';
import { ItemService } from '../components/item/Item.service';
import { Category } from './Category';
import { CategoryService } from './Category.service';
import * as alertifyjs from 'alertifyjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  isExpanded = false;
  value: number | undefined;
  isBasketItem: boolean = false;
  selectedCategory!: Category;

//let categoryId= this.route.snapshot.paramMap.get('catId')
  // a [routerLink]=['/item',cat.id]
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  Categories?: Category[];
  constructor(public categoryService: CategoryService, private itemService: ItemService, private route: ActivatedRoute, public cartService: CartService) {
    this.categoryService.getCategories().then(data => { this.Categories = data as Category[]; });
    if (this.selectedCategory) {
    this.categoryService.selectedCategory = this.selectedCategory;
    }


  }


  ngOnInit(): void {
  }
  getCategories() {
    return this.Categories;
  }

  changeCategory(newCategory: Category) {

    this.selectedCategory = newCategory 
    let categoryId = String(this.selectedCategory?.id);
    localStorage.setItem("CategoryId", categoryId);
     
  }
  removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
    alertifyjs.danger("Removed from your Basket")
  }


}


////  ---------------ROUTERLİNK PARAMETRELİ KULLANIM ---------
//APP.MODULE:
///items/: categoryId
//HTML
//  < a[routerLink]="['/items',cat.id]" > </a> = items/cat.id
//TS
//  - Activated Route kullanılır = private router: ActivatedRoute
//let id = this.route.snapshot.paramMap.get('categoryId')
//işlemler...

//----------------OBSERVABLE ROUTE PARAMETRELER------------
//sayfa yenilenmediğinde(aynı component içerisinden bir istek yapılacağında) asenkron bir işlem yapılmalı.
//=sıralı bir işlem yapılmaz,yeni bir toute bilgisi olduğunda (istek/tıklandığında) bundan haberdar oluruz.
//  private route:ActivatedRoute
//this.route.paramMap.subscribe(params => {
//  let id = params.get('categoryId')
//  işlemler...
//})

//--------------------- QUERY PARAMS-------------
////  Route'lara parametre göndererek kullanmak için,parametrelerurl'nin bir parçası değil.
////istediğimiz kadar istek gönderebiliriz.
////?par=değeri&diğerpar=değeri&diğerpar=değeri

//  HTML
//  [queryParams]="{categoryId:değer}"

//TS
//  //this.route.paramMap.subscribe(params => {
////  let id = params.get('categoryId'),


//aynı component içindeyken veri alma işlemi =
//  asenkron =
//  //this.route.paramMap.subscribe(params => {
////  let id = params.get('categoryId'),
//  farklı component içindeyken veri alma işlemi =
//  senkron =
//    //let id = this.route.snapshot.paramMap.get('categoryId')
//  Query Parametre değerlerini almak için =
//    asenkron=
//    this.route.queryParamMap.subscribe(params => {


//    })
//senkron =
//  let id= this.route.snapshot.queryParamMap.get("categoryId")


// verı aktarım metodu


//this.router.navigate(['pageUrl'], { state: { example: 'bar' } });
//constructor(private router: Router) {
//  console.log(this.router.getCurrentNavigation().extras.state.example); // should log out 'bar'
//}
