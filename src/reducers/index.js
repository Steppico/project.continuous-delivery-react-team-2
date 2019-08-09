const defaultState = {
  locations: [],
  filters: {
    state: null,
    city: null,
    highway: null,
    arbys: false,
    wendys: false,
    otherRestaurants: false,
  },
};

const photos = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LOCATIONS":
      return { ...state, locations: action.locations };
    case "SET_FILTER": {
      const x = { ...state, filters: { ...state.filters, ...action.filter } };
      console.log(x);
      return x;
    }
    default:
      return state;
  }
};

export default photos;
