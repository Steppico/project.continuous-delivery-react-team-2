const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    database: "truckstop",
    user: "postgres",
    password: "postgres",
  },
});

module.exports = db;
