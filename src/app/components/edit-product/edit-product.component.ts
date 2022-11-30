import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public name:string|null=null;
  public quantity:number|null=null;
  public index:number|null=null;
  constructor(
    private productService:ProductsService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    this.index=this.route.snapshot.params['id'];
    if (this.index != null) {
      const product = this.productService.products[this.index];
      this.name = product.name;
      this.quantity = product.quantity;
    }
  }



  ngOnInit(): void {
  }

//  metodas skirtas išsaugojimo iškvietimui
  public update(){
    if (this.index!=null && this.name!=null && this.quantity!=null){
      this.productService.update(this.index, this.name, this.quantity);
      this.router.navigate(["/cart"]);
    }

  }
}
