export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number]; //lgn, lat Mapbox
}

function state(): PlacesState {
  return {
    isLoading: true,
    userLocation: undefined,
  };
}

export default state;
