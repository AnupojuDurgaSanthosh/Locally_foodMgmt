import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Locallyfood_mgmt';
  city: string; // Define city property
  state: string; // Define state property
  constructor() { }

  ngOnInit(): void {
      // this.getLocation();
   
      // Check if Geolocation is supported by the browser
      if ("geolocation" in navigator) {
        // Request user's location
        navigator.geolocation.getCurrentPosition((position) => { // Use arrow function to preserve 'this' context
          // Get latitude and longitude coordinates
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
  
          // Call reverse geocoding API to get address details
          var geocodingAPI = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + longitude + "," + latitude + ".json?access_token=pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2lqbmpqazdlMDBsdnRva284cWd3bm11byJ9.V6Hg2oYJwMAxeoR9GEzkAA";
          fetch(geocodingAPI)
            .then(response => response.json())
            .then(data => {
              // Extract city and state from the response
              for (var i = 0; i < data.features.length; i++) {
                var feature = data.features[i];
                if (feature.place_type.includes("place")) {
                  this.city = feature.text; // Assign city to component property
                  console.log( this.city)
                }
                if (feature.place_type.includes("region")) {
                  this.state = feature.text; // Assign state to component property
                  console.log(this.state)
                }
              }
            })
            .catch(error => console.log(error));
          const locationPin = document.querySelector('.location-pin') as HTMLElement;
          const mapContainer = document.querySelector('.map-container') as HTMLElement;
  
          if (locationPin && mapContainer) { // Check if locationPin and mapContainer are not null
            setInterval(() => {
              const randomX = Math.random() * (mapContainer.offsetWidth - locationPin.offsetWidth);
              const randomY = Math.random() * (mapContainer.offsetHeight - locationPin.offsetHeight);
  
              locationPin.style.left = `${randomX}px`;
              locationPin.style.top = `${randomY}px`;
            }, 2000); // Adjust the interval as needed (in milliseconds)
          }
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
  }
  
  }




