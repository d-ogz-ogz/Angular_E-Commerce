
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../components/Cart/Cart.service';
import { Item } from '../components/item/Item';
import { ItemService } from '../components/item/Item.service';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-details',
  templateUrl: './itemDetails.component.html',

})
export class ItemDetailsComponent implements OnInit {
  public menuForm!: FormGroup;
  carouselItems: Item[] = [];
  selectedCategoryId!: number;




  constructor(public itemService: ItemService, private cartService: CartService, private formBuilder: FormBuilder, private router: Router,) {


  }



  ngOnInit(): void {
    this.menuForm = this.createMenuForm();
  }
  addToCart(item: Item) {
    this.cartService.addToCart(this.itemService.selectedItem as Item, 1, this.menuForm.value.beverageSel, this.menuForm.value.sizeSel, this.menuForm.value.orderNotes);
    this.menuForm.reset()





  }


  createMenuForm(): FormGroup {

    return this.formBuilder.group({
      sizeSel: this.formBuilder.control("", [Validators.required]),
      beverageSel: this.formBuilder.control(null, [Validators.required]),
      orderNotes: this.formBuilder.control(null, [Validators.required, Validators.maxLength(50)]),
    })
  }
  edit(eItem: Item) {
    this.cartService.editItem(this.itemService.selectedItem as Item, this.menuForm.value.beverageSel, this.menuForm.value.sizeSel, this.menuForm.value.orderNotes);
  }
  handleClick(item: Item) {
    //this.selectedCategoryId = Number(item.categoryId)
    //this.getItems(this.selectedCategoryId);
    console.log("success")
  }
  getItems(categoryId?: number, mainCatId?: number) {

    this.itemService.getItems(1, 4, mainCatId, categoryId).then(r => {
      this.carouselItems = r.ItemList
        ;


    })


  }

}






