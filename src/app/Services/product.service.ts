import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Interfaces/product';
import { environment } from '../Environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    debugger;
    return this.http.get<Product[]>(this.apiUrl +'Product/GetAll');
  }

  getProductById(id: number): Observable<Product> {
    const url = `${this.apiUrl + 'Product'}/${id}`;
    return this.http.get<Product>(url);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl + 'Product/Create', product);
  }

  updateProduct(id: number, product: Product): Observable<void> {
    const url = `${this.apiUrl + 'Product/Update'}/${id}`;
    return this.http.put<void>(url, product);
  }

  deleteProduct(id: number): Observable<void> {
    const url = `${this.apiUrl + 'Product/Delete'}/${id}`;
    return this.http.delete<void>(url);
  }
}
