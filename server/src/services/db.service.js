const path = require('path');
const fs = require('fs');
const Sequelize = require('sequelize');

const pathComponents = `${__dirname}/../components`;
let connection = null;

const initModels = () => {
  const componentList = fs.readdirSync(pathComponents);
  componentList.forEach((component) => {
    const pathToModels = `${pathComponents}/${component}/models`;
    if (fs.existsSync(pathToModels)) {
      const models = fs.readdirSync(pathToModels);
      models.filter(file => (file.indexOf('.') !== 0) && file !== 'index.js' && (file.slice(-3) === '.js')).forEach((file) => {
        const model = require(path.join(pathToModels, file));
        model.init(connection, Sequelize);
      });
    }
  });

  Object.values(connection.models)
    .filter(model => typeof model.associate === 'function')
    .forEach(model => model.associate(connection.models));
};

module.exports = {
  connect(config) {
    connection = new Sequelize(config.database, config.username, config.password, {
      host: config.host,
      dialect: config.dialect,
      logging: (config.logging === 'true'),
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });

    initModels();
    return connection;
  },

  getConnection() {
    if (connection) {
      return connection;
    }

    return false;
  },

  async getTransaction() {
    return connection.transaction();
  },

  async truncateAllTables() {
    return Promise.all(Object.values(connection.models).map(async (model) => {
      return model.destroy({ truncate: { cascade: true } });
    }));
  },
};
