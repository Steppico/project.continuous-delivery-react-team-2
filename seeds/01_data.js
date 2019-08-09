const allData = require("../data/locations");

const coreData = allData.map((store) => {
  const insertInfo = {};
  insertInfo.latitude = store.Site.Latitude;
  insertInfo.longitude = store.Site.Longitude;
  insertInfo.name = store.Addresses[0].Name;
  insertInfo.address1 = store.Addresses[0].Address1;
  insertInfo.state = store.Addresses[0].State;
  insertInfo.city = store.Addresses[0].City;
  insertInfo.highway = store.Site.Highway;

  //GET AMENITIES
  const hasWifi = store.CustomFields.reduce((memo, current) => {
    return current.CustomField.DisplayName === "WiFi" ? true : memo;
  }, false);

  insertInfo.wifi = hasWifi;

  const hasATM = store.CustomFields.reduce((memo, current) => {
    return current.CustomField.DisplayName === "ATM" ? true : memo;
  }, false);

  insertInfo.atm = hasATM;

  return insertInfo;
});

exports.seed = function(knex) {
  return knex("locations")
    .del()
    .then(() => {
      return knex("locations").insert(coreData);
    });
};
