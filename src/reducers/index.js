const defaultState = {
  locations: [],
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
      return { ...state, locations: action.locations };
    case "SET_FILTER": {
      return { ...state, filters: { ...state.filters, ...action.filter } };
    }
    default:
      return state;
  }
};

export default truckstops;
