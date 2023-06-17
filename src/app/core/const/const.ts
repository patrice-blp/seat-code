import {VehicleType} from "../model/vehicle.model";

export const VEHICLES_API = "http://localhost:3000";
export const VEHICLES_NAMES = {
  car: "Car",
  electric_scooter: "Scooter",
  motorcycle: "Motor cycle",
  user_position: "",
};

export const getVehiclesTypes = () => {
  const types: VehicleType[] = ["car", "motorcycle", "electric_scooter"];
  return types.map((type) => ({
    value: type,
    label: VEHICLES_NAMES[type],
  }));
};
