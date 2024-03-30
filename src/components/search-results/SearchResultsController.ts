import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "SearchResultsController",
  props: {
    searchTerm: {
      type: String,
    },
  },
  setup(props) {
    const { places, isLoadingPlaces, userLocation } = usePlacesStore();
    const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore();
    const activePlace = ref("");
    const term = ref<string>("");

    watch(places, (newPlaces) => {
      activePlace.value = "";
      setPlaceMarkers(newPlaces);
    });
    watch(
      () => props.searchTerm,
      (newVal) => {
        if (!newVal) {
          term.value = "";
        } else {
          term.value = newVal;
        }
      }
    );
    return {
      places,
      term,
      isLoadingPlaces,
      activePlace,
      onPlaceClicked: (place: Feature) => {
        activePlace.value = place.id;
        const [lng, lat] = place.center;

        map.value?.flyTo({
          center: [lng, lat],
          zoom: 12.5,
          bearing: 130,
          pitch: 0, // Cambiar después para ajustar la elevación
        });
      },
      getRoute: (place: Feature) => {
        if (!userLocation.value) return;
        activePlace.value = place.id;
        const [lng, lat] = place.center;
        const [lngS, latS] = userLocation.value;
        const start: [number, number] = [lngS, latS];
        const end: [number, number] = [lng, lat];

        getRouteBetweenPoints(start, end);
      },
    };
  },
});
