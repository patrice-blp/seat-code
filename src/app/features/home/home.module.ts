import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { OverviewComponent } from './pages/overview/overview.component';
import {MapsComponent} from "../../core/components/maps/maps.component";

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MapsComponent
  ]
})
export class HomeModule { }
