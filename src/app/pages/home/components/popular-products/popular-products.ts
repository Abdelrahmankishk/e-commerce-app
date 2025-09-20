import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../../../../core/services/products/products';
import { Product } from '../../../../core/models/product';
import { Card } from '../../../../shared/components/card/card';

@Component({
  selector: 'app-popular-products',
  imports: [Card],
  templateUrl: './popular-products.html',
  styleUrl: './popular-products.css',
})
export class PopularProducts implements OnInit {
  ngOnInit(): void {
    this.GetAllData();
  }
  private readonly data = inject(Products);
  allProducts: Product[] = [];
  GetAllData(): void {
    this.data.GetProducts().subscribe({
      next: (res) => {
        this.allProducts = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
