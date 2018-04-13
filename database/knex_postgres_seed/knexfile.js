// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'pgsql://localhost/foodee_user_reviews',
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: '/Users/rj/Documents/Hack Reactor/dataset\ 2/knex_postgres_seed/seeds'
    }
  }
};

// module.exports = {
//   development: {
//     client: 'pg',
//     connection: 'postgres://localhost/merch',
//     migrations: {
//       directory: __dirname + '/db/migrations'
//     },
//     seeds: {
//     directory: __dirname + '/db/seeds/development'
//     }
//   }
// };
