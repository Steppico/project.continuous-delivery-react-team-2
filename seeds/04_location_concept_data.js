const allData = require("../data/locations");
let results = [];

let location_results = [];
for (let i = 0; i < allData.length; i++) {
  const store = allData[i];
  const conceptsData = store.Site.Concepts;
  results = results.concat(
    conceptsData.map((concepts) => {
      return {
        location_id: i + 1,
        restaurant_id: concepts.Concept.Id,
      };
    })
  );
}

console.log(results);

exports.seed = function(knex) {
  return knex("locations_restaurants").then(() => {
    return knex("locations_restaurants").insert(results);
  });
};
