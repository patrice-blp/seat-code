import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {MatButtonModule} from "@angular/material/button";

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule, MatIconModule, RouterModule, RouterTestingModule, MatButtonModule],
      declarations: [NavbarComponent]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
