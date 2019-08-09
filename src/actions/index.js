import { getMarkers } from "../utils";

export function getLocations() {
  return function(dispatch) {
    return (async () => {
      const locations = await getMarkers();
      dispatch(setLocations(locations));
    })();
  };
}

export function setFilter(filter) {
  return {
    type: "SET_FILTER",
    filter,
  };
}

function setLocations(locations) {
  return {
    type: "SET_LOCATIONS",
    locations,
  };
}
