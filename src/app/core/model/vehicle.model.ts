import {CoordinatesModel} from "./coordinates.model";

type Location = {
  place: string
  city: string
  coordinates: CoordinatesModel
}

export type VehicleType = "car" | "motorcycle" | "electric_scooter" | "user_position"

export interface Vehicle {
  id: number
  name: string
  description: string
  image: string
  type: VehicleType
  price: number
  seats: number
  location: Location
}
