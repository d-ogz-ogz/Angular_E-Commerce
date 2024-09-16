import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './authorization/login/Login.component'
import { RegisterComponent } from './authorization/register/Register.component'
import { ItemComponent } from './components/item/Item.component'
import { NotFoundComponent } from './components/notFound/notFound.component'
import { OrderComponent } from './components/order/Order.component'
import { PaymentComponent } from './components/payment/payment.component'
import { HomeComponent } from './home/home.component'
const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', redirectTo: "/page", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'item', component: ItemComponent },
  { path: 'page', component: ItemComponent },
  { path: 'basket', component: ItemComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'register', component: RegisterComponent }, {
    path: 'order', children: [{ path: "", component: OrderComponent },
    { path: "edit/id", component: OrderComponent },
    { path: '**', component: NotFoundComponent }],

  },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {


}
