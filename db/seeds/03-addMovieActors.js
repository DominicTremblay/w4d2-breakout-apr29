const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw('ALTER SEQUENCE movie_actors_id_seq RESTART WITH 1'),
    knex('movie_actors')
      .del()
      .then(function() {
        // Inserts seed entries
        return knex('movie_actors').insert([
          {
            movie_id: faker.random.number({ min: 1, max: 5 }),
            actor_id: faker.random.number({ min: 1, max: 6 }),
          },
          {
            movie_id: faker.random.number({ min: 1, max: 5 }),
            actor_id: faker.random.number({ min: 1, max: 6 }),
          },
          {
            movie_id: faker.random.number({ min: 1, max: 5 }),
            actor_id: faker.random.number({ min: 1, max: 6 }),
          },
          {
            movie_id: faker.random.number({ min: 1, max: 5 }),
            actor_id: faker.random.number({ min: 1, max: 6 }),
          },
          {
            movie_id: faker.random.number({ min: 1, max: 5 }),
            actor_id: faker.random.number({ min: 1, max: 6 }),
          },
        ]);
      }),
  ]);
};
