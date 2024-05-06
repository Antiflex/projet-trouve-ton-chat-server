import knex from 'knex';

const connection = process.env.PG_CONNECTION_STRING || 'postgres://trouve_ton_chat_dphi_user:GMIvhkvzS3vLZlKredzGgNASkams71cq@dpg-cons6ti1hbls73fprc00-a.virginia-postgres.render.com/trouve_ton_chat_dphi?ssl=true';

export const db = knex({
    client: 'pg',
    connection: connection,
    searchPath: ['knex', 'public'],
});