import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './../../core/services/flowbite.service';
import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../core/auth/services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
constructor(private FlowbiteService: FlowbiteService) {}

private readonly auth = inject(Auth)

 @Input({required:true}) isLogin!: boolean
  ngOnInit(): void {
    this.FlowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });}

    LogOut():void{
      this.auth.logOut()
    }
}
