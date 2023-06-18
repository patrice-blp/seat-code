import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {NG_ENTITY_SERVICE_CONFIG} from "@datorama/akita-ng-entity-service";

import { CatalogueComponent } from './catalogue.component';
import {SnackbarService} from "../../../../core/services/snackbar.service";

describe('CatalogueComponent', () => {
  let component: CatalogueComponent;
  let fixture: ComponentFixture<CatalogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatInputModule,
        NoopAnimationsModule,
      ],
      providers: [
        MatSnackBar,
        SnackbarService,
        {
          provide: NG_ENTITY_SERVICE_CONFIG,
          useValue: {
            baseUrl: 'https://localhost:3000'
          }
        }
      ],
      declarations: [CatalogueComponent]
    });
    fixture = TestBed.createComponent(CatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
