import { MutationTree } from "vuex";
import { PlacesState } from "./map-state";
import { Feature } from "../../interfaces/places";

const mutation: MutationTree<PlacesState> = {
  setLgnLat(state: PlacesState, { lng, lat }: { lng: number; lat: number }) {
    state.userLocation = [lng, lat];
  },
  setIsLoadingPlaces(state) {
    state.isLoadingPlaces = true;
  },
  setPlaces(state: PlacesState, suggestions: Feature[]) {
    state.places = suggestions;
    state.isLoadingPlaces = false;
  },
};

export default mutation;
