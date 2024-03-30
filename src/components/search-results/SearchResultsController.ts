import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "SearchResultsController",
  setup() {
    const { places, isLoadingPlaces } = usePlacesStore();
    const { map, setPlaceMarkers } = useMapStore();
    const activePlace = ref("");
    watch(places, (newPlaces) => {
      activePlace.value = "";
      setPlaceMarkers(newPlaces);
    });
    return {
      places,
      isLoadingPlaces,
      activePlace,
      onPlaceClicked: (place: Feature) => {
        activePlace.value = place.id;
        const [lng, lat] = place.center;

        map.value?.flyTo({
          center: [lng, lat],
          zoom: 12.5,
          bearing: 130,
          pitch: 75, // Cambiar después para ajustar la elevación
        });
      },
    };
  },
});
