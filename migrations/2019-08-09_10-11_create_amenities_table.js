exports.up = function(knex) {
  return knex.schema.createTable("amenities", (table) => {
    table.increments().index();
    table.text("name");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("amenities");
};
