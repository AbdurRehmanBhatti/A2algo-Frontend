import { Component } from '@angular/core';
import { Purchase } from 'src/app/Interfaces/purchase';
import { PurchaseService } from 'src/app/Services/purchase.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent {
  purchases: Purchase[] = [];

  constructor(private purchaseService: PurchaseService) { }

  newPurchase: Purchase = {
    purchaseId: 0,
    productId: 0,
    quantityPurchased: 0,
    purchaseDate: new Date()
  };

  ngOnInit(): void {
    this.loadPurchases();
  }

  loadPurchases(): void {
    this.purchaseService.getAllPurchases().subscribe(
      (purchases: Purchase[]) => {
        this.purchases = purchases;
      },
      error => {
        console.error('Error loading purchases:', error);
      }
    );
  }
  
  recordPurchase(): void {
    this.purchaseService.recordPurchase(this.newPurchase).subscribe(
      (sale: Purchase) => {
        console.log('Purchase recorded successfully:', sale);
      },
      error => {
        console.error('Error recording sale:', error);
      }
    );
  }
}
