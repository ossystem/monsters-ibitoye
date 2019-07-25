import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { submitAnswers } from "../actions/answerAction";
import Header from "./Header";
import ResultBox from "./ResultBox";
// import NextButton from "./NextButton";

import { EMAIL_RECEIVER, ANSWERS } from "../helpers/constants";
import ResultImage from "../assets/page_9_monster.png";

const useStyles = makeStyles(theme => ({
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
}));

function Result(props) {
  const { answer: { answers, emailSent } } = props;
  const classNames = useStyles();

  useEffect(() => {
    if (!emailSent) {
      const body = answers
        .reduce((prev, curr, i) => prev.concat(`Question ${i+1}) ${curr}<br>`, ''), '')
        .trim()
        .concat('<br> Have a great day 🙂!');
      
        const email = {
        "auth": "2495sjdf932la_3495=+473345",
        "to": [EMAIL_RECEIVER],
        "emailBody": `A user just answered the monster questionnaire.<br> ${body}`,
        "title": "Monster answer"
      }
      props.submitAnswers(email);
    }
  }, [answers, emailSent, props]);

  // TODO
  // const logout = (event) => {
    // console.log('Log out');
  // };

  return (
    <div className={classNames.root}>
      {/* <div className={classNames.header}> */}
        <Header />
        {/* <NextButton 
          text="Logout"
          color={BUTTON_COLORS.BLUE.TEXT}
          handleSubmit={logout}
        /> */}
      {/* </div> */}
      <h2 className={classNames.h2}>Excellent, congratulations, you're a monster</h2>
      <div className={classNames.result}>
        <ResultBox answers={answers} />
        <img src={ResultImage} className={classNames.resultImage} alt="Result page"/>
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
