import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

import { BookingModalComponent } from './booking-modal.component';

describe('BookingModalComponent', () => {
  let component: BookingModalComponent;
  let fixture: ComponentFixture<BookingModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} }],
    });
    fixture = TestBed.createComponent(BookingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
