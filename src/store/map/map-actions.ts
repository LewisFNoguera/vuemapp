import { ActionTree } from "vuex";
import { MapState } from "./map-state";
import { StateInterface } from "../index";

const actions: ActionTree<MapState, StateInterface> = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  },
};

export default actions;
