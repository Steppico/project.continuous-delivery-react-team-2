const allData = require("../data/locations");

let results = [];
for (let i = 0; i < allData.length; i++) {
  const store = allData[i];
  const fuelData = store.Site.FuelPrices;
  results = results.concat(
    fuelData.map((fuel) => {
      return {
        location_id: i + 1,
        name: fuel.DisplayName,
        price: fuel.CashPrice,
      };
    })
  );
}

exports.seed = function(knex) {
  return knex("fuel")
    .del()
    .then(() => {
      return knex("fuel").insert(results);
    });
};
