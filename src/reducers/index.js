const defaultState = {
  locations: [],
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
    case "SET_LOCATIONS":
      return {
        ...state,
        filteredLocations: action.locations.locations,
        locations: action.locations.locations,
        markers: action.locations.markers,
        filteredMarkers: action.locations.markers,
      };
    case "SET_FILTER": {
      return { ...state, filters: { ...state.filters, ...action.filter } };
    }
    case "SET_FILTERED_LOCATIONS": {
      const filteredLocations = state.locations.filter((location) => {
        for (const key in state.filters) {
          if (state.filters[key]) {
            if (location[key] !== state.filters[key]) {
              return false;
            }
          }
        }
        return true;
      });
      const updatedState = {
        ...state,
        filteredLocations: filteredLocations,
        filteredMarkers: filteredLocations.map((l) => ({
          position: {
            lat: l.latitude,
            lng: l.longitude,
          },
          key: l.name,
          defaultAnimation: 2,
        })),
      };
      //console.log(updatedState);
      return updatedState;
    }
    default:
      return state;
  }
};

export default truckstops;
