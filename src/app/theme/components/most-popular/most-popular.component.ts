import { Component } from '@angular/core';
@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent {
  onRatingClicked(rating: number) {
    // Implement your logic here, for example, you can log the rating
    console.log('Rating clicked:', rating);
  }
}
