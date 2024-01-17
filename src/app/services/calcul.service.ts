import { Injectable } from '@angular/core';
import { Product } from '../core/model/product';

@Injectable({
  providedIn: 'root'
})
export class CalculService {
  
  listProducts:Product[]=[]
  
  constructor() { }

  getCalcul(list:any[], criteria:string, value:any){
   let n=0;
   for(let i in list){
    if(list[i][criteria]==value){
      n++
    }
   }
   return n ;
  }
}
