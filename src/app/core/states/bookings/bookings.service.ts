import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {catchError, of, tap} from "rxjs";

import {BookingsStore} from "./bookings.store";
import {BookingModel} from "../../model/booking.model";

@Injectable({ providedIn: 'root' })
export class BookingsService {
  constructor(private bookingsStore: BookingsStore, private http: HttpClient) {
  }

  get(id: number) {
    return this.http.get<BookingModel>(`@clientApi/reservations/${id}`)
      .pipe(
        tap((entity) => {
          this.bookingsStore.update(state => ({ ...state, [id]: entity }));
        }),
        catchError(() => {
          this.bookingsStore.update({[id]: {}});
          return of(false);
        })
      )
  }
}
