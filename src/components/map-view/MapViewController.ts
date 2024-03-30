import { useMapStore, usePlacesStore } from "@/composables";
import { defineComponent, onMounted, ref, watch } from "vue";
import Mapboxgl from "mapbox-gl";

export default defineComponent({
  name: "MapViewController",
  setup() {
    const { isLoading, userLocation, isGeolocationReady } = usePlacesStore();
    const { setMap } = useMapStore();
    const mapElement = ref<HTMLDivElement>();

    const initMap = async () => {
      if (!mapElement.value) return;
      if (!userLocation.value) return;

      await Promise.resolve();
      const map = new Mapboxgl.Map({
        container: mapElement.value, // container ID
        style: "mapbox://styles/mapbox/dark-v10", // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15,
      });

      const currentLocationPopup = new Mapboxgl.Popup({
        offset: [0, -20],
      }).setLngLat(userLocation.value).setHTML(`
        <h2> Hola mundo </h2>`);

      const currentLocationMarker = new Mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(currentLocationPopup)
        .addTo(map);

      setMap(map);
    };
    onMounted(() => {
      if (isGeolocationReady.value) return initMap();
    });

    watch(isGeolocationReady, () => {
      if (isGeolocationReady) initMap();
    });

    return {
      isLoading,
      userLocation,
      mapElement,
      isGeolocationReady,
    };
  },
});
