import { StateInterface } from "@/store";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

export const usePlacesStore = () => {
  const store = useStore<StateInterface>();
  onMounted(() => {
    if (!store.getters["places/isGeolocationReady"]) {
      store.dispatch("places/getLocation");
    }
  });
  return {
    isLoading: computed(() => store.state.places.isLoading),
    userLocation: computed(() => store.state.places.userLocation),
    isGeolocationReady: computed<boolean>(
      () => store.getters["places/isGeolocationReady"]
    ),
    searchPlacesByTerm: (term = "") =>
      store.dispatch("places/searchPlacesByTerm", term),
  };
};
