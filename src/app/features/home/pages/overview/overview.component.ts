import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSelectChange} from "@angular/material/select";
import {MatDialog} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import { Subscription} from "rxjs";

import {VehiclesQuery} from "../../../../core/states/vehicles/vehicles.query";
import {VehiclesService} from "../../../../core/states/vehicles/vehicles.service";
import {MapMarker} from "../../../../core/components/maps/maps.model";
import {BookingsService} from "../../../../core/states/bookings/bookings.service";
import {bookSubject, BookSubjectPayload} from "../../../../core/subject/book.subject";
import {BookingModalComponent} from "../../../../core/components/booking-modal/booking-modal.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {USER_LOCATION} from "../../../../core/const/user-location.const";
import {VEHICLES_NAMES} from "../../../../core/const/const";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {
  bookSubjectSubscription$: Subscription;
  vehiclesSubscription$: Subscription;
  mapMarkers: MapMarker[] = [];

  filterForm = new FormControl('');
  filterList: { value: string; name: string; }[] = [];

  constructor(
    public dialog: MatDialog,
    private readonly vehiclesQuery: VehiclesQuery,
    private readonly vehiclesService: VehiclesService,
    private readonly bookingsService: BookingsService,
    private readonly snackBar: MatSnackBar
  ) {}

  onFilterChange({ value }: MatSelectChange) {
    const request$ = this.vehiclesService.getVehiclesByType(value).subscribe(() => {
      request$ && request$.unsubscribe();
    });
  }

  onMarkerClick(id: number) {
    this.bookingsService.get(id).subscribe();
  }

  openDialog(params: BookSubjectPayload) {
    const dialogRef = this.dialog.open(BookingModalComponent, {
      data: params,
      width: "600px",
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        const { vehicleId, fullName } = result;
        try {
          await this.bookingsService.add(vehicleId, fullName);
          this.onMarkerClick(vehicleId);
          this.snackBar.open("The booking has been made", "Close", {
            horizontalPosition: "right",
            verticalPosition: "bottom",
            politeness: "off",
          });
        } catch (e) {
          this.snackBar.open("The reservation has not been made", "Close", {
            horizontalPosition: "right",
            verticalPosition: "bottom",
            politeness: "off",
          });
        }
      }
    });
  }

  ngOnInit() {
    this.bookSubjectSubscription$ = bookSubject.subscribe(value => {
      this.openDialog(value);
    });

    this.vehiclesService.get().subscribe();
    this.vehiclesSubscription$ = this.vehiclesQuery.selectAll().subscribe((vehicles) => {
      const markers = vehicles.map(({ location, name, ...vehicle }) => ({
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

      markers.push({
        title: "You",
        coordinates: {
          lat: USER_LOCATION.lat,
          lng: USER_LOCATION.long,
        },
        data: {
          type: "user_position",
        } as any,
      });

      this.mapMarkers = markers;

      if (!this.filterList.length) {
        const filters = vehicles.map(({ type }) => type);
        this.filterList = [...new Set(filters)]
          .map((type) => ({ value: type, name: VEHICLES_NAMES[type] }));
      }
    });
  }

  ngOnDestroy() {
    this.vehiclesSubscription$.unsubscribe();
  }
}
