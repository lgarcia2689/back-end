const {
  DATABASE_URL,
  DEV_DATABASE_URL,
  TESTING_DATABASE_URL,
} = require("./env-fallbacks");

const pg = require("pg");

if (DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false };
}

const sharedConfig = {
  client: "pg",
  migrations: { directory: "./api/data/migrations" },
  seeds: { directory: "./api/data/seeds" },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: DEV_DATABASE_URL,
  },
  testing: {
    ...sharedConfig,
    connection: TESTING_DATABASE_URL,
  },
  production: {
    ...sharedConfig,
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
  },
};
