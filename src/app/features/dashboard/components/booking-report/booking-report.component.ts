import {Component, OnInit} from '@angular/core';

import {VehiclesBookingQuery} from "../../../../core/states/vehicles-booking/vehicles-booking.query";
import {VehiclesBookingService} from "../../../../core/states/vehicles-booking/vehicles-booking.service";
import {VehicleType} from "../../../../core/model/vehicle.model";
import {VEHICLES_NAMES} from "../../../../core/const/const";

@Component({
  selector: 'app-booking-report',
  templateUrl: './booking-report.component.html',
  styleUrls: ['./booking-report.component.scss']
})
export class BookingReportComponent implements OnInit {
  displayedColumns: string[] = ["id", "fullName", "vehicleName", "vehicleType", "date", "actions"];
  dataSource = this.bookingQuery.selectAll();

  constructor(
    private readonly bookingQuery: VehiclesBookingQuery,
    private readonly bookingService: VehiclesBookingService) {}

  vehicleName(type: VehicleType) {
    return VEHICLES_NAMES[type];
  }

  ngOnInit() {
    this.bookingService.getBookings().subscribe();
  }
}
