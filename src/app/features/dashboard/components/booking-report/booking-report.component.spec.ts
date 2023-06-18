import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NG_ENTITY_SERVICE_CONFIG} from "@datorama/akita-ng-entity-service";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";

import { BookingReportComponent } from './booking-report.component';

describe('BookingReportComponent', () => {
  let component: BookingReportComponent;
  let fixture: ComponentFixture<BookingReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule, MatTableModule],
      declarations: [BookingReportComponent],
      providers: [
        {
          provide: NG_ENTITY_SERVICE_CONFIG,
          useValue: {
            baseUrl: 'https://localhost:3000'
          }
        }
      ]
    });
    fixture = TestBed.createComponent(BookingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
