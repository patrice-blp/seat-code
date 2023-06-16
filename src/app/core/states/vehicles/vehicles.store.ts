import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Vehicle } from './vehicle.model';

export interface VehiclesState extends EntityState<Vehicle> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'vehicles' })
export class VehiclesStore extends EntityStore<VehiclesState, any> {
  constructor() {
    super();
  }

}
