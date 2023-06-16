import { Injectable } from '@angular/core';
import {ID, Query} from '@datorama/akita';
import {BookingsState, BookingsStore} from "./bookings.store";

@Injectable({ providedIn: 'root' })
export class BookingsQuery extends Query<BookingsState> {
  constructor(store: BookingsStore) {
    super(store);
  }

  selectOne(id: ID) {
    return this.select(state => {
      return state[id] ?? {}
    });
  }
}
