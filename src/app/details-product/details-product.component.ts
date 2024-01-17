import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/model/product';
import { ProductService } from '../services/product.service';
import { ConsumerProdutService } from '../services/consumer-produt.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent {


  // Activated route 
  id!:number;
  Products!:Product;

  constructor(private route:ActivatedRoute,private Ps:ProductService,private cons:ConsumerProdutService){}

  ngOnInit(){
    
   // this.listProducts=this.Ps.listProducts;
    this.id=this.route.snapshot.params['id'];
    this.cons.GetProductById(this.id).subscribe((data)=>this.Products=data)

  
  }
}
