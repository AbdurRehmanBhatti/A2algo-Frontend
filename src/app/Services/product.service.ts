import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:44371/api/';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl +'Product/GetAll');
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl + 'Product'}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl + 'Product/Create', product);
  }

  updateProduct(id: number, product: Product): Observable<void> {
    return this.http.put<void>(`${this.apiUrl + 'Product/Update'}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl + 'Product/Delete'}/${id}`);
  }
}
