import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatTabsModule} from "@angular/material/tabs";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    DashboardComponent,
    CatalogueComponent
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
  ]
})
export class DashboardModule { }
