import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGV3aXNub2d1ZXJhIiwiYSI6ImNsdWJ6MmV2ODExcnMybG85OXMybHo0YXQifQ._KVWCNeLL-hFSxqHBuB9fA";

if (!navigator.geolocation) {
  throw new Error("Tú navegador no soporta Geolocalización");
}

createApp(App).use(store).use(router).mount("#app");
