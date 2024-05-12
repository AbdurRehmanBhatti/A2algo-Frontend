import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { SalesComponent } from './Components/sales/sales.component';
import { PurchasesComponent } from './Components/purchases/purchases.component';
import { CreateProductComponent } from './Components/products/create-product/create-product.component';
import { EditProductComponent } from './Components/products/edit-product/edit-product.component';
import { DeleteProductComponent } from './Components/products/delete-product/delete-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, 
  { 
    path: 'products', 
    component: ProductsComponent,
    children: [
      { path: 'create', component: CreateProductComponent },
      { path: 'edit/:id', component: EditProductComponent },
      { path: 'delete/:id', component: DeleteProductComponent }
    ]
  },
  { path: 'sales', component: SalesComponent },
  { path: 'purchases', component: PurchasesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
