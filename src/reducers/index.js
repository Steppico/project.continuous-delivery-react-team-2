const defaultState = {
  locations: [],
};

const photos = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LOCATIONS":
      const x = { ...state, locations: action.locations };
      return x;
    default:
      return state;
  }
};

export default photos;
