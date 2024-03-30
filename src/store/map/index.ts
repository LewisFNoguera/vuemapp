import { Module } from "vuex";
import { StateInterface } from "../index";

import state, { MapState } from "./map-state";
import actions from "./map-actions";
import getters from "./map-getters";
import mutations from "./map-mutations";

const mapModule: Module<MapState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default mapModule;
