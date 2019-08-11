import axios from "axios";

export async function getMarkers() {
  const results = await axios({
    url: "/graphql",
    method: "post",
    data: {
      query: `{
  locations{ 
        id,
        latitude,
        longitude,
        name,
        address,
        state,
        city,
        highway,
        fuels{
          id,
          name,
          locationId,
          price
        },
        restaurants
   }
}`,
    },
  });

  const locations = results.data.data.locations;
  const markers = locations.map((l) => ({
    position: {
      lat: l.latitude,
      lng: l.longitude,
    },
    key: l.name,
    defaultAnimation: 2,
  }));
  return { markers, locations };
}

export async function getStatesCitiesHighways() {
  const results = await axios({
    url: "/graphql",
    method: "post",
    data: {
      query: `{
        states {
          name,
          cities,
          highways
        }
      }`,
    },
  });

  const states = results.data.data.states;

  return { states };
}
