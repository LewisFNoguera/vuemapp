<template>
  <MapView />
  <ButtonLocation />
  <SearchBar />
  <RouteDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { usePlacesStore } from "../composables";
import MapView from "@/components/map-view/MapView.vue";
import ButtonLocation from "@/components/btn-location/ButtonLocation.vue";
import SearchBar from "@/components/search-bar/SearchBar.vue";
import RouteDetails from "@/components/route-details/RouteDetails.vue";

export default defineComponent({
  name: "HomeView",
  components: { MapView, ButtonLocation, SearchBar, RouteDetails },
  setup() {
    usePlacesStore();
  },
});
</script>
