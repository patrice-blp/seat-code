import {Subject} from "rxjs";
import {Vehicle} from "../model/vehicle.model";

export type BookSubjectPayload = Pick<Vehicle, "name" | "description" | "price" | "seats"> & {
  vehicleId: number;
} | null;

export const bookSubject = new Subject<BookSubjectPayload>();
