exports.up = function(knex) {
  return knex.schema.createTable("fuel", (table) => {
    table.increments().index();
    table.integer("location_id").notNullable();
    table
      .foreign("location_id")
      .references("id")
      .inTable("locations");
    table.text("name").notNullable();
    table.float("cashPrice");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("fuel");
};
