import knex from 'knex';

const connection = process.env.PORT || 'postgres://trouve_ton_chat_dphi_user:GMIvhkvzS3vLZlKredzGgNASkams71cq@dpg-cons6ti1hbls73fprc00-a.virginia-postgres.render.com/trouve_ton_chat_dphi?ssl=true';

const configuredKnex = knex({
    client: 'pg',
    connection: connection,
    searchPath: ['knex', 'public'],
});

export default configuredKnex;