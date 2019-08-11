const allData = require("../data/locations");
const results = [];

//collect all restaurant
const allRestData = [];
for (let i = 0; i < allData.length; i++) {
  const store = allData[i];
  store.Site.Concepts.map((restObj) => {
    const newRestObj = {
      id: restObj.Concept.Id,
      name: restObj.Concept.Name,
    };
    allRestData.push(newRestObj);
  });
}

//Remove duplicate restaurant
const uniqRestData = [
  ...new Set(allRestData.map((restaurant) => restaurant.id)),
].map((restaurantId) => {
  return allRestData.find((restaurant) => restaurant.id === restaurantId);
});

//sort restaurant by id
uniqRestData.sort((a, b) => (a.id > b.id ? 1 : -1));

exports.seed = function(knex) {
  return knex("restaurants").then(() => {
    return knex("restaurants").insert(uniqRestData);
  });
};
