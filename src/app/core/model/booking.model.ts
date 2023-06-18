import {CoordinatesModel} from "./coordinates.model";
import {Vehicle} from "./vehicle.model";

export interface BookingModel {
  id: number;
  vehicleId: number;
  fullName: string;
  date: string;
  coordinates?: CoordinatesModel;
  vehicle?: Vehicle;
}
