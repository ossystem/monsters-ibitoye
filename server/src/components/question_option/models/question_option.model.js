const Sequelize = require('sequelize');

const questionOptionSchema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  questionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  chosenBy: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  option: {
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

module.exports = class QuestionOption extends Sequelize.Model {
  static init(sequelize) {
    return super.init(questionOptionSchema, { tableName: 'questionOption', sequelize });
  }
  static associate(/* models */) {
  }
};
