import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {VehiclesQuery} from "../../../../core/states/vehicles/vehicles.query";
import {VehiclesService} from "../../../../core/states/vehicles/vehicles.service";
import {VEHICLES_NAMES} from "../../../../core/const/const";
import {VehicleType} from "../../../../core/model/vehicle.model";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ["image", "id", "name", "type", "price", "seats"];
  dataSource = this.vehiclesQuery.selectAll();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private readonly vehiclesQuery: VehiclesQuery,
    private readonly vehiclesService: VehiclesService) {}

  vehicleName(type: VehicleType) {
    return VEHICLES_NAMES[type];
  }

  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    //
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.vehiclesService.get().subscribe();
  }
}
