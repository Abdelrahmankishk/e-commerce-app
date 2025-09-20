import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-main-slider',
  imports: [CarouselModule ],
  templateUrl: './main-slider.html',
  styleUrl: './main-slider.css'
})
export class MainSlider {
 customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    autoplay: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
}
