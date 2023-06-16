import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { VehiclesStore, VehiclesState } from './vehicles.store';

@Injectable({ providedIn: 'root' })
export class VehiclesQuery extends QueryEntity<VehiclesState> {

  constructor(store: VehiclesStore) {
    super(store);
  }

}
