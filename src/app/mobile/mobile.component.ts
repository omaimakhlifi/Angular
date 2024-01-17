import { Component } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {

  listProduit:Product[]=[
    {id:1,title:'iphone 1',price:20,quantity:10,like:0,image:"../../assets/images/i.jpg"},
    {id:2,title:'iphone 2',price:30,quantity:0,like:22,image:"../../assets/images/i.jpg"},
    {id:3,title:'iphone 3',price:40,quantity:100,like:5,image:"../../assets/images/i.jpg"}
  ]

  afterReceiveData(t:Product){
    let  index =this.listProduit.indexOf(t);
    this.listProduit[index].like++;
  }

 


}
