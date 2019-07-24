import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import ResultBox from "./ResultBox";
import NextButton from "./NextButton";

import { ANSWERS, BUTTON_COLORS } from "../helpers/constants";
import ResultImage from "../assets/page_9_monster.png";

const useStyles = makeStyles(theme => ({
  root: {
    margin: '70px 65px',
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
    fontWeight: 400
  },
  result: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 50px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '0 100px'
  },
  resultImage: {
    width: '530px',
    height: '600px',
    margin: '100px 150px 0 0',
    alignItems: 'center',
  },
}));

export default function Result(props) {
  const { answers = ANSWERS } = props;
  const classNames = useStyles();

  const logout = (event) => {
    console.log('Log out');
  };

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
