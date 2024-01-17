import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { ConsumerProdutService } from '../services/consumer-produt.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  registerForm!: FormGroup;
  constructor(private ps:ProductService, private route:Router, private cons:ConsumerProdutService){

  }
  ngOnInit(){

    this.registerForm= new FormGroup({
      id:new FormControl(),
      title: new FormControl('tt',[Validators.required,Validators.minLength(3)]),
      price: new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')]),
      like:new FormControl('',Validators.required),
      quantity:new FormControl('',Validators.required),

    });
  }
  onSubmit(){
    console.log(this.registerForm.value);
    alert('SUCCES\n\n'+ JSON.stringify(this.registerForm.value,null,4))
  }
  reset(){
    this.registerForm.reset();
  }

  ajouter(){
  //  this.ps.addProduct(this.registerForm.value);
   // this.route.navigateByUrl('/product');

   this.cons.addProduct(this.registerForm.value).subscribe({next:()=>this.route.navigateByUrl('/product')})
  }

}