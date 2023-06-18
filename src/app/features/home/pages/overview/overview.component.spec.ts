import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NG_ENTITY_SERVICE_CONFIG} from "@datorama/akita-ng-entity-service";

import { OverviewComponent } from './overview.component';
import {MapsComponent} from "../../../../core/components/maps/maps.component";

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        MapsComponent,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
      providers: [
        {
          provide: NG_ENTITY_SERVICE_CONFIG,
          useValue: {
            baseUrl: 'https://localhost:3000'
          }
        }
      ],
      declarations: [OverviewComponent]
    });
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
