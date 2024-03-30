import { Module } from "vuex";
import { StateInterface } from "../index";

import state, { PlacesState } from "./map-state";
import actions from "./map-actions";
import getters from "./map-getters";
import mutations from "./map-mutations";

const placesModule: Module<PlacesState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default placesModule;
