require('dotenv').config({ path: 'config/env/.env' });

const appConfig = require('../config/app');
const app = require('./app');

app.listen(appConfig.app.port, () => {
  process.stdout.write(`\nListening on port ${appConfig.app.port}`);
});