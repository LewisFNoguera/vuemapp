import { ActionTree } from "vuex";
import { PlacesState } from "./map-state";
import { StateInterface } from "../index";
import { searchApi } from "@/api";
import { PlaceResponse, Feature } from "@/interfaces/places";

const actions: ActionTree<PlacesState, StateInterface> = {
  getLocation({ commit }) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        commit("setLgnLat", {
          lng: coords.longitude,
          lat: coords.latitude,
        }),
      (e) => {
        throw new Error("No gelocalizado");
      }
    );
  },
  async searchPlacesByTerm(
    { commit, state },
    query: string
  ): Promise<Feature[]> {
    if (query.length === 0) {
      commit("setPlaces", []);
      return [];
    }

    if (!state.userLocation) {
      throw new Error("No hay ubicación del usuario.");
    }

    commit("setIsLoadingPlaces");

    const res = await searchApi.get<PlaceResponse>(
      encodeURIComponent(query) + ".json",
      {
        params: {
          proximity: state.userLocation?.join(","),
        },
      }
    );

    commit("setPlaces", res.data.features);

    return res.data.features;
  },
};

export default actions;
