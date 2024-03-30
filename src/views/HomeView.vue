<template>
  <MapView />
  <ButtonLocation />
  <SearchBar />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { usePlacesStore } from "../composables";
import MapView from "@/components/map-view/MapView.vue";
import ButtonLocation from "@/components/btn-location/ButtonLocation.vue";
import SearchBar from "@/components/search-bar/SearchBar.vue";

export default defineComponent({
  name: "HomeView",
  components: { MapView, ButtonLocation, SearchBar },
  setup() {
    usePlacesStore();
  },
});
</script>
