import { Component, inject, OnInit } from '@angular/core';
import { CategoriesServ } from '../../../../core/services/categories/categories-serv';
import { CategoriesInterface } from '../../../../core/models/categories-interface';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-popular-categories',
  imports: [CarouselModule ],
  templateUrl: './popular-categories.html',
  styleUrl: './popular-categories.css'
})
export class PopularCategories implements OnInit{

  private readonly catogoriesServ = inject(CategoriesServ)
  ngOnInit(): void {
    this.getAllCategoriesData()
  }
  categoriesList:CategoriesInterface[] = []

   CategoriesOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    dots: true,
    margin:10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
  
  getAllCategoriesData() {
    this.catogoriesServ.getAllCategories().subscribe({
      next: (res) => {
        this.categoriesList = res.data 
      }
      , error: (err)=>{
        console.log(err);
        
      }
    })
  }
}
