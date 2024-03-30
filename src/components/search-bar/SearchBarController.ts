// import { useMapStore, usePlacesStore } from "@/composables";
import { computed, defineComponent, ref } from "vue";
import SearchResults from "../search-results/SearchResults.vue";
import { usePlacesStore } from "@/composables";

export default defineComponent({
  name: "SearchBarController",
  components: { SearchResults },
  setup() {
    const debouncedValue = ref("");
    const debouncedWaitingTime = ref(0);
    const { searchPlacesByTerm } = usePlacesStore();
    return {
      debouncedValue,
      searchTerm: computed({
        get() {
          return debouncedValue.value;
        },
        set(newVal: string) {
          if (debouncedWaitingTime.value)
            clearTimeout(debouncedWaitingTime.value);
          debouncedWaitingTime.value = setTimeout(() => {
            debouncedValue.value = newVal;
            searchPlacesByTerm(debouncedValue.value);
          }, 500);
        },
      }),
    };
  },
});
