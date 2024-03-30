import { useMapStore } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RouteDetailsController",
  setup() {
    const { distance, duration } = useMapStore();

    return {
      distance,
      duration,
    };
  },
});
