import { Component, ViewChild } from '@angular/core';
import { Product } from '../core/model/product';
import { ShowOneProductComponent } from '../show-one-product/show-one-product.component';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  listProduit:Product[]=[
    {id:1,title:'tv1',price:20,quantity:10,like:0,image:"../../assets/images/tv.jpg"},
    {id:2,title:'tv2',price:30,quantity:0,like:22,image:"../../assets/images/tv.jpg"},
    {id:3,title:'tv3',price:40,quantity:100,like:5,image:"../../assets/images/tv.jpg"}
  ]

  afterReceiveData(t:Product){
    let  index =this.listProduit.indexOf(t);
    this.listProduit[index].like++;
  }

  @ViewChild(ShowOneProductComponent)child:any

  afficheMsg(){
    this.child.showMsgChild();
  }
}
