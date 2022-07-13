const knex = require('knex');
require('dotenv').config();

const config = {
    client: "mysql2",
    connection: {
        host: "localhost",
        user: "root",
        password: process.env.DB_PASSWORD,
        database: "sql_nodejs_crud"
    },
    pool: { min: 0, max: 7 },
}

const databaseConnection = knex(config);

module.exports = databaseConnection;