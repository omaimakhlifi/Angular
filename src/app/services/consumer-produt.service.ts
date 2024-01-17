import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/model/product';
import { Observable } from 'rxjs';

@Injectable({
  
  providedIn: 'root'
})
export class ConsumerProdutService {
  api='http://localhost:3000/products';
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.api) // return observable :
  }

  GetProductById(id:number){
    return this.http.get<Product>('http://localhost:3000/products'+'/'+id)
  }
  addProduct(Product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products',Product)
  }

  deleteProduct(id:number) {
     return this.http.delete('http://localhost:3000/products'+'/'+id)
  }
  updateProduct(product:Product,id:number){
    return this.http.put('http://localhost:3000/products'+'/'+id,product)
  }
}
