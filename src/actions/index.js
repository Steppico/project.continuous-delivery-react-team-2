import { getMarkers, getStatesCitiesHighways } from "../utils";

export function getLocations() {
  return function(dispatch) {
    return (async () => {
      const locations = await getMarkers();
      dispatch(setLocations(locations));
    })();
  };
}

export function actionStatesCitiesHighways() {
  return function(dispatch) {
    return (async () => {
      const statesCitiesHighways = await getStatesCitiesHighways();
      dispatch(setStatesCitiesHighways(statesCitiesHighways));
    })();
  };
}

export function setFilter(filter) {
  return {
    type: "SET_FILTER",
    filter,
  };
}

export function setFilteredLocations() {
  return {
    type: "SET_FILTERED_LOCATIONS",
  };
}

function setLocations(locations) {
  return {
    type: "SET_LOCATIONS",
    locations,
  };
}

function setStatesCitiesHighways(states) {
  return {
    type: "SET_STATES",
    states,
  };
}
