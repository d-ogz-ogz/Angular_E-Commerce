import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../components/Cart/Cart.service';
import { Item } from '../components/item/Item';
import { ItemService } from '../components/item/Item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Items!: Item[];
  highPrices!: Item[];
  favouriteItem!: Item;
  randomItems!: Item[];
  recommends!: Item[];
  selectedItem!: any;

  constructor(public itemService: ItemService, private cartService: CartService, private router: Router) {
    this.getRandomItems();
    this.getFavouriteItem();
   

  }



  ngOnInit(): void {

  }
  getFavouriteItem() {
    this.itemService.getFavouriteItem().then(item => { this.favouriteItem = item as Item });
  }
  getRandomItems() {
    this.itemService.getRandomItems().then(items => { this.randomItems = items as Item[] });

  }
  addToCart(item: Item) {
    this.cartService.addToCart(item);
    //this.router.navigateByUrl("/basket")

  }
  displayDetails(item: Item) {
    this.itemService.selectedItem = item;

  }

}
