"use strict";

exports.up = function(knex) {
  return knex.schema.table("suggested_routes", table => {
    table.dropForeign("routes_voyage_id_foreign");
    table
      .foreign("voyage_id")
      .references("voyages.id")
      .onDelete("CASCADE")
      .onUpdate("RESTRICT");
  });
};

exports.down = function(knex) {};
