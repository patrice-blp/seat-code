import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";

import {VehicleManagementComponent} from "./vehicle-management.component";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('VehicleManagementComponent', () => {
  let component: VehicleManagementComponent;
  let fixture: ComponentFixture<VehicleManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatInputModule, MatSelectModule, ReactiveFormsModule, MatDialogModule, NoopAnimationsModule],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} }],
      declarations: [VehicleManagementComponent],
    });
    fixture = TestBed.createComponent(VehicleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
