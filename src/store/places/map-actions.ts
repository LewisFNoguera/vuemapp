import { ActionTree } from "vuex";
import { PlacesState } from "./map-state";
import { StateInterface } from "../index";

const actions: ActionTree<PlacesState, StateInterface> = {
  getLocation({ commit }) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        commit("setLgnLat", {
          lng: coords.longitude,
          lat: coords.latitude,
        }),
      (e) => {
        console.log(e);
        throw new Error("No gelocalizado");
      }
    );
  },
  async searchPlacesByTerm({ commit, state }, query: string) {
    console.log("query", query);
  },
};

export default actions;
