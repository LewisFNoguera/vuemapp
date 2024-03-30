import { GetterTree } from "vuex";
import { PlacesState } from "./map-state";
import { StateInterface } from "../index";

const getters: GetterTree<PlacesState, StateInterface> = {
  isGeolocationReady(state) {
    return !!state.userLocation;
  },
};

export default getters;
