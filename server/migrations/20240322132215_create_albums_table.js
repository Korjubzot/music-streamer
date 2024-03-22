/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  const exists = await knex.schema.hasTable("albums");
  if (!exists) {
    return knex.schema.createTable("albums", (table) => {
      table.increments("album_id").primary();
      table.string("title").notNullable();
      table.string("artist").notNullable();
      table.integer("release_year");
    });
  }
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("albums");
};
