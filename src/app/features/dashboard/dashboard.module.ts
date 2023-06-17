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
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    DashboardComponent,
    CatalogueComponent,
    AddVehicleComponent,
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
  ]
})
export class DashboardModule { }
