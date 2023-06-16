import {Vehicle, VehicleType} from "../../model/vehicle.model";

type MarkerPlace = Pick<Vehicle["location"], "place" | "city">;
export type MapMarker = {
  title: string;
  coordinates: google.maps.LatLngLiteral;
  data: Omit<Vehicle, "location" | "name"> & MarkerPlace
}

export type MapIcon = VehicleType;
