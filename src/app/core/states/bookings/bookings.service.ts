import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {catchError, lastValueFrom, of, tap} from "rxjs";

import {BookingsStore} from "./bookings.store";
import {BookingModel} from "../../model/booking.model";

@Injectable({ providedIn: 'root' })
export class BookingsService {
  constructor(private bookingsStore: BookingsStore, private http: HttpClient) {
  }

  get(id: number) {
    return this.http.get<BookingModel[]>(`@clientApi/reservations`, { params: { vehicleId: id } })
      .pipe(
        tap((entity) => {
          this.bookingsStore.update(state => ({ ...state, [id]: entity[0] }));
        }),
        catchError(() => {
          this.bookingsStore.update({[id]: {}});
          return of(false);
        })
      )
  }

  add(id: number, fullName: string) {
    const date = new Date().toISOString();
    const source$ = this.http.post<any>("@clientApi/reservations/", { vehicleId: id, fullName, date });
    return lastValueFrom(source$);
  }
}
