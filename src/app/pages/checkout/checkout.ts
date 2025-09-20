import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartServ } from '../cart/services/cart-serv';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly cartServ = inject(CartServ);
  id!: string | null;
  CheckOutForm!: FormGroup;
  isloading: boolean = false;
  ngOnInit(): void {
    this.StartForm();
    this.GetId();
  }
  StartForm() {
    this.CheckOutForm = this.formBuilder.group({
      details: [null, [Validators.required]],
      phone: [
        null,
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
      ],
      city: [null, [Validators.required]],
    });
  }
  GetId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (idUrl) => {
        this.id = idUrl.get('id');
        console.log(this.id);
      },
    });
  }
  submitForm() {
    if (this.CheckOutForm.valid) {
      console.log(this.CheckOutForm.value);
      this.isloading = true;
      this.cartServ.CheckoutVisa(this.id, this.CheckOutForm.value).subscribe({
        next: (res) => {
          if (res.status === 'success') {
            window.open(res.session.url, '_self');
          }
        },
      });
    } else {
      this.CheckOutForm.markAllAsTouched();
    }
  }
}
