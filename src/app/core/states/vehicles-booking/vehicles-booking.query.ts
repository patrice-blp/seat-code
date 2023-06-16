import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { VehiclesBookingStore, VehiclesBookingState } from './vehicles-booking.store';

@Injectable({ providedIn: 'root' })
export class VehiclesBookingQuery extends QueryEntity<VehiclesBookingState> {

  constructor(store: VehiclesBookingStore) {
    super(store);
  }

}
