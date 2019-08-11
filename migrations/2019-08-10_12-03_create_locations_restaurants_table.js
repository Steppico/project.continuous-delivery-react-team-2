exports.up = function(knex) {
  return knex.schema.createTable("locations_restaurants", (table) => {
    table.increments().index();
    table.integer("location_id");
    table
      .foreign("location_id")
      .references("id")
      .inTable("locations");
    table.integer("restaurant_id");
    table
      .foreign("restaurant_id")
      .references("id")
      .inTable("restaurants");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("locations_restaurants");
};
