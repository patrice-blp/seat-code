import { Injectable } from '@angular/core';
import {NgEntityService, NgEntityServiceConfig} from '@datorama/akita-ng-entity-service';
import { VehiclesBookingStore, VehiclesBookingState } from './vehicles-booking.store';

@NgEntityServiceConfig({
  resourceName: 'reservations',
})
@Injectable({ providedIn: 'root' })
export class VehiclesBookingService extends NgEntityService<VehiclesBookingState> {

  constructor(store: VehiclesBookingStore) {
    super(store);
  }

  getBookings() {
    return super.get({ params: { _expand: "vehicle" } });
  }

}
