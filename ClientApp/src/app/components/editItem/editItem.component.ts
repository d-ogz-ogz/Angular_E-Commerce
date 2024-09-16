
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../Cart/Cart.service';
import { Item } from '../item/Item';
import { ItemService } from '../item/Item.service';



@Component({
  selector: 'app-edit',
  templateUrl: './editItem.component.html',

})
export class EditItemComponent implements OnInit {
  public menuForm!: FormGroup;



  constructor(public itemService: ItemService, private cartService: CartService, private formBuilder: FormBuilder, private router: Router,) {
 

  }



  ngOnInit(): void {
    this.menuForm = this.createMenuForm();
  }
  edit(item: Item) {
    this.cartService.editItem(this.itemService.selectedItem as Item, this.menuForm.value.beverageSel, this.menuForm.value.sizeSel, this.menuForm.value.orderNotes);
    this.router.navigate(['/basket'])







  }


  createMenuForm(): FormGroup {

    return this.formBuilder.group({
      sizeSel: this.formBuilder.control("", [Validators.required]),
      beverageSel: this.formBuilder.control(null, [Validators.required]),
      orderNotes: this.formBuilder.control(null, [Validators.required, Validators.maxLength(50)]),
    })
  }


}




//angulara inject ettiğimiz third party stillerdeki classlara stil vermek için = ::ng-deep .classIsmı{}

// ::ng-deep .mat-container{
//   height:50px;
// }