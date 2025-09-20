import {
  Component,
  inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CartServ } from './services/cart-serv';
import { CartInterface } from './models/cart-interface';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.GetUserData();
  }
  private readonly cartServ = inject(CartServ);
  private readonly toastrService = inject(ToastrService);
  CartDetails: CartInterface = {} as CartInterface;
  CheckCartCount(res: any) {
    if (res.numOfCartItems === 0) {
      this.router.navigate(['/products']);
      this.toastrService.warning('Cart is Empty!');
    }
  }
  GetUserData(): void {
    this.cartServ.GetUserCart().subscribe({
      next: (res) => {
        this.CheckCartCount(res);
        this.CartDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  DeleteCetainItem(id: string): void {
    this.cartServ.RemoveCartItem(id).subscribe({
      next: (res) => {
        this.CheckCartCount(res);
        this.toastrService.success('The item is Removed!', 'Cart');
        this.CartDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  UpdateQuantity(id: string, count: number): void {
    this.cartServ.UpdateItemCount(id, count).subscribe({
      next: (res) => {
        this.CheckCartCount(res);
        this.CartDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
