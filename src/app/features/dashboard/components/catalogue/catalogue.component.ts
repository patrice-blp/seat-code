import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {lastValueFrom} from "rxjs";

import {VehiclesQuery} from "../../../../core/states/vehicles/vehicles.query";
import {VehiclesService} from "../../../../core/states/vehicles/vehicles.service";
import {VEHICLES_NAMES} from "../../../../core/const/const";
import {Vehicle, VehicleType} from "../../../../core/model/vehicle.model";
import {SnackbarService} from "../../../../core/services/snackbar.service";
import {MatDialog} from "@angular/material/dialog";
import {AddVehicleComponent} from "../add-vehicle/add-vehicle.component";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ["image", "id", "name", "type", "price", "seats", "actions"];
  dataSource = this.vehiclesQuery.selectAll();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private readonly snackbarService: SnackbarService,
    private readonly vehiclesQuery: VehiclesQuery,
    private readonly vehiclesService: VehiclesService,
    public dialog: MatDialog
  ) {}

  vehicleName(type: VehicleType) {
    return VEHICLES_NAMES[type];
  }

  openDialogForm(): void {
    const dialogRef = this.dialog.open(AddVehicleComponent, {
      data: {},
      width: "700px"
    });

    dialogRef
      .afterClosed()
      .subscribe(async (result) => {
        if (result?.name) {
          try {
            await lastValueFrom(this.vehiclesService.add(result));
            this.snackbarService.showMessage("New vehicle has been created");
          } catch (e) {
            this.snackbarService.showMessage("Vehicle couldn't been created");
          }
        }
      });
  }

  async deleteElement(item: Vehicle) {
    if(confirm(`You are about to remove "${item.name}" from the catalog`)) {
      try {
        await lastValueFrom(this.vehiclesService.delete(item.id));
        this.snackbarService.showMessage("Vehicle has been deleted");
      } catch (e) {
        this.snackbarService.showMessage("Vehicle couldn't been deleted");
      }
    }
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
