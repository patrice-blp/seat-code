import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {getVehiclesTypes} from "../../../../core/const/const";

const urlPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './vehicle-management.component.html',
  styleUrls: ['./vehicle-management.component.scss']
})
export class VehicleManagementComponent implements OnInit {
  types = getVehiclesTypes();
  vehicleForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VehicleManagementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  get getImage() {
    return this.vehicleForm.get('image')?.value;
  }

  get isValidUrl() {
    const imageValue = this.vehicleForm.get("image")?.value;
    if (!imageValue) {
      return false;
    }

    try {
      return Boolean(new URL(imageValue));
    }
    catch(e){
      return false;
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.vehicleForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      type: new FormControl("car", [Validators.required]),
      price: new FormControl(0, [
        Validators.required,
        Validators.min(1),
        Validators.maxLength(2),
      ]),
      seats: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(5),
      ]),
      image: new FormControl("", [
        Validators.pattern(urlPattern),
        Validators.required,
      ]),

      location: new FormGroup({
        place: new FormControl("", [Validators.required, Validators.minLength(1)]),
        city: new FormControl("", [Validators.required, Validators.minLength(1)]),
        coordinates: new FormGroup({
          long: new FormControl("", [
            Validators.required,
            Validators.pattern(/^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/),
          ]),
          lat: new FormControl("", [
            Validators.required,
            Validators.pattern(/^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/),
          ]),
        })
      }),
    });
  }
}
