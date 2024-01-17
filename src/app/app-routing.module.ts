import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { DetailsProductComponent } from './details-product/details-product.component';
import { FormResidenceComponentComponent } from './form-residence-component/form-residence-component.component';
import { DetailsResidanceComponent } from './details-residance/details-residance.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'product', component:HomeComponent},
  {path:'residence', component:ResidencesComponentComponent},
  {path:'product/:id', component:DetailsProductComponent},
  {path:'form-residence', component:FormResidenceComponentComponent},
  {path:'residence/:id', component:DetailsResidanceComponent},
  {path:'forms', component:ReactiveFormComponent},
  {path:'tv', component:TvComponent},
  {path:'mobile', component:MobileComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'updateProduct/:id', component:UpdateProductComponent},
  {path:'**', component:NotFoundComponent},  // route not found
  {path:'', redirectTo:'/product', pathMatch:'full'}, // path par defaut w tethat lekhra fel les routes lkol 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
