import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:Product[]=[];

  constructor(private productsService:ProductsService) {
    this.products=productsService.products;

  }

  ngOnInit(): void {
  }

  public delete(i:number){
    this.productsService.delete(i);
  }

  public onReceiveDelete(i:number){
    this.productsService.delete(i);
  }

}




