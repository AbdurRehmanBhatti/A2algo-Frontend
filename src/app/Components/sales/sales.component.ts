import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sale } from 'src/app/Interfaces/sale';
import { SaleService } from 'src/app/Services/sale.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales: Sale[] = [];
  saleId: number | undefined;
  sale: Sale | undefined;
  newSale: Sale = {
    saleId: 0,
    productId: 0,
    quantitySold: 0,
    saleDate: new Date()
  };

  constructor(private saleService: SaleService, private router: Router) { }

  ngOnInit(): void {
    //this.loadSales();
  }

  // loadSales(): void {
  //   this.saleService.getSales().subscribe(
  //     (sales: Sale[]) => {
  //       this.sales = sales;
  //     },
  //     error => {
  //       console.error('Error loading sales:', error);
  //     }
  //   );
  // }

  getSaleById(): void {
    if (this.saleId) {
      this.saleService.getSaleById(this.saleId).subscribe(
        (sale: Sale) => {
          this.sale = sale;
        },
        error => {
          console.error('Error getting sale by ID:', error);
        }
      );
    } else {
      console.error('Sale ID is not defined');
    }
  }

  recordSale(): void {
    this.saleService.recordSale(this.newSale).subscribe(
      (sale: Sale) => {
        this.router.navigate(['/products']);
      },
      error => {
        console.error('Error recording sale:', error);
      }
    );
  }
}
