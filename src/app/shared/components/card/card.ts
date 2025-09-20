import { RouterLink } from '@angular/router';
import { Product } from './../../../core/models/product';
import { Component, inject, Input, input } from '@angular/core';
import { CartServ } from '../../../pages/cart/services/cart-serv';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
 @Input({required:true}) product: Product = {} as Product

 private readonly cartServ = inject(CartServ)
 private readonly toastrService = inject(ToastrService)

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
