import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerProdutService } from '../services/consumer-produt.service';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  registerForm!: FormGroup;
  id!:number;
  product !:Product;


  constructor(private ps:ProductService, private route:Router, private cons:ConsumerProdutService,private act:ActivatedRoute){}
  
  
  ngOnInit(){

    this.registerForm= new FormGroup({
      id:new FormControl(),
      title: new FormControl('tt',[Validators.required,Validators.minLength(3)]),
      price: new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')]),
      like:new FormControl('',Validators.required),
      quantity:new FormControl('',Validators.required),

    });
    //1: recuperer id du produit depuit l'url
   this.id= this.act.snapshot.params['id'];
   //2: appel methode getById
   this.cons.GetProductById(this.id).subscribe((data)=>{this.product=data, this.registerForm.patchValue(this.product) });
  

  }
  onSubmit(){
    console.log(this.registerForm.value);
    alert('SUCCES\n\n'+ JSON.stringify(this.registerForm.value,null,4))
  }
  reset(){
    this.registerForm.reset();
  }

  update(){
    this.cons.updateProduct(this.registerForm.value,this.id).subscribe(()=>{this.route.navigate(['/product'])});
  
  }

}
