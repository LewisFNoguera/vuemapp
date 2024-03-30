import { createStore } from "vuex";

import placesModule from "./places";
import { PlacesState } from "./places/map-state";
import mapModule from "./map";
import { MapState } from "./map/map-state";

export interface StateInterface {
  places: PlacesState;
  map: MapState;
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule,
  },
});
