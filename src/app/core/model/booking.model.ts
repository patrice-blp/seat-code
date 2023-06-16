import {CoordinatesModel} from "./coordinates.model";

export interface BookingModel {
  id: number;
  vehicleId: number;
  fullName: string;
  coordinates?: CoordinatesModel;
}
