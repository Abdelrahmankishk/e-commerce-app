import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly httpClient = inject(HttpClient);
  private readonly cookieService = inject(CookieService);
  private readonly router = inject(Router);

  registerForm(data: object): Observable<any> {
    return this.httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      data
    );
  }

  loginForm(data: object): Observable<any> {
    return this.httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      data
    );
  }

  logOut(): void {
    this.cookieService.delete('token');
    this.router.navigate(['/login']);
  }

  VerifyEmail(email: object): Observable<any> {
    return this.httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
      email
    );
  }
  VerifyResetCode(code: object): Observable<any> {
    return this.httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
      code
    );
  }
  ResetPassword(account: object): Observable<any> {
    return this.httpClient.put(
      'https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
      account
    );
  }
}
