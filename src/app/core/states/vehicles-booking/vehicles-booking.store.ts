import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { VehicleBooking } from './vehicle-booking.model';

export interface VehiclesBookingState extends EntityState<VehicleBooking> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'vehicles_booking' })
export class VehiclesBookingStore extends EntityStore<VehiclesBookingState, any> {
  constructor() {
    super();
  }

}
