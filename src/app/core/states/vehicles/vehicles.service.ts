import { Injectable } from '@angular/core';
import {NgEntityService, NgEntityServiceConfig} from '@datorama/akita-ng-entity-service';
import { VehiclesStore, VehiclesState } from './vehicles.store';

@NgEntityServiceConfig({
  resourceName: 'vehicles',
})
@Injectable({ providedIn: 'root' })
export class VehiclesService extends NgEntityService<VehiclesState> {

  constructor(store: VehiclesStore) {
    super(store);
  }

}
