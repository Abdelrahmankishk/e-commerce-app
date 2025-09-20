import { Product } from './../../core/models/product';

import {
  AfterViewInit,
  Component,
  inject,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MainSlider } from './components/main-slider/main-slider';
import { PopularProducts } from './components/popular-products/popular-products';
import { PopularCategories } from './components/popular-categories/popular-categories';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  imports: [MainSlider, PopularProducts, PopularCategories],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
