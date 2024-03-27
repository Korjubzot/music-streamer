/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("songs", function (table) {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("artist").notNullable();
    table.integer("album_id").references("album_id").inTable("albums");
    table.integer("track_number");
    table.integer("duration"); // duration in seconds
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("songs");
};
