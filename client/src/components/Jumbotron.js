import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import RadioOption from "./options/RadioOption";
import CheckboxOption from "./options/CheckboxOption";
import ToggleOption from "./options/ToggleOption";
import SliderOption from "./options/SliderOption";
import Pagination from "./Pagination";
import Header from "./Header";
import AuthentificationForm from './AuthentificationForm';


import { QUESTION_CHECKBOX, QUESTION_SLIDER, QUESTION_TOGGLE, QUESTION_RADIO } from "../helpers/constants";

const useStyles = makeStyles(_ => ({
  jumbotron: {
    border: '1px solid #D2D2D2',
    borderRadius: '5px',
    padding: '0 56px 56px',
    width: '50%',
    height: '50%',
    margin: '80px auto',
    boxShadow: '4px 13px 18px 1px rgba(0,0,0,0.24)',
  },
  question: {
    fontSize: '4em',
    fontWeight: 400,
    lineHeight: '1.5',
    margin: '100px 0 20px 0',
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const fetchQuestion = (authenticated) => {
  let question = { question: 'Start by Signup' };

  if (authenticated) {
    question = QUESTION_SLIDER;
  };

  return question;
};

export default function Jumbotron(props) {
  const { authenticated } = props;
  const classNames = useStyles();
  const [question, setQuestion] = useState(fetchQuestion(authenticated));

  const handleSubmit = event => {
    console.log('Submitting form now');
  };

  function getOptionComponent() {
    switch(question.optionType) {
      case "radio":
        return (
          <RadioOption
            handleSubmit={handleSubmit}
            formData={question}
            buttonStyle={classNames.submitButton}
          />
        );
      case "checkbox":
        return (
          <CheckboxOption
            handleSubmit={handleSubmit}
            formData={question}
            buttonStyle={classNames.submitButton}
          />
        );
      case "toggle":
        return (
          <ToggleOption 
            handleSubmit={handleSubmit}
            formData={question}
            buttonStyle={classNames.submitButton}
          />
        );
      case "slider":
        return (
          <SliderOption 
            handleSubmit={handleSubmit}
            formData={question}
            buttonStyle={classNames.submitButton}
          />
        );

      default:
        return (
          <AuthentificationForm
            handleSubmit={handleSubmit}
          />
        );
    }
  };

  return (
    <div className={classNames.root}>
      <Header />
      <div className={classNames.jumbotron}>
        <Pagination 
          min={1}
          max={5}
        />
        <p className={classNames.question}>{ question.question }</p>
        { getOptionComponent() }
      </div>
    </div>
  );
};
