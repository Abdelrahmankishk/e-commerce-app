import { Product } from './../../core/models/product';
import { Products } from './../../core/services/products/products';
import {NgxPaginationModule} from 'ngx-pagination';

import { Component, inject, OnInit } from '@angular/core';
import { Card } from "../../shared/components/card/card";
import { SearchPipe } from '../../shared/pipes/search-pipe';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-products',
  imports: [Card,NgxPaginationModule,SearchPipe, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsPage implements OnInit{
ngOnInit(): void {
  this.getAllProducts()
}
private readonly x = inject(Products)
text: string = ""
ProductList: Product[] = []
pageSize !: number 
p !: number
total !: number
getAllProducts(pageNum:number = 1):void{
   this.x.GetProducts(pageNum).subscribe({
    next:(res)=>{
      this.ProductList = res.data
      res.metadata.currentPage = pageNum
      this.pageSize = res.metadata.limit
      this.p = res.metadata.currentPage
      this.total = res.results
    }
    ,error:(err)=>{
      console.log(err);
      
    }
  });
}

pageChanged(currentPage:number):void{
  this.getAllProducts(currentPage)
}
}
