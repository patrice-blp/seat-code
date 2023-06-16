import { Injectable } from "@angular/core";
import {Store, StoreConfig, ID} from "@datorama/akita";

import {BookingModel} from "../../model/booking.model";

export interface BookingsState {
  [key: ID]: Partial<BookingModel>;
}

export function createInitialState(): BookingsState {
  return {};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'bookings' })
export class BookingsStore extends Store<BookingsState> {
  constructor() {
    super(createInitialState());
  }
}
