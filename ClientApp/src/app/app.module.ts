import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { OrderComponent } from './components/order/Order.component';
import { ItemComponent } from './components/item/Item.component';
import { LoginComponent } from './authorization/login/Login.component';
import { RegisterComponent } from './authorization/register/Register.component';
import { ItemService } from './components/item/Item.service';
import { OrderService } from './components/order/Order.service';
import { PaymentComponent } from './components/payment/payment.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CartComponent } from './components/Cart/Cart.component';
import { CartService } from './components/Cart/Cart.service';
import { CartSummaryComponent } from './components/item/Cart-summary.component';
import { AfterPurchaseComponent } from './components/AfterPurchase/AfterPurchase.component';
import { ContactComponent } from './components/contact/Contact.component';
import { AboutUsComponent } from './components/aboutUs/AboutUs.component';
import { CommentFormComponent } from './components/commentForm/CommentForm.component';
import { ItemDetailsComponent } from './itemDetails/itemDetails.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { EditItemComponent } from './components/editItem/editItem.component';
import { AddressService } from './components/order/Address.service';
import { ValidationComponent } from './authorization/validation/Validation.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    OrderComponent,
    ItemComponent,
    LoginComponent,
    RegisterComponent,
    PaymentComponent,
    CartComponent,
    CartSummaryComponent,
    AfterPurchaseComponent,
    ContactComponent,
    AboutUsComponent,
    CommentFormComponent,
    ItemDetailsComponent,
    EditItemComponent,
    ValidationComponent





  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    LazyLoadImageModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: '', redirectTo: "/page", pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'afterPurchase', component: AfterPurchaseComponent },
      { path: 'item', component: ItemComponent, },
      { path: 'validation', component:ValidationComponent },
      { path: 'commentsuggestion', component: CommentFormComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'basket', component: CartComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'register', component: RegisterComponent }, {
        path: 'order', children: [{ path: "", component: OrderComponent },
        { path: "edit/id", component: OrderComponent },
        ],

      },
      { path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [ItemService, OrderService, CartService, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }


////MODULE LAZY LOADING OLARAK YÜKLENMESI
//{ path: "any", loadChildren()=> import("modul ismi ").then(a => a.Modul) }
//kendi modulundeki route path bos olmalı
