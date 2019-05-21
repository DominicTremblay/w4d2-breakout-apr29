const faker = require('faker');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw('ALTER SEQUENCE movies_id_seq RESTART WITH 1'),
    knex('movies')
      .del()
      .then(function() {
        // Inserts seed entries
        return knex('movies').insert([
          {
            title: faker.lorem.word(),
            description: faker.lorem.words(),
            year: faker.random.number({ min: 2000, max: 2019 }),
          },
          {
            title: faker.lorem.word(),
            description: faker.lorem.words(),
            year: faker.random.number({ min: 2000, max: 2019 }),
          },
          {
            title: faker.lorem.word(),
            description: faker.lorem.words(),
            year: faker.random.number({ min: 2000, max: 2019 }),
          },
          {
            title: faker.lorem.words(),
            description: faker.lorem.words(),
            year: faker.random.number({ min: 2000, max: 2019 }),
          },
          {
            title: faker.lorem.word(),
            description: faker.lorem.words(),
            year: faker.random.number({ min: 2000, max: 2019 }),
          },
        ]);
      }),
  ]);
};
