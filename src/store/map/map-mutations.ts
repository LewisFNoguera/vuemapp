import { MutationTree } from "vuex";
import { MapState } from "./map-state";
import { Feature } from "../../interfaces/places";
import Mapboxgl from "mapbox-gl";

const mutation: MutationTree<MapState> = {
  someMutation(/* state: ExampleStateInterface */) {
    // a line to prevent linter errors
  },
  saveMap(state, map: mapboxgl.Map) {
    state.map = map;
  },
  setPlaceMarkers(state, places: Feature[]) {
    state.markers.forEach((marker) => marker.remove());
    state.markers = [];

    if (!state.map) return;
    for (const place of places) {
      const [lng, lat] = place.center;
      const position = [lng, lat];
      const popup = new Mapboxgl.Popup({
        offset: [0, -20],
      }).setLngLat(position).setHTML(`
        <h2> Hola mundo </h2>`);

      const marker = new Mapboxgl.Marker()
        .setLngLat(position)
        .setPopup(popup)
        .addTo(state.map);

      state.markers.push(marker);
    }
  },
};

export default mutation;
