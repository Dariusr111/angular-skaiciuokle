import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/Product";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public name:string|null=null;
  public quantity:number|null=null;

  //category yra tą ką mes pasirinkom
  public category:string|null="";
  //categories yra masyvas iš ko renkamės
  public categories:string[]=["Maisto produktai", "Buitinė technika", "Baldai"];

  constructor(private productsService:ProductsService, private router:Router) { }

  ngOnInit(): void {
  }

  public addProduct(){
    if (this.name!=null && this.quantity!=null && this.category!=null){
      this.productsService.addProduct(this.name, this.quantity);
      this.name=null;
      this.quantity=null;
      this.router.navigate(['/cart']);
      console.log(this.category)
    }
  }

}
