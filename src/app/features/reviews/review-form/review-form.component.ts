import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReviewService } from '../../../entities/review/review.service';
import { SanitizeService } from '../../../shared/services/sanitize.service';
import { IReview } from '../../../entities/review/review.model';


@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class ReviewFormComponent {
  reviewForm: FormGroup;
  isSubmitting = false;
  photoPreview: string | null = null;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private reviewService: ReviewService,
    private sanitizeService: SanitizeService
  ) {
    this.reviewForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
      comment: ['', [Validators.required, Validators.minLength(10)]],
      photo: [null]
    });
  }

  setRating(rating: number) {
    this.reviewForm.patchValue({ rating });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        this.photoPreview = e.target?.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  async submitReview() {
    if (this.reviewForm.valid) {
      this.isSubmitting = true;
      const sanitizedComment = this.sanitizeService.sanitizeHtml(this.reviewForm.value.comment).toString();

      let photoUrl = '';
      if (this.selectedFile) {
        photoUrl = await this.uploadPhoto(this.selectedFile);
      }

      const newReview: IReview = {
        id: Date.now().toString(),
        photo: photoUrl,
        name: this.reviewForm.value.name,
        text: sanitizedComment,
        rating: this.reviewForm.value.rating
      };

      // this.reviewService.addReview(newReview)
      //   .then(() => {
      //     alert('Ваш відгук додано!');
      //     this.reviewForm.reset({ name: '', rating: 5, comment: '', photo: null });
      //     this.photoPreview = null;
      //   })
      //   .catch(error => {
      //     console.error('Помилка додавання відгуку:', error);
      //     alert('Помилка. Спробуйте ще раз.');
      //   })
      //   .finally(() => {
      //     this.isSubmitting = false;
      //   });
    }
  }

  async uploadPhoto(file: File): Promise<string> {
    // Логіка завантаження фото в Firebase Storage або інший сервіс
    // Поки що повертаємо фіктивний URL
    return new Promise((resolve) => setTimeout(() => resolve('https://via.placeholder.com/150'), 1000));
  }
}
