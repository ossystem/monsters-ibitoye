require('dotenv').config({ path: 'config/env/.env' });

const Dbservice = require('../services/db.service');
const appConfig = require('../../config/app');
const QuestionModel = require('../components/question/models/question.model');
const QuestionOptionModel = require('../components/question_option/models/question_option.model');
const UserModel = require('../components/user/models/user.model');

((async () => {
  console.log('Connecting to DB')
  await Dbservice.connect(appConfig.db).sync({ force: true });

  // Insert users
  console.log('\n\nInsert users\n\n');
  const users = [
    { authZeroId: 'auth0|5d2ddcce66c7e60c7d8bcd8a', email: 'monster@gmail.com' },
    { authZeroId: 'auth0|5d2df5543c52de0e89bfcd12', email: 'monster2@gmail.com' },
    { authZeroId: 'auth0|5d2df662ab9cc10cbeebdc0f', email: 'monster3@gmail.com' },
  ];
  const savedUsers = [];

  for (const user of users) {
    const newUsers = new UserModel(user);
    savedUsers.push(await newUsers.save());
  }

  await Promise.all(savedUsers);

  // Insert questions
  console.log('\n\nInsert questions and options\n\n');
  const questions = [
    { 
      question: 'Are you afraid of the dark?',
      options: [
        `I'm not scared at all`,
        `Sometimes`,
        `Never`,
        `What a stupid question!`,
      ],
      optionType: 'radio',
    },
    { 
      question: 'What do you prefer?',
      options: [
        'Fur', 'Snake skin', 'Slick skin', 'Velvet'
      ],
      optionType: 'checkbox',
    },
    { 
      question: 'Are you a monster day or a night monster?',
      options: [
        'Day monster', 'Night Monster'
      ],
      optionType: 'toggle',
    },
    {
      question: `You'd rather be a bad or a good monster?`,
      options: [
        'Good monster', 'Bad monster'
      ],
      optionType: 'progress',
    },
  ];

  for (const question of questions) {
    const newQuestion = new QuestionModel({ question: question.question, optionType: question.optionType });
    const savedQuestion = await newQuestion.save();

    const savedOptions = [];

    for (const option of question.options) {
      const newOption = new QuestionOptionModel({
        option,
        questionId: savedQuestion.id,
      });

      savedOptions.push(newOption.save());
    }

    await Promise.all(savedOptions);
  }

  console.log('Completed');
})());
