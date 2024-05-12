import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Interfaces/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  product: Product = {
    id: 0,
    name: '',
    description: '',
    quantity: 0
  };

  constructor(private productService: ProductService, private router: Router) { }

  saveProduct(): void {
    this.productService.addProduct(this.product).subscribe(
      (createdProduct: Product) => {
        this.router.navigate(['/products']);
      },
      error => {
        console.error('Error creating product:', error);
      }
    );
  }
}
