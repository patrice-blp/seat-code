import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {GoogleMapsModule, } from "@angular/google-maps";
import {HttpClient, HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";

const GOOGLE_MAP_API_KEY = "googleMaps_api_key";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
})
export class MapsComponent {
  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  options: google.maps.MapOptions = {
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
  };

  addMarker(event: google.maps.MapMouseEvent) {
    event.latLng && this.markerPositions.push(event.latLng.toJSON());
  }
}
