import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSelectChange} from "@angular/material/select";
import {FormControl} from "@angular/forms";
import {Subscription} from "rxjs";

import {VehiclesQuery} from "../../../../core/states/vehicles/vehicles.query";
import {VehiclesService} from "../../../../core/states/vehicles/vehicles.service";
import {MapMarker} from "../../../../core/components/maps/maps.model";
import {BookingsService} from "../../../../core/states/bookings/bookings.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {
  constructor(
    private readonly vehiclesQuery: VehiclesQuery,
    private readonly vehiclesService: VehiclesService,
    private readonly bookingsService: BookingsService,
  ) {}

  vehiclesSubscription$: Subscription;
  mapMarkers: MapMarker[] = [];

  filterForm = new FormControl('');
  filterList: { value: string; name: string; }[] = [];

  onFilterChange({ value }: MatSelectChange) {
    const request$ = this.vehiclesService.getVehiclesByType(value).subscribe((dd) => {
      request$ && request$.unsubscribe();
    });
  }

  onMarkerClick(id: number) {
    this.bookingsService.get(id).subscribe();
  }

  ngOnInit() {
    this.vehiclesService.get().subscribe();
    this.vehiclesSubscription$ = this.vehiclesQuery.selectAll().subscribe((vehicles) => {
      this.mapMarkers = vehicles.map(({ location, name, ...vehicle }) => ({
        title: name,
        coordinates: {
          lat: location.coordinates.lat,
          lng: location.coordinates.long
        },
        data: {
          ...vehicle,
          city: location.city,
          place: location.place
        },
      }));

      const vehiclesNames = {
        car: "Car",
        electric_scooter: "Scooter",
        motorcycle: "Motor cycle",
      };

      if (!this.filterList.length) {
        const filters = vehicles.map(({ type }) => type);
        this.filterList = [...new Set(filters)]
          .map((type) => ({ value: type, name: vehiclesNames[type] }));
      }
    });
  }

  ngOnDestroy() {
    this.vehiclesSubscription$.unsubscribe();
  }
}