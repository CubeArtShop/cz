import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CategoryCarouselComponent } from '../../features/catalog/category-carousel/category-carousel.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewFormComponent } from '../../features/reviews/review-form/review-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    TranslateModule,
    CommonModule,
    CategoryCarouselComponent,
    HowItWorksComponent,
    ReviewsComponent,
    ReviewFormComponent
  ],
})
export class HomeComponent {
  videoLoaded = false;

  // This method is triggered when the video is loaded
  onVideoLoaded() {
    this.videoLoaded = true;
  }
}
