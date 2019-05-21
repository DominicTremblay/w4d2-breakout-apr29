const config = require('./knexfile');
const env = 'development';
const knex = require('knex')(config[env]);

knex
  .select(
    'movies.id as movieId',
    'movie.description',
    'movies.title',
    'actors.id as actorId'
  )
  .from('movies')
  .innerJoin('movie_actors', 'movies.id', 'movie_actors.movie_id')
  .innerJoin('actors', 'movie_actors.actor_id', 'actors.id')
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => knex.destroy());
