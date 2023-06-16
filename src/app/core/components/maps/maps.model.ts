import {Vehicle} from "../../states/vehicles/vehicle.model";

type MarkerPlace = Pick<Vehicle["location"], "place" | "city">;
export type MapMarker = {
  title: string;
  coordinates: google.maps.LatLngLiteral;
  data: Pick<Vehicle, "image" | "price" | "seats" | "description"> & MarkerPlace
}
