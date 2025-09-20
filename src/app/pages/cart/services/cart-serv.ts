import { Checkout } from './../../checkout/checkout';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServ {
  private readonly httpClient = inject(HttpClient);
  private readonly cookieService = inject(CookieService);

  AddProductToCart(id: string): Observable<any> {
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/cart', {
      productId: id,
    });
  }

  GetUserCart(): Observable<any> {
    return this.httpClient.get('https://ecommerce.routemisr.com/api/v1/cart');
  }
  RemoveCartItem(id: string): Observable<any> {
    return this.httpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`
    );
  }
  UpdateItemCount(id: string, count: number): Observable<any> {
    return this.httpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        count: count,
      }
    );
  }

  CheckoutVisa(CartID: string | null, details: object): Observable<any> {
    return this.httpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${CartID}?url=http://localhost:4200`,
      {
        shippingAddress: details,
      }
    );
  }
}
