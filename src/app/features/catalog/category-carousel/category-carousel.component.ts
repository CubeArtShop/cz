import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

import { ProductCardComponent } from './../product-card/product-card.component';
import { Category, IProduct } from '../../../entities/product/product.model';
import { ProductService } from '../../../entities/product/product.service';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-carousel',
  imports: [CommonModule, CarouselModule, ProductCardComponent, TranslateModule],
  styleUrl: './category-carousel.component.scss',
  templateUrl: './category-carousel.component.html',
})
export class CategoryCarouselComponent {
  @Input() title: string = '...';
  @Input() category: Category = 'OTHER';

  products: IProduct[] = [];
  sub!: Subscription;

  isLoading = true;
  errorMessage = '';

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 12,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
        nav: false,
        touchDrag: true,
      },
      400: {
        items: 2,
        nav: false,
        touchDrag: true,
      },
      740: {
        items: 3,
        nav: false,
        touchDrag: true,
      },
      940: {
        items: 4,
        nav: true,
        mouseDrag: true,
        touchDrag: true,
      },
      1024: {
        items: 5,
        nav: true,
      },
      1524: {
        items: 6,
        nav: true,
      },
    },
    nav: true,
  };

  constructor(private productService: ProductService) {}


  trackById(index: number, review: any): string {
    return review?.id ? `review-${review.id}-${index}` : `cloned-${index}`;
  }


  getProductsByCategory(category: string) {
    this.sub =  this.productService.getProductsByCategory(category).subscribe((p) => {
      this.products = p;
      this.isLoading = false;
    });
  }

  ngOnInit() {
    this.getProductsByCategory(this.category);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
