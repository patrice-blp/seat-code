import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";

import { HomeRoutingModule } from './home-routing.module';
import { OverviewComponent } from './pages/overview/overview.component';
import {MapsComponent} from "../../core/components/maps/maps.component";
import {BookingModalComponent} from "../../core/components/booking-modal/booking-modal.component";

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MapsComponent,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BookingModalComponent,
  ]
})
export class HomeModule { }
