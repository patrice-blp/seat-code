import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDetailsComponent } from './report-details.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";

describe('ReportDetailsComponent', () => {
  let component: ReportDetailsComponent;
  let fixture: ComponentFixture<ReportDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, MatDividerModule],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} }],
      declarations: [ReportDetailsComponent]
    });
    fixture = TestBed.createComponent(ReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
