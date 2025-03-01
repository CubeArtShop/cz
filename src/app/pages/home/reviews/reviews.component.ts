import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { reviewsJSON } from '../../../entities/review/review.db';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule, CarouselModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  isLoading = false;
  errorMessage = '';

  reviews = reviewsJSON;

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
      0: { items: 1, nav: false, margin: 0 },
      400: { items: 2, nav: false, margin: 0 },
      740: { items: 3, nav: false, margin: 0 },
      940: { items: 4, nav: false, mouseDrag: true, touchDrag: true },
      1024: { items: 6, nav: false },
    },
    nav: true,
  };

  trackById(index: number, review: any): string {
    return `original-${review.id}-${index}`;
  }

  getRatingStars(rating: number) {
    if (!rating) return '';
    return (
      '&#10084;&#65039;'.repeat(rating) +
      '🖤'.repeat(5 - rating)
    );
  }
}
