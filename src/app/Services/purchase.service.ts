import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from '../Interfaces/purchase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  public apiUrl = 'https://localhost:44371/api/';

  constructor(private http: HttpClient) { }

  getAllPurchases(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(`${this.apiUrl}/Purchase/GetAllPurchases`);
  }

  recordPurchase(purchaseData: Purchase): Observable<Purchase> {
    return this.http.post<Purchase>(`${this.apiUrl}Purchase/RecordPurchase`, purchaseData);
  }
}
