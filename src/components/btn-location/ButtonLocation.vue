<template>
  <button
    v-if="isButtonAvailable"
    type="button"
    class="rounded-full bg-indigo-600 p-3 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 fixed bottom-10 right-10 animate-bounce"
    @click="getCurrentLocation"
  >
    <img src="../../assets/location.svg" width="44" alt="Location" />
  </button>
</template>

<script>
import { useMapStore, usePlacesStore } from "@/composables";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "ButtonLocation",
  setup() {
    const { userLocation, isGeolocationReady } = usePlacesStore();
    const { map, isMapReady } = useMapStore();
    return {
      isButtonAvailable: computed(
        () => isGeolocationReady.value && isMapReady.value
      ),
      getCurrentLocation: () => {
        map.value?.flyTo({
          center: userLocation.value,
          zoom: 14,
        });
      },
    };
  },
});
</script>
