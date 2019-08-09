const defaultState = {
  locations: [],
  markers: [{ position: { lat: -34.397, lng: 15.644 }, key: "adslfh" }],
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
