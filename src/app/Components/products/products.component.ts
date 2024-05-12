import { Component } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = [];
  product: Product = { id: 0, name: '', description: '', quantity: 0 };
  showForm = false;
  formTitle = '';
  submitButtonText = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
    console.log(this.loadProducts,"Products");
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      error => {
        console.error('Error loading products:', error);
      }
    );
  }

  editProduct(productId: number) {
    this.productService.getProductById(productId).subscribe(
      (product: Product) => {
        this.product = product;
        this.showForm = true;
        this.formTitle = 'Edit Product';
        this.submitButtonText = 'Update';
      },
      error => {
        console.error('Error fetching product:', error);
      }
    );
  }

  saveProduct() {
    if (this.product.id === 0) {
      this.productService.addProduct(this.product).subscribe(
        () => {
          this.loadProducts();
          this.resetForm();
        },
        error => {
          console.error('Error adding product:', error);
        }
      );
    } else {
      this.productService.updateProduct(this.product.id, this.product).subscribe(
        () => {
          this.loadProducts();
          this.resetForm();
        },
        error => {
          console.error('Error updating product:', error);
        }
      );
    }
  }

  deleteProduct(productId: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId).subscribe(
        () => {
          this.loadProducts();
        },
        error => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }

  resetForm() {
    this.product = { id: 0, name: '', description: '', quantity: 0 };
    this.showForm = false;
    this.formTitle = '';
    this.submitButtonText = '';
  }
}
