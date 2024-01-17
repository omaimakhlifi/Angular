import { Injectable } from '@angular/core';
import { Product } from '../core/model/product';

@Injectable({ //décorateur pour dire que c'est un service et pour l'injecter 
  providedIn: 'root' //
})
export class ProductService {

  constructor() { }
  listProducts:Product[]= [
    {id:1,title:'prod1',price:20,quantity:10,like:0,image:""},
    {id:2,title:'prod2',price:30,quantity:0,like:22,image:""},
    {id:3,title:'prod3',price:40,quantity:100,like:5,image:""}
   ]

   addProduct(p: Product){
      this.listProducts.push(p);//push :tajouti l produit f liste 
   }
}
