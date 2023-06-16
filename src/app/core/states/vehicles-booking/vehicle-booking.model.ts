import {BookingModel} from "../../model/booking.model";

export interface VehicleBooking extends BookingModel {}

export function createVehicleBooking(params: Partial<VehicleBooking>) {
  return {} as VehicleBooking;
}
