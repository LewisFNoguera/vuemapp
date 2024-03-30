import { MutationTree } from "vuex";
import { MapState } from "./map-state";

const mutation: MutationTree<MapState> = {
  someMutation(/* state: ExampleStateInterface */) {
    // a line to prevent linter errors
  },
  saveMap(state, map: mapboxgl.Map) {
    state.map = map;
  },
};

export default mutation;
