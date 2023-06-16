import {CoordinatesModel} from "../../model/coordinates.model";

export interface VehicleBooking {
  id: number;
  vehicleId: number;
  fullName: string;
  coordinates?: CoordinatesModel;
}

export function createVehicleBooking(params: Partial<VehicleBooking>) {
  return {} as VehicleBooking;
}
