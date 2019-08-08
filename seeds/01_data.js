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
  // console.log(insertInfo);
  return insertInfo;
});

exports.seed = function(knex) {
  return knex("locations")
    .del()
    .then(() => {
      return knex("locations").insert(coreData);
    });
};
