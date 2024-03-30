// import { useMapStore, usePlacesStore } from "@/composables";
import { defineComponent, ref } from "vue";
// import Mapboxgl from "mapbox-gl";

export default defineComponent({
  name: "SearchResultsController",
  setup() {
    const open = ref(true);
    return {
      open,
    };
  },
});
