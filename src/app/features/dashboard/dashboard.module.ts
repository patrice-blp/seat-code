import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { VehicleManagementComponent } from './components/vehicle-management/vehicle-management.component';
import {MatSelectModule} from "@angular/material/select";
import { BookingReportComponent } from './components/booking-report/booking-report.component';
import { ReportDetailsComponent } from './components/report-details/report-details.component';
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    DashboardComponent,
    CatalogueComponent,
    VehicleManagementComponent,
    BookingReportComponent,
    ReportDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    DashboardRoutingModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgOptimizedImage,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDividerModule,
  ]
})
export class DashboardModule { }
