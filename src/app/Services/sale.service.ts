import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sale } from '../Interfaces/sale';
import { Observable } from 'rxjs';
import { environment } from '../Environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  public apiUrl = 'https://localhost:44371/api/';

  constructor(private http: HttpClient) { }

  recordSale(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(`${this.apiUrl}Sale/RecordSale`, sale);
  }  

  getSaleById(saleId: number): Observable<Sale> {
    return this.http.get<Sale>(`${this.apiUrl}Sale/GetSaleById/${saleId}`);
  }
}
