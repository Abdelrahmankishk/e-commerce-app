import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsServ } from './services/details-serv';
import { Product } from '../../core/models/product';
import { CartServ } from '../cart/services/cart-serv';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit {
  ngOnInit(): void {
    this.getProductId()
    this.getProductsData()
  }
  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly detailsServ = inject(DetailsServ)
  private readonly cartServ = inject(CartServ)
  private readonly toastrService = inject(ToastrService)

  productDetailsList: Product = {} as Product;
  ProductID !: string | null;

  getProductId():void{
    this.activatedRoute.paramMap.subscribe({
      next: (id)=>{
        this.ProductID =  id.get('id')  
      }
    })
  }
  getProductsData():void{
    this.detailsServ.getProductDetails(this.ProductID).subscribe({
      next: (res)=>{
        this.productDetailsList = res.data
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
  AddProductToCar(id:string):void{
  this.cartServ.AddProductToCart(id).subscribe({
    next: (res)=>{
      console.log(res);
      if(res.status === "success"){
        this.toastrService.success(res.message, 'Cart')
      }
    }, 
    error: (error)=>{
      console.log(error);
      
    }
  })
 }
}
