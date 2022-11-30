import {EventEmitter, Injectable} from '@angular/core';
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _products:Product[]=[];
  private _productUpdate=new EventEmitter();

  //kai sūsikurs objektas šito serviso, jis užsikraus duomenis
  constructor() {
    this.load();

  }

  public addProduct(name:string, quantity:number){
    this._products.push(new Product(name, quantity));
    this.save();
    this._productUpdate.emit();
  }

  public delete(i:number){
    this._products.splice(i, 1);
    this.save();
    this._productUpdate.emit();
  }

  public update(i:number, name:string, quantity:number){
    this._products[i].name=name;
    this._products[i].quantity=quantity;
    this._productUpdate.emit();
  }



  // get'eris, kuris grąžina iš private masyvo,
  //reikalingas private masyvas, kad atsitiktinai neperšytų component'ų metodai
  public get products(){
    return this._products;
  }

  public get productUpdate(){
    return this._productUpdate;
  }

  //Išsaugom į Local storage JSON formatu
  public save(){
    localStorage.setItem('products',JSON.stringify(this._products));
  }

  //Paimam "products" atvaizdavimui iš localStorage,
  // Jei neišsaugotume localStorage, dingtų po refresh
  public load(){
    const data=localStorage.getItem('products');
    if (data!=null){
      this._products=JSON.parse(data);
    }
  }


}
