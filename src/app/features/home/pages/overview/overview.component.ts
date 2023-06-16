import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {VehiclesQuery} from "../../../../core/states/vehicles/vehicles.query";
import {VehiclesService} from "../../../../core/states/vehicles/vehicles.service";
import {MapMarker} from "../../../../core/components/maps/maps.model";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {
  constructor(
    private readonly vehiclesQuery: VehiclesQuery,
    private readonly vehiclesService: VehiclesService
  ) {}

  vehiclesSubscription$: Subscription;
  mapMarkers: MapMarker[] = [];

  ngOnInit() {
    this.vehiclesService.get().subscribe();
    this.vehiclesSubscription$ = this.vehiclesQuery.selectAll().subscribe((vehicles) => {
      const points: MapMarker[] = vehicles.map((vehicle) => ({
        title: vehicle.name,
        coordinates: {
          lat: vehicle.location.coordinates.lat,
          lng: vehicle.location.coordinates.long
        },
        data: {
          image: vehicle.image,
          description: vehicle.description,
          price: vehicle.price,
          seats: vehicle.seats,
          city: vehicle.location.city,
          place: vehicle.location.place
        },
      }));
      this.mapMarkers.push(...points);
    })
  }

  ngOnDestroy() {
    this.vehiclesSubscription$.unsubscribe();
  }
}
