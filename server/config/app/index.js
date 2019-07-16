module.exports = {
  app: {
    env: process.env.NODE_ENV,
    port: process.env.APP_PORT,
  },

  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT,
    logging: process.env.DB_LOGGING,
  },

  authZero: {
    url: process.env.AUTH_ZERO_URL,
    grantType: process.env.AUTH_ZERO_GRANT_TYPE,
    audience: process.env.AUTH_ZERO_AUDIENCE,
    scope: process.env.AUTH_ZERO_SCOPE,
    clientId: process.env.AUTH_ZERO_CLIENT_ID,
    clientSecret: process.env.AUTH_ZERO_CLIENT_SECRET
  },
};