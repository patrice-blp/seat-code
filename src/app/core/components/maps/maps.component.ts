import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {GoogleMapsModule, MapInfoWindow, MapMarker as BaseMapMarker} from "@angular/google-maps";
import {HttpClient, HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";

import {GOOGLE_MAPS_API_KEY} from "../../const/google-maps.const";
import {MapIcon, MapMarker} from "./maps.model";
import {MapInfoWindowComponent} from "../map-info-window/map-info-window.component";

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
    MapInfoWindowComponent,
  ],
})
export class MapsComponent {
  apiLoaded: Observable<boolean>;
  itemMarker: MapMarker;

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  @Input() markers: MapMarker[] = [];
  @Input() markerDetails: any;
  @Output() markerClick = new EventEmitter<number>();

  zoom = 12.7;
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };

  options: google.maps.MapOptions = {
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    draggableCursor: "",
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "landscape",
        stylers: [{ visibility: "off" }],
      },
    ]
  };

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  get centerPoint() {
    const bounds = new google.maps.LatLngBounds();
    this.markers.forEach(function (element) {
      bounds.extend(element.coordinates)
    });

    return bounds.getCenter();
  }

  openInfoWindow(marker: BaseMapMarker, itemMarker: MapMarker) {
    if (itemMarker.data.type !== "user_position") {
      this.itemMarker = itemMarker;
      this.infoWindow.open(marker);
      this.markerClick.emit(itemMarker.data.id);
    }
  }

  mapIcon(type: MapIcon) {
    const icons = {
      car: "car.png",
      motorcycle: "moped.png",
      electric_scooter: "scooter.png",
      user_position: "user-location.png",
    };

    const icon = icons[type] ?? icons.car;
    return `/assets/${icon}`;
  }
}
