const Sequelize = require('sequelize');

const userSchema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  authZeroId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  answerSent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },

  updatedAt: Sequelize.DATE,
  createdAt: Sequelize.DATE,
};

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(userSchema, { tableName: 'user', sequelize });
  }

  static associate(models) {
    models.User.hasMany(models.QuestionOption, { foreignKey: 'chosenBy', as: 'answers' });
  }
};
