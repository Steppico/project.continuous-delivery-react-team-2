exports.up = function(knex) {
  return knex.schema.createTable("restaurants", (table) => {
    table
      .increments()
      .primary()
      .index();
    table.text("name");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("restaurants");
};
