import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {lastValueFrom} from "rxjs";

import {VehiclesQuery} from "../../../../core/states/vehicles/vehicles.query";
import {VehiclesService} from "../../../../core/states/vehicles/vehicles.service";
import {VEHICLES_NAMES} from "../../../../core/const/const";
import {Vehicle, VehicleType} from "../../../../core/model/vehicle.model";
import {SnackbarService} from "../../../../core/services/snackbar.service";
import {VehicleManagementComponent} from "../vehicle-management/vehicle-management.component";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ["image", "id", "name", "type", "price", "seats", "actions"];
  //dataSource = this.vehiclesQuery.selectAll();
  dataSource = new MatTableDataSource<Vehicle>();

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

  openDialogForm(data?: Vehicle): void {
    const dialogRef = this.dialog.open(VehicleManagementComponent, {
      data: {
        editMode: Boolean(data),
        data,
      },
      width: "700px",
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef
      .afterClosed()
      .subscribe(async ({ editMode, data, id }) => {
        if (data?.name) {
          try {
            let snackbarMessage = "New vehicle has been created";

            if (editMode) {
              snackbarMessage = "Vehicle has been updated";
              await lastValueFrom(this.vehiclesService.update(id, data));
            } else {
              await lastValueFrom(this.vehiclesService.add(data));
            }

            this.snackbarService.showMessage(snackbarMessage);
          } catch (e) {
            let errorMessage = editMode ? "Vehicle couldn't been updated" : "Vehicle couldn't been created";
            this.snackbarService.showMessage(errorMessage);
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
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.vehiclesService.get().subscribe();
    this.vehiclesQuery.selectAll().subscribe((items) => this.dataSource.data = items)
  }
}
