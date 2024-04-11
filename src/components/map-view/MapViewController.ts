import { useMapStore, usePlacesStore } from "@/composables";
import { defineComponent, onMounted, ref, watch } from "vue";
import astroJSON from "@/assets/astro.json";

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
        style: "mapbox://styles/mapbox/navigation-night-v1", // style URL
        projection: "globe",
        center: userLocation.value, // starting position [lng, lat]
        zoom: 2,
      });

      const currentLocationPopup = new Mapboxgl.Popup({
        offset: [0, -20],
      }).setLngLat(userLocation.value).setHTML(`
        <h2> I'm Here 👋🏼! </h2>`);

      new Mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(currentLocationPopup)
        .addTo(map);

      map.on("style.load", () => {
        map.setFog({
          color: "rgb(186, 210, 235)",
          "high-color": "rgb(36, 92, 223)",
          "horizon-blend": 0.02,
          "space-color": "rgb(11, 11, 25)",
          "star-intensity": 0.6,
        });

        map.addSource("mapbox-dem", {
          type: "raster-dem",
          url: "mapbox://mapbox.terrain-rgb",
        });

        map.setTerrain({
          source: "mapbox-dem",
          exaggeration: 1.5,
        });
      });

      const secondsPerRevolution = 240;
      // Above zoom level 5, do not rotate.
      const maxSpinZoom = 5;
      // Rotate at intermediate speeds between zoom levels 3 and 5.
      const slowSpinZoom = 3;

      let userInteracting = false;
      const spinEnabled = true;

      function spinGlobe() {
        const zoom = map.getZoom();
        if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
          let distancePerSecond = 360 / secondsPerRevolution;
          if (zoom > slowSpinZoom) {
            // Slow spinning at higher zooms
            const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
            distancePerSecond *= zoomDif;
          }
          const center = map.getCenter();
          center.lng -= distancePerSecond;
          // Smoothly animate the map over one second.
          // When this animation is complete, it calls a 'moveend' event.
          map.easeTo({ center, duration: 1000, easing: (n: unknown) => n });
        }
      }

      // Pause spinning on interaction
      map.on("mousedown", () => {
        userInteracting = true;
      });
      map.on("dragstart", () => {
        userInteracting = true;
      });

      // When animation is complete, start spinning if there is no ongoing interaction
      map.on("moveend", () => {
        spinGlobe();
      });

      spinGlobe();
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
      astroJSON,
    };
  },
});
