type Location = {
  place: string
  city: string
  coordinates: Coordinates
}

type Coordinates = {
  lat: number
  long: number
}

export interface Vehicle {
  id: number
  name: string
  description: string
  image: string
  type: string
  price: number
  seats: number
  location: Location
}

export function createVehicle(params: Partial<Vehicle>) {
  return {} as Vehicle;
}
