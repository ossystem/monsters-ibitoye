import React from "react";
import { connect } from "react-redux";

import Home from "../components/Home";
import Jumbotron from "../components/Jumbotron";
import Result from "../components/Result";
import { STEPS } from "../helpers/constants";
import { setStep } from "../actions/stepAction";

function AppWrapper(props) {
  const handleNextPage = (event) => {
    if (props.step === STEPS.QUESTIONS) {
    props.setStep(STEPS.RESULT);
    } else {
      props.setStep(STEPS.QUESTIONS);
    }
  };

  switch(props.step) {
    case STEPS.HOME:
      return <Home handleNextPage={handleNextPage}/>;
    case STEPS.QUESTIONS:
      return <Jumbotron handleNextPage={handleNextPage} />;
    case STEPS.RESULT:
      return <Result handleNextPage={handleNextPage}/>;
    default:
      return <Home handleNextPage={handleNextPage}/>;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  step: state.step,
});

export default connect(
  mapStateToProps,
  { setStep }
)(AppWrapper);
