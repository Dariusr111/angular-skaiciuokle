import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Currencies} from "../models/Currencies";

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http:HttpClient) { }

  public getCurrencies(){
    this.http.get<Currencies>('https://api.frankfurter.app/currencies');
  }
}
