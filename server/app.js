// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
require("dotenv").config();

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
  }

  type Query {
    locations: [Location]
    location (name: String, id: Int): Location
  }

  `);
const Location = function(data) {
  this.id = data.id;
  this.longitude = data.longitude;
  this.latitude = data.latitude;
  this.name = data.name;
  this.address = data.address1 || "Washington DC 1";
  this.state = data.state || "New England";
  this.city = data.city || "Rome";
  this.highway = data.highway || "66";
};

const root = {
  Locations: async () => {
    try {
      const locations = await db.select().table("locations");
      return locations.map((location) => new Location(location));
    } catch (err) {
      console.error("Error loading locations!", err);
    }
  },
  Location: async (req) => {
    try {
      const name = req.Name;

      const locations = await db
        .select()
        .where("name", name)
        .table("locations");
      return locations.map((location) => new Location(location))[0];
    } catch (err) {
      console.error("Error loading location!", err);
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

/*
  type AcceptedPaymentTypes {
    SiteManagementItem: [SiteManagementItem]
  },

  type SiteManagementItem {
    Title: String,
    Section: String
  },

  type AdditionalAmenities {
    SiteManagementItem: [SiteManagementItem]
  }

  type Address {
    Address1: String,
    Address2: String,
    AddressId: Number,
    City: String,
    Name: String,
    State: String,
    Zip: String
  }

  type ContactMethod {
    Type: Type,
    Id: Number,
    # Phone Number in String 
    Data: String 
  },

  type Type {
    Id: Number,
    Name: String
  },

  type CustomFields {
    CustomField: [CustomField]
  },
  type FilteredCustomFields {
    CustomField: [CustomField]
  },

  type CustomField {
    Id: Number,
    Label: String,
    Name: String,
    Section: String
  },

  type Site {
    FuelPrices: [Fuelprice],
    Latitude: Float,
    Longitude: Float,
    Highway: String,
    DescriptiveAddress: String,
    ExitNumber: String,
    SiteName: String,
    SiteId: Number
  }

  type FuelPrice {
    SiteId: Number,
    FieldType: String,
    CashPrice: Number,
    DisplayName: String
  },

  type Station {

  }

  type Query {
    AcceptedPaymentTypes: AcceptedPaymentTypes,
    AdditionalAmenities: AdditionalAmenities,

  }

*/
