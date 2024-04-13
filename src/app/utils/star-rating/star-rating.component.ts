import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() maxRating: number = 5; // Maximum number of stars
  @Input() currentRating: number = 0; // Current rating
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>(); // Event emitter for when a star is clicked

  // Create an array with numbers from 1 to maxRating
  get ratingsArray(): number[] {
    return Array(this.maxRating).fill(0).map((x, i) => i + 1);
  }

  rate(rating: number): void {
    this.currentRating = rating;
    this.ratingClicked.emit(rating);
  }
}
