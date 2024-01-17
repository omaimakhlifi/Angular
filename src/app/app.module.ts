import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { FormResidenceComponentComponent } from './form-residence-component/form-residence-component.component';
import { DetailsResidanceComponent } from './details-residance/details-residance.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { ShowOneProductComponent } from './show-one-product/show-one-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import {HttpClientModule} from "@angular/common/http";
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResidencesComponentComponent,
    NavbarComponent,
    NotFoundComponent,
    DetailsProductComponent,
    DetailsProductComponent,
    FormResidenceComponentComponent,
    DetailsResidanceComponent,
    ReactiveFormComponent,
    MobileComponent,
    TvComponent,
    ShowOneProductComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
