import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Components/products/products.component';
import { SalesComponent } from './Components/sales/sales.component';
import { PurchasesComponent } from './Components/purchases/purchases.component';
import { FormsModule } from '@angular/forms';
import { CreateProductComponent } from './Components/products/create-product/create-product.component';
import { EditProductComponent } from './Components/products/edit-product/edit-product.component';
import { DeleteProductComponent } from './Components/products/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SalesComponent,
    PurchasesComponent,
    CreateProductComponent,
    EditProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
