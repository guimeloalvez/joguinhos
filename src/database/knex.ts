import Knex from "knex";
import "dotenv/config";

export const knex = Knex({
  client: "pg",
  connection: {},
  debug: true,
});
