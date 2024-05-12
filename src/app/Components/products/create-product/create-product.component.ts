import { Component } from '@angular/core';
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

  constructor(private productService: ProductService) { }

  saveProduct(): void {
    this.productService.addProduct(this.product).subscribe(
      (createdProduct: Product) => {
        console.log('Product created successfully:', createdProduct);
        // Optionally, you can navigate to a different page after creating the product
      },
      error => {
        console.error('Error creating product:', error);
      }
    );
  }
}
