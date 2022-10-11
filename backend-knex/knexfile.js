// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {

  development: { // development config - used for seed and migrations
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './src/database/knex-dev-base.sqlite3'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    },
    pool: { // use foreign_keys, by default they are not turned on
      afterCreate: (knex, cb) => knex.run("PRAGMA foreign_keys = ON", cb) // needed for delete cascade
    }
  },

  production: {
    client: 'mysql',
    connection: process.env.MYSQL_DB_CONNECTION_URL,
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: { // seeds shouldn't be used in production, only in development
      directory: './src/database/seeds'
    }
  }

};
