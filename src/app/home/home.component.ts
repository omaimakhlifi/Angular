import { Component } from '@angular/core';
import { Product } from '../core/model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ConsumerProdutService } from '../services/consumer-produt.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   title:string="welcome";
   color="green";
   price=0;
   listProducts:Product[]=[]
   AlertStock!:number;

   constructor(private Ps:ProductService,private c:CalculService, private cons:ConsumerProdutService){}

   ngOnInit(){
    this.cons.getProducts().subscribe((data)=>this.listProducts=data)
   // this.listProducts= this.Ps.listProducts;
   }
  // eventBinding 
   sayHello(){
    alert('helloooooo');
   }


   addLike(i:number){
    this.listProducts[i].like ++ ;    
   }
   removeQuantity(i:number){

    this.listProducts[i].quantity-- ;
   }
   getAlertStock(){
    this.AlertStock=this.c.getCalcul(this.listProducts,'quantity',0)
   }
   supresssion(id:number){
    this.cons.deleteProduct(id).subscribe(
     ()=>this.ngOnInit()
    );
   }

}
