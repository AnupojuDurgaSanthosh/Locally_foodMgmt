import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-say',
  templateUrl: './customer-say.component.html',
  styleUrls: ['./customer-say.component.scss']
})
export class CustomerSayComponent {
  onRatingClicked(rating: number) {
    // Implement your logic here, for example, you can log the rating
    console.log('Rating clicked:', rating);
  }
}
