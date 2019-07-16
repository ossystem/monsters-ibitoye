require('dotenv').config({ path: 'config/env/.env' });

const Dbservice = require('../services/db.service');
const appConfig = require('../../config/app');
const QuestionModel = require('../components/question/models/question.model');
const UserModel = require('../components/user/models/user.model');

((async () => {
  await Dbservice.connect(appConfig.db).sync({ force: true });

  // Insert users
  const users = [
    { authZeroId: 'auth0|5d2ddcce66c7e60c7d8bcd8a', email: 'monster@gmail.com' },
    { authZeroId: 'auth0|5d2df5543c52de0e89bfcd12', email: 'monster2@gmail.com' },
    { authZeroId: 'auth0|5d2df662ab9cc10cbeebdc0f', email: 'monster3@gmail.com' },
  ];

  for (const user of users) {
    const newUsers = new UserModel(user);
    const savedUser = await newUsers.save();

    console.log(savedUser);
  }
  // Insert questions
  const questions = [
    { question: 'Are you afraid of the dark?' },
    { question: 'What do you prefer?' },
    { question: 'Are you a monster day or a night monster?' },
    { question: `You'd rather be a bad or a good monster?` },
  ];

  for (const question of questions) {
    const newQuestions = new QuestionModel(question);
    const savedQA = await newQuestions.save();

    console.log(savedQA);
  }
})())
