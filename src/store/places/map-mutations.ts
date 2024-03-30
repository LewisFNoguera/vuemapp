import { MutationTree } from "vuex";
import { PlacesState } from "./map-state";

const mutation: MutationTree<PlacesState> = {
  setLgnLat(state: PlacesState, { lng, lat }: { lng: number; lat: number }) {
    state.userLocation = [lng, lat];
  },
};

export default mutation;
