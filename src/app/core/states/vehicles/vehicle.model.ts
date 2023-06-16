import {Vehicle as BaseVehicle} from "../../model/vehicle.model";

export interface Vehicle extends BaseVehicle{}

export function createVehicle(params: Partial<Vehicle>) {
  return {} as Vehicle;
}
