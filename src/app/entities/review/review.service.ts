import { Injectable } from '@angular/core';
// import { Firestore, collection, addDoc, Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  addReview(review: { rating: number; comment: string }) {
    console.log('review :>> ', review);
  }
}
