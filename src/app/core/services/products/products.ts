import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Products {
  private readonly httpClient = inject(HttpClient)

  GetProducts(page:number=1):Observable<any>{
    return this.httpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${page}`)
  }
}
