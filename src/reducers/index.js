const defaultState = {
  locations: [],
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
      console.log("SET LOCATIONS:", action.locations);
      return {
        ...state,
        filteredLocations: action.locations.markers,
        locations: action.locations.locations,
        //markers: action.locations.markers,
      };
    case "SET_FILTER": {
      return { ...state, filters: { ...state.filters, ...action.filter } };
    }
    case "SET_FILTERED_LOCATIONS": {
      console.log(
        "Filtered States:",
        state.locations.filter((location) => {
          for (const key in state.filters) {
            if (state.filters[key]) {
              if (location[key] !== state.filters[key]) {
                return false;
              }
            }
          }

          return true;
        })
      );
      //console.log(state.locations);
      return {
        ...state,
        filteredLocations:
          ///const results = [...state.locations];
          state.locations
            .filter((location) => {
              for (const key in state.filters) {
                //console.log("#key-", key);
                ///console.log("#Value:", state.filters[key]);
                if (state.filters[key]) {
                  if (location[key] !== state.filters[key]) {
                    return false;
                  }
                }
              }
              console.log("Location", location.state);
              return true;
            })
            .map((l) => ({
              position: {
                lat: l.latitude,
                lng: l.longitude,
              },
              key: l.name,
              defaultAnimation: 2,
            })),
      };
    }
    default:
      return state;
  }
};

export default truckstops;
