import { Component, OnInit } from '@angular/core';
import { GeolocationService } from './geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forecast-app';
  locationMessage = '';

  constructor(private geolocationService: GeolocationService) {}

  ngOnInit() {
    this.geolocationService.getLocation()
      .then(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.locationMessage = `Latitude: ${latitude}, Longitude: ${longitude}`;
      })
      .catch(error => {
        console.error("Error getting location: " + error.message);
        this.locationMessage = "Error getting location";
      });
  }
}
