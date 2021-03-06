// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

const schema = buildSchema(`

  type Location {
    id: Int,
    latitude: Float,
    longitude: Float,
    name: String,
    address: String,
    state: String,
    city: String,
    highway:String,
    wifi: Boolean,
    atm: Boolean,
    store_type: String,
    fuels: [Fuel],
    restaurants:[String]
  }

  type State {
    name: String,
    cities: [String],
    highways: [String]
  }


  type Fuel {
    id: Int,
    locationId: Int,
    name: String,
    price: Float,
  }
  

  type Query {
    locations(name: String, state:String, city:String, highway:String): [Location],
    states: [State],
    fuels: [Fuel]
  }

  `);
const Location = function(data) {
  this.id = data.id;
  this.longitude = data.longitude;
  this.latitude = data.latitude;
  this.name = data.name;
  this.address = data.address1;
  this.state = data.state;
  this.city = data.city;
  this.wifi = data.wifi;
  this.store_type = data.store_type;
  this.atm = data.atm;
  this.highway = data.highway;
  this.fuels = data.fuels;
  this.restaurants = data.restaurants;
};

const Fuel = function(data) {
  this.id = data.id;
  this.locationId = data.location_id;
  this.name = data.name;
  this.price = data.price.toFixed(2);
};

const root = {
  locations: async (req) => {
    try {
      let locations;
      if (Object.keys(req).length === 0) {
        locations = await db.select().table("locations");
      } else {
        locations = await db
          .select()
          .where(req)
          .table("locations");
      }
      const fuelsData = await db.select().table("fuel");

      fuelsData.forEach((fuelObj) => {
        if (
          !Object.prototype.hasOwnProperty.call(
            locations[fuelObj.location_id - 1],
            "fuels"
          )
        ) {
          locations[fuelObj.location_id - 1].fuels = [];
        }

        locations[fuelObj.location_id - 1].fuels.push(fuelObj);
      });

      const restaurantsData = await db
        .from("locations")
        .innerJoin(
          "locations_restaurants",
          "locations.id",
          "locations_restaurants.location_id"
        )
        .innerJoin(
          "restaurants",
          "restaurants.id",
          "locations_restaurants.restaurant_id"
        );

      restaurantsData.forEach((restaurantLocationObject) => {
        if (restaurantLocationObject.name)
          if (
            !Object.prototype.hasOwnProperty.call(
              locations[restaurantLocationObject.location_id - 1],
              "restaurants"
            )
          ) {
            locations[
              restaurantLocationObject.location_id - 1
            ].restaurants = [];
          }
        locations[restaurantLocationObject.location_id - 1].restaurants.push(
          restaurantLocationObject.name
        );
      });
      return locations.map((location) => new Location(location));
    } catch (err) {
      console.error("Error loading locations!", err);
    }
  },
  fuels: async (req) => {
    try {
      const fuels = await db.select().table("fuel");
      return fuels.map((fuel) => new Fuel(fuel));
    } catch (err) {
      console.error("Error loading restaurants!", err);
    }
  },
  states: async (req) => {
    try {
      const locations = await db.select().table("locations");
      const states = {};
      locations.forEach((location) => {
        if (states[location.state] === undefined) {
          states[location.state] = {
            name: location.state,
            cities: [],
            highways: [],
          };
        }

        if (!states[location.state].cities.includes(location.city)) {
          states[location.state].cities.push(location.city);
        }
        if (!states[location.state].highways.includes(location.highway)) {
          states[location.state].highways.push(location.highway);
        }
      });

      return Object.values(states);
    } catch (err) {
      console.error("Error loading states!", err);
    }
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/locations", async (req, res) => {
  try {
    const locations = await db.select().table("locations");
    res.json(locations);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
