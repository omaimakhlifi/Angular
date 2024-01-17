import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-show-one-product',
  templateUrl: './show-one-product.component.html',
  styleUrls: ['./show-one-product.component.css']
})
export class ShowOneProductComponent {
   @Input() p!: Product;

   @Output() notif= new EventEmitter();//notifier le parent 

   sentDataToParent(produit:Product){ //developpement de la notification
    this.notif.emit(produit);
    
    //ou bien
    /*sentDataToParent(){
    this.notif.emit(this.p);*/

   
    }
    showMsgChild(){
      alert("hello from child")
   }

}
