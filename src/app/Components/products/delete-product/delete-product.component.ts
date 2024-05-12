import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  productId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = id ? +id : 0;
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.productId).subscribe(
      () => {
        this.router.navigate(['/products']);
      },
      error => {
        console.error('Error deleting product:', error);
      }
    );
  }
}
