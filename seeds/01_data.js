// const allData = require("../data/locations")

// const coreData = allData.map(all => {
//   const insertInfo = {};
//   insertInfo.latitude = all.Site.Latitude;
//   insertInfo.longitude = all.Site.Longitude;
//   insertInfo.name = all.Addresses[0].Name;
//   return insertInfo;
// })

// exports.seed = function(knex) {
//   return knex("locations").del()
//     .then(() => {
//       return knex("locations").insert(coreData);
//     });
// };
