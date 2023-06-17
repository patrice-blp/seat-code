import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {MatChipsModule} from "@angular/material/chips";
import {Subscription} from "rxjs";

import {MapMarker} from "../maps/maps.model";
import {BookingsQuery} from "../../states/bookings/bookings.query";
import {BookingModel} from "../../model/booking.model";
import {bookSubject} from "../../subject/book.subject";
import {distanceBetweenCoordinates} from "../../utils/geolocation.util";
import {USER_LOCATION} from "../../const/user-location.const";

@Component({
  selector: 'app-map-info-window',
  templateUrl: './map-info-window.component.html',
  styleUrls: ['./map-info-window.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
  ]
})
export class MapInfoWindowComponent implements OnDestroy, OnChanges {
  bookingInfo: Partial<BookingModel>;
  bookingSubscription$: Subscription;

  @Input() item: MapMarker;

  constructor(private readonly bookingsQuery: BookingsQuery) {
  }

  getDistance(coordinates: google.maps.LatLngLiteral) {
    const { lat, long } = USER_LOCATION;
    return distanceBetweenCoordinates(coordinates.lat, coordinates.lng, lat, long);
  }

  openModal() {
    bookSubject.next({
      vehicleId: this.item.data.id,
      name: this.item.title,
      ...this.item.data
    });
  }

  ngOnDestroy() {
    this.bookingSubscription$?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes["item"].currentValue) {
      this.bookingSubscription$?.unsubscribe();
      this.bookingSubscription$ = this.bookingsQuery.selectOne(this.item.data.id)
        .subscribe((data) => {
          this.bookingInfo = data;
        })
    }
  }
}
