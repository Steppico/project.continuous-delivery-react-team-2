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
