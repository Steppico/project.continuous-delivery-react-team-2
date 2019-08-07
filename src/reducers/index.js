const defaultState = {
  locations: [],
  markers: [{ position: { lat: -34.397, lng: 15.644 }, key: "adslfh" }],
};

const photos = (state = defaultState, action) => {
  console.log("thisisstate", state);
  switch (action.type) {
    case "SET_LOCATIONS":
      const x = { ...state, locations: action.locations };
      console.log("xxx", x);
      return x;
    default:
      return state;
  }
};

export default photos;
