import { Feature } from "@/interfaces/places";

export interface PlacesState {
  isLoadingPlaces: boolean;
  isLoading: boolean;
  userLocation?: [number, number]; //lgn, lat Mapbox
  places: Feature[];
}

function state(): PlacesState {
  return {
    isLoading: true,
    isLoadingPlaces: false,
    userLocation: undefined,
    places: [],
  };
}

export default state;
