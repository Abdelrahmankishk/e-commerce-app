import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  imports: [Navbar,RouterOutlet],
  templateUrl: './blank-layout.html',
  styleUrl: './blank-layout.css'
})
export class BlankLayout {

}
