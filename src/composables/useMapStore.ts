import { Feature } from "@/interfaces/places";
import { StateInterface } from "@/store";
import { computed } from "vue";
import { useStore } from "vuex";

export const useMapStore = () => {
  const store = useStore<StateInterface>();
  return {
    map: computed(() => store.state.map.map),
    distance: computed(() => store.state.map.distance),
    duration: computed(() => store.state.map.duration),
    setMap: (map: mapboxgl.Map) => store.commit("map/saveMap", map),
    isMapReady: computed(() => store.getters["map/isMapReady"]),
    setPlaceMarkers: (places: Feature[]) =>
      store.commit("map/setPlaceMarkers", places),
  };
};
