import { Component, inject, OnDestroy } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../services/auth';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnDestroy{
  
  private readonly auth = inject(Auth)
  private readonly router = inject(Router)
  private readonly cookieService = inject(CookieService)
  isloading : boolean = false
  intervalId : any
  errmsg : string = ""
  succmsg : string = ""
  flag : boolean = true

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  loginForm :FormGroup = new FormGroup({
    email: new FormControl( '',[Validators.required, Validators.email] ),
    password: new FormControl( '',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)]),
  });

  submit(): void{
    if(this.loginForm.valid){
      this.isloading = true
      this.auth.loginForm(this.loginForm.value).subscribe({
        next:(res)=>{
          if(res.message === 'success'){
            this.cookieService.set('token',res.token)
            this.succmsg = "Logged in Successfully"
            this.intervalId = setInterval(()=>{
              this.router.navigate(['/home'])
            },1500)
            
          }
        }
        ,error:(err)=>{
          this.isloading = false
          this.errmsg = err.error.message
        }
      })
  }else{
    this.loginForm.markAllAsTouched()
  }
  
}

}
