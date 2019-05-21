exports.up = function(knex, Promise) {
  // Create the table movies
  return knex.schema.createTable('movies', table => {
    // Creating the primary key
    table
      .increments('id')
      .primary()
      .unsigned();
    table.string('title').notNullable;
    table.text('description');
    table.integer('year');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  // Drop the table movies
  return knex.schema.dropTable('movies');
};
