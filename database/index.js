//DB INDEX.JS

const pg = require('pg');


const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@database/foodee_user_reviews';

const connection = new pg.Client(connectionString);

connection.connect();

module.exports = connection;
