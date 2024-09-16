
import { Injectable } from "@angular/core";
import { Item } from "../item/Item";
import * as alertifyjs from 'alertifyjs';



@Injectable()
export class CartService {
  public cartItems: CartItem[] = [];
  public cartItemCount: number = 0;
  public total: number = 0;


  addToCart(cartItem: Item, quantity: number = 1, beverageSel?: string, sizeSel?: string, orderNotes?: string,) {

    let aItem = this.cartItems.find(i => i.item.id == cartItem.id);
    var item = Object.assign({}, cartItem)
    item.beverage = beverageSel
    item.size = sizeSel
    item.orderNotes = orderNotes;
    this.cartItems.push(new CartItem(item, quantity));
/*    sessionStorage.setItem("addedItem", JSON.stringify({ item }));*/ //alırken parse et
    this.createIndex();
    console.log(aItem?.index)
    this.calculate();
    alertifyjs.success("Added SuccessFully")

  }

  editItem(cartItem: Item, beverageSel?: string, sizeSel?: string, orderNotes?: string,) {
    let item = this.cartItems.find(i => i.item.id == cartItem.id);
    var editItem = Object.assign({}, item)
    editItem.item.beverage = beverageSel
    editItem.item.size = sizeSel
    editItem.item.orderNotes = orderNotes;
    this.calculate();
    alertifyjs.success("Editted SuccessFully")
  }
  calculate() {
    this.cartItemCount = 0;
    this.total = 0;
    this.cartItems.forEach(item => {
      this.cartItemCount += item.quantity;
      this.total += (item.quantity * item.item.price)
    })
  }
  removeFromCart(id: number) {

    var item = this.cartItems.findIndex(i => i.item.id == id)
    var deleteItem = Object.assign({}, item)
    this.cartItems.splice(deleteItem, 1)
    this.calculate();
    alertifyjs.warning("Removed From Your Cart")
  }


  clear() {
    this.cartItems = [];
    this.cartItemCount = 0;
    this.total = 0;
  }


  updateQuantity(item: Item, quantity: number) {
    let updateItem = this.cartItems.find(i => i.item.id == item.id);
    if (updateItem != undefined) {
      updateItem.quantity = quantity;
    }
    this.calculate();

  }
  createIndex() {

      this.cartItems.map((c, i) => {
        c.index = i;
      })
   

  }

}


export class CartItem {
  constructor(public item: Item, public quantity: number, public index: number = 1) { }
}

