import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class SnackbarService {
  constructor(private readonly snackBar: MatSnackBar) { }

  showMessage(message: string, duration = 5000) {
    this.snackBar.open(message, "Close", {
      horizontalPosition: "right",
      verticalPosition: "bottom",
      politeness: "off",
      duration,
    });
  }
}
