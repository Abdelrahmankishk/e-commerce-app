import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Auth } from '../services/auth';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword {
  isloading: boolean = false;
  flag: boolean = true;
  step: number = 1;
  private readonly auth = inject(Auth);
  private readonly cookieService = inject(CookieService);
  private readonly router = inject(Router);
  private readonly toastrService = inject(ToastrService);
  emailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  codeForm: FormGroup = new FormGroup({
    resetCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{4,}$/),
    ]),
  });
  resetForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/),
    ]),
  });

  VerifyUserEmail(): void {
    if (this.emailForm.valid) {
      console.log(this.emailForm.value.email);
      this.auth.VerifyEmail(this.emailForm.value).subscribe({
        next: (res) => {
          this.toastrService.success(res.message);
          this.step = 2;
          this.resetForm.value.email = this.emailForm.value.email;
          console.log(this.resetForm.value.email);
        },
      });
    } else {
      this.emailForm.markAllAsTouched();
    }
  }
  VerifyUserCode(): void {
    if (this.codeForm.valid) {
      this.auth.VerifyResetCode(this.codeForm.value).subscribe({
        next: (res) => {
          if (res.status === 'Success') {
            this.toastrService.success('Reset Code is Correct');
          }
          this.step = 3;
        },
      });
    } else {
      this.emailForm.markAllAsTouched();
    }
  }
  VerifyUserNewPass(): void {
    this.resetForm.value.email = this.emailForm.value.email;
    if (this.resetForm.valid) {
      this.auth.ResetPassword(this.resetForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.toastrService.success('Password Updated Successfully!');
          this.router.navigate(['/login']);
        },
      });
    } else {
      this.emailForm.markAllAsTouched();
    }
  }
}
