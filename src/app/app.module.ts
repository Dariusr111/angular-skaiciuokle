import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KmiComponent } from './components/kmi/kmi.component';
import {FormsModule} from "@angular/forms";
import { TalpaComponent } from './components/talpa/talpa.component';
import { CartComponent } from './components/cart/cart.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {RouterModule, Routes} from "@angular/router";
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { JokeComponent } from './components/joke/joke.component';
import {HttpClientModule} from "@angular/common/http";
import { ExchangeComponent } from './components/exchange/exchange.component';

const appRoutes:Routes=[
  {path:"kmi", component:KmiComponent},
  {path:"talpa", component:TalpaComponent},
  {path:"cart", component:CartComponent},
  {path:"new", component:AddProductComponent},
  {path:"edit/:id", component:EditProductComponent},
  {path:"joke", component:JokeComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    KmiComponent,
    TalpaComponent,
    CartComponent,
    TasklistComponent,
    AddProductComponent,
    NavigationComponent,
    EditProductComponent,
    CartItemComponent,
    CartDetailsComponent,
    JokeComponent,
    ExchangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
