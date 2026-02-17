import knex from 'knex';

const connection = process.env.PG_CONNECTION_STRING;

export const db = knex({
    client: 'pg',
    connection: connection,
    searchPath: ['knex', 'public'],
});
