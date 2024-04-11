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
  setDurDis(
    state,
    { distance, duration }: { distance: number; duration: number }
  ) {
    let kms = distance / 100;
    kms = Math.round(kms * 100);
    kms /= 100;

    state.distance = kms;
    state.duration = Math.floor(duration / 60);
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
        <h2>${place.place_name}</h2>`);

      const marker = new Mapboxgl.Marker()
        .setLngLat(position)
        .setPopup(popup)
        .addTo(state.map);

      state.markers.push(marker);
    }

    // Clear mapa.
    if (state.map?.getLayer("DirectionsString")) {
      state.map?.removeLayer("DirectionsString");
      state.map?.removeSource("DirectionsString");
      state.distance = undefined;
      state.duration = undefined;
    }
  },
  setRoutePolyline(state, coords: number[][]) {
    if (!coords) return;

    const start = coords[0];

    // Bounds: Puntos de trazado
    const bounds = new Mapboxgl.LngLatBounds(
      [start[0], start[1]],
      [start[0], start[1]]
    );

    for (const coord of coords) {
      const newCoord: [number, number] = [coord[0], coord[1]];
      bounds.extend(newCoord);
    }

    state.map?.fitBounds(bounds, {
      padding: 200,
    });

    const sourceData: mapboxgl.AnySourceData = {
      type: "geojson",
      lineMetrics: true,
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: coords,
            },
          },
        ],
      },
    };
    // Elimina el anterior para crear el nuevo.
    if (state.map?.getLayer("DirectionsString")) {
      state.map?.removeLayer("DirectionsString");
      state.map?.removeSource("DirectionsString");
    }

    state.map?.addSource("DirectionsString", sourceData);

    // EStilos de las Polylines
    state.map?.addLayer({
      id: "DirectionsString",
      type: "line",
      source: "DirectionsString",
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "#e91e63",
        "line-width": 7,
        "line-gradient": [
          "interpolate",
          ["linear"],
          ["line-progress"],
          0,
          "#e91e63",
          1,
          "#4f46e5",
        ],
      },
    });
  },
};

export default mutation;
