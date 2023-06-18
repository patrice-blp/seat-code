import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

import {VehicleBooking} from "../../../../core/states/vehicles-booking/vehicle-booking.model";
import {VEHICLES_NAMES} from "../../../../core/const/const";

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: VehicleBooking,
  ) {}

  get vehicleName() {
    return VEHICLES_NAMES[this.data.vehicle?.type || "car"];
  }
}
