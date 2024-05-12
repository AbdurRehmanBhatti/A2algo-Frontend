import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/Interfaces/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  productId: number = 0;
  product: Product = { id: 0, name: '', description: '', quantity: 0 };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router:Router 
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = id ? +id : 0;

    this.productService.getProductById(this.productId).subscribe(
      (product: Product) => {
        this.product = product;
      },
      error => {
        console.error('Error loading product:', error);
      }
    );
  }

  updateProduct(): void {
  this.productService.updateProduct(this.productId, this.product).subscribe(
    () => {
      this.router.navigate(['/products']);
    },
    (error: any) => {
      console.error('Error updating product:', error);
    }
  );
}
}
