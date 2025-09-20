import { Component, inject, OnDestroy } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { group } from 'console';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';
;

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnDestroy{
  private readonly auth = inject(Auth)
  private readonly router = inject(Router)
  isloading : boolean = false
  flag : boolean = true
  flagRE : boolean = true
  msg : string = ""
  succmsg : string = ""
  intervalId : any
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  registerForm :FormGroup = new FormGroup({
    name: new FormControl( '',[Validators.required, Validators.minLength(3), Validators.maxLength(20)] ),
    email: new FormControl( '',[Validators.required, Validators.email] ),
    password: new FormControl( '',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)]),
    rePassword: new FormControl( '',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)]),
    phone: new FormControl( '',[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, {validators: this.confrimPassword} );

  submit(): void{
    console.log(this.registerForm);
    if(this.registerForm.valid){
      this.isloading = true
      
      
      this.auth.registerForm(this.registerForm.value).subscribe({
        next:(res)=>{
          if(res.message === 'success'){
            this.succmsg = "Account is Created Successfully"
            this.intervalId = setInterval(()=>{
              this.router.navigate(['/login'])
            },1500)
            
          }
        }
        ,error:(err)=>{
          this.isloading = false
          this.msg = err.error.message
        }
      })
  }else{
    this.registerForm.setErrors({mismatch:true})
    this.registerForm.markAllAsTouched()
  }
}
  confrimPassword(group: AbstractControl){
    let password = group.get('password')?.value
    let rePassword = group.get('rePassword')?.value

    if(password === rePassword && password != ''){
      return null;
    }else{
      return {mismatch: true
      }
    }
  }

}
