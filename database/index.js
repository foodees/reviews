//DB INDEX.JS

const pg = require('pg');

// var knex = require('knex')({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     user : 'postgres',
//     password : 'postgres',
//     database : 'postgres'
//   }
// });

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@database/foodee_user_reviews';

const connection = new pg.Client(connectionString);

connection.connect();

module.exports = connection;

// const query = client.query(
//   'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
// query.on('end', () => { client.end(); });
