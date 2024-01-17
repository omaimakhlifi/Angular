import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  login= new FormControl('',[Validators.required, Validators.minLength(3)]);
  password = new FormControl('',[Validators.required, Validators.minLength(3)]);

  registerForm= new FormGroup(
    {FirstName : new FormControl('',[Validators.required, Validators.minLength(3)]),
    LastName : new FormControl('',[Validators.required, Validators.minLength(3)]),
    Adress : new FormControl('',[Validators.required, Validators.minLength(3)])
   })

   formBuilder:any; //service a injecter 
   constructor(private fb:FormBuilder){
    this.formBuilder= fb.group({
      login: new FormControl('',[Validators.required, Validators.minLength(3)]),
      password : new FormControl('',[Validators.required, Validators.minLength(3)]),
    });

   }
  showLogin(){
    console.log(this.login);
  }

  showF(){
    console.log(this.registerForm);
  }


}
