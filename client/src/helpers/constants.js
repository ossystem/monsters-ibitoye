module.exports = {
  PROJECT_NAME: 'monster',
  EMAIL_RECEIVER: process.env.REACT_APP_PROD_EMAIL_RECEIVER,
  PROXY: process.env.REACT_APP_PROXY,
  EMAIL_API_SECRET_KEY: process.env.REACT_APP_EMAIL_API_SECRET_KEY,
  BUTTON_COLORS: {
    BLUE: {
      TEXT: 'blue',
      HEX_CODE: '#0291FA',
      HOVER_HEX_CODE: '#0080DE',
    },
    GREEN: {
      TEXT: 'green',
      HEX_CODE: '#91BC86',
      HOVER_HEX_CODE: '#7B9E71',
    },
    DISABLED: {
      TEXT: 'disabled',
      HEX_CODE: '#E1E1E1',
    },
  },
  COLORS: {
    LIGHT_GREEN: '#AAD38D',
    BLACK: '#000000',
  },
  STEPS: {
    HOME: 'HOME',
    AUTH: 'AUTH',
    QUESTIONS: 'QUESTIONS',
    RESULT: 'RESULT',
  },
  ERRORS: {
    AUTH_FAILED: 'Email or Password is incorrect',
  },
  QUESTION_AUTH: {
    id: 0, 
    question: 'Start by Signup',
    optionType: 'auth',
  },
  QUESTION_CHECKBOX: {
    "id": 2,
    "question": "Are you afraid of the dark?",
    "optionType": "checkbox",
    "updatedAt": "2019-07-16T19:34:01.000Z",
    "createdAt": "2019-07-16T19:34:01.000Z",
    "options": [
        {
            "id": 1,
            "questionId": 1,
            "chosenBy": null,
            "option": "I'm not scared at all",
            "updatedAt": "2019-07-16T19:34:01.000Z",
            "createdAt": "2019-07-16T19:34:01.000Z"
        },
        {
            "id": 2,
            "questionId": 1,
            "chosenBy": null,
            "option": "Sometimes",
            "updatedAt": "2019-07-16T19:34:01.000Z",
            "createdAt": "2019-07-16T19:34:01.000Z"
        },
        {
            "id": 3,
            "questionId": 1,
            "chosenBy": null,
            "option": "Never",
            "updatedAt": "2019-07-16T19:34:01.000Z",
            "createdAt": "2019-07-16T19:34:01.000Z"
        },
        {
            "id": 4,
            "questionId": 1,
            "chosenBy": null,
            "option": "What a stupid question!",
            "updatedAt": "2019-07-16T19:34:01.000Z",
            "createdAt": "2019-07-16T19:34:01.000Z"
        }
    ]
  },
  QUESTION_RADIO: {
    "id": 1,
    "question": "Are you afraid of the dark?",
    "optionType": "radio",
    "updatedAt": "2019-07-16T19:34:01.000Z",
    "createdAt": "2019-07-16T19:34:01.000Z",
    "options": [
        {
            "id": 1,
            "questionId": 1,
            "chosenBy": null,
            "option": "I'm not scared at all",
            "updatedAt": "2019-07-16T19:34:01.000Z",
            "createdAt": "2019-07-16T19:34:01.000Z"
        },
        {
            "id": 2,
            "questionId": 1,
            "chosenBy": null,
            "option": "Sometimes",
            "updatedAt": "2019-07-16T19:34:01.000Z",
            "createdAt": "2019-07-16T19:34:01.000Z"
        },
        {
            "id": 3,
            "questionId": 1,
            "chosenBy": null,
            "option": "Never",
            "updatedAt": "2019-07-16T19:34:01.000Z",
            "createdAt": "2019-07-16T19:34:01.000Z"
        },
        {
            "id": 4,
            "questionId": 1,
            "chosenBy": null,
            "option": "What a stupid question!",
            "updatedAt": "2019-07-16T19:34:01.000Z",
            "createdAt": "2019-07-16T19:34:01.000Z"
        }
    ]
  },
  QUESTION_TOGGLE: {
    "id": 3,
    "question": "Are you a monster day or a night monster?",
    "optionType": "toggle",
    "updatedAt": "2019-07-16T19:34:01.000Z",
    "createdAt": "2019-07-16T19:34:01.000Z",
    "options": [
        {
            "id": 9,
            "questionId": 3,
            "chosenBy": null,
            "option": "Day monster",
            "updatedAt": "2019-07-16T19:34:01.000Z",
            "createdAt": "2019-07-16T19:34:01.000Z"
        },
        {
            "id": 10,
            "questionId": 3,
            "chosenBy": null,
            "option": "Night Monster",
            "updatedAt": "2019-07-16T19:34:01.000Z",
            "createdAt": "2019-07-16T19:34:01.000Z"
        }
    ]
  },
  QUESTION_SLIDER: {
    "id": 4,
    "question": "You'd rather be a bad or a good monster?",
    "optionType": "slider",
    "updatedAt": "2019-07-16T19:34:01.000Z",
    "createdAt": "2019-07-16T19:34:01.000Z",
    "options": [
        {
            "id": 11,
            "questionId": 4,
            "chosenBy": null,
            "option": "Good monster",
            "updatedAt": "2019-07-16T19:34:01.000Z",
            "createdAt": "2019-07-16T19:34:01.000Z"
        },
        {
            "id": 12,
            "questionId": 4,
            "chosenBy": null,
            "option": "Bad monster",
            "updatedAt": "2019-07-16T19:34:01.000Z",
            "createdAt": "2019-07-16T19:34:01.000Z"
        }
    ]
  },
  ANSWERS: [
    "I'm not scared at all",
    "Velvet",
    "Night Monster",
    "Bad Monster",
  ]
};