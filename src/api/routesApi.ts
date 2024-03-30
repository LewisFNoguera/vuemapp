import axios from "axios";

const routesApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1IjoibGV3aXNub2d1ZXJhIiwiYSI6ImNsdWJ6MmV2ODExcnMybG85OXMybHo0YXQifQ._KVWCNeLL-hFSxqHBuB9fA",
  },
});

export default routesApi;
