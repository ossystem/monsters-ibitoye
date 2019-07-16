const Sequelize = require('sequelize');

const questionSchema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  optionType: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  updatedAt: Sequelize.DATE,
  createdAt: Sequelize.DATE,
};

module.exports = class Question extends Sequelize.Model {
  static init(sequelize) {
    return super.init(questionSchema, { tableName: 'question', sequelize });
  }

  static associate(models) {
    models.Question.hasMany(models.QuestionOption, { foreignKey: 'questionId', as: 'questions' });
  }
};
