import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {BookSubjectPayload} from "../../subject/book.subject";
import {MatChipsModule} from "@angular/material/chips";

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatChipsModule
  ]
})
export class BookingModalComponent {
  fullName: string;

  constructor(
    public dialogRef: MatDialogRef<BookingModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookSubjectPayload,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onBooking() {
    this.dialogRef.close({ fullName: this.fullName, vehicleId: this.data?.vehicleId });
  }
}
