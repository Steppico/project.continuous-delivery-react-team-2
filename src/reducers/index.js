const defaultState = {
  locations: [],
  states: [],
  markers: [],
  filteredMarkers: [],
  filteredLocations: [],
  filters: {
    state: null,
    city: null,
    highway: null,
    arbys: false,
    wendys: false,
    otherRestaurants: false,
    oilChange: false,
    lightMechanical: false,
    tirePass: false,
    truckTireCare: false,
    travelStop: false,
    countryStop: false,
    atm: false,
    wifi: false,
    otherAmenities: false,
  },
};

const truckstops = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LOCATIONS": {
      const updatedState = state;
      return {
        ...updatedState,
        filteredLocations: action.locations.locations,
        locations: action.locations.locations,
        markers: action.locations.markers,
        filteredMarkers: action.locations.markers,
      };
    }
    case "SET_STATES": {
      const updatedState = {
        ...state,
        states: action.states.states,
      };
      return updatedState;
    }
    case "SET_FILTER": {
      const updatedState = state;
      return {
        ...updatedState,
        filters: { ...state.filters, ...action.filter },
      };
    }
    case "SET_FILTERED_LOCATIONS": {
      const stateUpdate = state;
      const filteredLocations = stateUpdate.locations.filter((location) => {
        for (const key in stateUpdate.filters) {
          if (stateUpdate.filters[key]) {
            if (location[key] !== stateUpdate.filters[key]) {
              return false;
            }
          }
        }
        return true;
      });
      const updatedState = {
        ...stateUpdate,
        filteredLocations,
        filteredMarkers: filteredLocations.map((location) => ({
          position: {
            lat: location.latitude,
            lng: location.longitude,
          },
          key: location.name,
          defaultAnimation: 2,
        })),
      };
      return updatedState;
    }
    default:
      return state;
  }
};

export default truckstops;
