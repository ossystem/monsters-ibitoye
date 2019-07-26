import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import ResultBox from "./ResultBox";
import NextButton from "./NextButton";

import { submitAnswers } from "../actions/answerAction";
import { EMAIL_RECEIVER, BUTTON_COLORS, EMAIL_API_SECRET_KEY } from "../helpers/constants";
import ResultImage from "../assets/page_9_monster.png";

const useStyles = makeStyles(() => ({
  root: {
    margin: '70px 65px',
    '@media (max-width: 320px)': {
      margin: 0,
      padding: 0
    }
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  h2: {
    fontSize: '60px',
    textAlign: 'center',
    fontWeight: 400,
    '@media (max-width: 320px)': {
      fontSize: '25px',
      lineHeight: '1.5',
      margin: '0 30px'
    }
  },
  result: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 50px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '0 100px',
    '@media (max-width: 320px)': {
      flexDirection: 'column-reverse',
      margin: '20px 0',
      padding: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
  },
  resultImage: {
    width: '530px',
    height: '600px',
    margin: '100px 150px 0 0',
    alignItems: 'center',
    '@media (max-width: 320px)': {
      width: '130px',
      height: '200px',
      margin: '0 0 30px 0'
    },
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
      '@media (max-width: 320px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
}));

function Result(props) {
  const { answer: { answers, emailSent }, handleNextPage } = props;
  const classNames = useStyles();

  useEffect(() => {
    if (!emailSent && answers.length) {
      const body = answers
        .reduce((prev, curr, i) => prev.concat(`Question ${i+1}) ${curr}<br>`, ''), '')
        .trim()
        .concat('<br> Have a great day 🙂!');

      const email = {
        auth: EMAIL_API_SECRET_KEY,
        to: [EMAIL_RECEIVER],
        title: "Monster App by Ibitoye Rotimi Best | Ossystem",
        emailBody: `A user just answered the monster questionnaire.<br> ${body}`,
      };
      props.submitAnswers(email);
    }
  }, [answers, emailSent, props]);

  // TODO Add logout

  return (
    <div className={classNames.root}>
      <Header />
      <h2 className={classNames.h2}>Excellent, congratulations, you're a monster</h2>
      <div className={classNames.result}>
        <ResultBox answers={answers} />
        <img src={ResultImage} className={classNames.resultImage} alt="Result page"/>
      </div>

      <div className={classNames.submitButton}>
        <NextButton 
          text="Try again"
          color={BUTTON_COLORS.BLUE.TEXT}
          handleSubmit={handleNextPage}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  answer: state.answer,
});

export default connect(
  mapStateToProps,
  { submitAnswers },
  )(Result);
