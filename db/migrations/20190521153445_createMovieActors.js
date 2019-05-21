exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie_actors', table => {
    table
      .increments('id')
      .primary()
      .unsigned();
    // Creating the columns for the foreign keys
    table.integer('movie_id');
    table.integer('actor_id');
    // Specifying the foreign key
    table
      .foreign('movie_id')
      .references('id')
      .on('movies')
      .onDelete('cascade');

    table
      .foreign('actor_id')
      .references('id')
      .on('actors')
      .onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movie_actors');
};
