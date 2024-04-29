import knex from 'knex';

const configuredKnex = knex({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
});

export default configuredKnex;