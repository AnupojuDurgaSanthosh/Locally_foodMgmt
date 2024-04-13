// import { Component, OnInit } from '@angular/core';

// declare const google: any;

// @Component({
//   selector: 'app-add-restaurent',
//   templateUrl: './add-restaurent.component.html',
//   styleUrls: ['./add-restaurent.component.scss']
// })
// export class AddRestaurentComponent implements OnInit  {
//   map: any;
//   marker: any;

//   constructor() { }
//   ngOnInit(): void {
//     this.initMap();
//   }
//   initMap(): void {
//     if (typeof google === 'undefined') {
//       // Google Maps API hasn't loaded yet, wait and retry
//       setTimeout(() => this.initMap(), 100);
//     } else {
//       // Google Maps API is loaded, proceed with initialization
//       this.map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: 0, lng: 0 },
//         zoom: 15
//       });
  
//       this.marker = new google.maps.Marker({
//         position: { lat: 0, lng: 0 },
//         map: this.map,
//         draggable: true
//       });
  
//       google.maps.event.addListener(this.marker, 'dragend', (event: any) => {
//         this.marker.setPosition(event.latLng);
//       });
//     }
//   }
  

//   onLocationChange(): void {
//     // You can handle the location change event here
//     console.log('Location changed:', this.marker.getPosition());
//   }
// }
import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.scss']
})
export class AddRestaurentComponent implements OnInit, AfterViewInit {
  map: any;
  marker: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('Map element not found.');
      return;
    }

    this.map = new google.maps.Map(mapElement, {
      center: { lat: 0, lng: 0 },
      zoom: 15
    });

    this.marker = new google.maps.Marker({
      position: { lat: 0, lng: 0 },
      map: this.map,
      draggable: true
    });

    google.maps.event.addListener(this.marker, 'dragend', (event: any) => {
      this.marker.setPosition(event.latLng);
    });
  }

  onLocationChange(): void {
    // You can handle the location change event here
    console.log('Location changed:', this.marker.getPosition());
  }
}
