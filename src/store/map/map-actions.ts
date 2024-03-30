import { ActionTree } from "vuex";
import { MapState } from "./map-state";
import { StateInterface } from "../index";
import { routesApi } from "@/api";
import { DirectionsResponse } from "@/interfaces/directions";

export type LngLat = [number, number];

const actions: ActionTree<MapState, StateInterface> = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  },
  async getRouteBetweenPoints(
    { commit },
    { start, end }: { start: LngLat; end: LngLat }
  ) {
    const rest = await routesApi.get<DirectionsResponse>(
      `/${start.join(",")};${end.join(",")}`
    );

    commit("setDurDis", {
      distance: rest.data.routes[0].distance,
      duration: rest.data.routes[0].duration,
    });
    commit("setRoutePolyline", rest.data.routes[0].geometry.coordinates);
  },
};

export default actions;
