import { Component } from '@angular/core';
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skaiciuokle';
  public sk:number|null=null;
  public rezultatas:string="";

  public skaiciuoti(){
    if (this.sk!=null){
      this.rezultatas="Rezultatas: "+(this.sk*2);
      this.sk=null;
    }
  }

  constructor(private productsService:ProductsService) {
    productsService.load();
  }




}
