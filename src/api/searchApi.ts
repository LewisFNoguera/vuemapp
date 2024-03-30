import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
  params: {
    limit: 5,
    language: "es",
    navigation_profile: "driving",
    session_token: "0a94442c-fc4d-4dc1-88e9-02dfca104d50",
    access_token:
      "pk.eyJ1IjoibGV3aXNub2d1ZXJhIiwiYSI6ImNsdWJ6MmV2ODExcnMybG85OXMybHo0YXQifQ._KVWCNeLL-hFSxqHBuB9fA",
  },
});

export default searchApi;
