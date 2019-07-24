import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import RadioOption from "./options/RadioOption";
import CheckboxOption from "./options/CheckboxOption";
import ToggleOption from "./options/ToggleOption";
import SliderOption from "./options/SliderOption";
import Pagination from "./Pagination";
import Header from "./Header";

import { TOGGLE_QUESTION, PROGRESS_QUESTION } from "../helpers/constants";

const useStyles = makeStyles(theme => ({
  root: {
    // marginBottom: '500px',
    // display: 'flex',
    // justifyContent: 'center',
  },
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
    margin: '100px 0 20px 0',
  },
}));

const fetchQuestion = () => PROGRESS_QUESTION;

export default function Jumbotron(props) {
  // const { handleSubmit } = props;
  const classNames = useStyles();
  const [question, setQuestion] = useState(fetchQuestion());

  const handleSubmit = event => {
    event.preventDefault();

    console.log('Submitting form now');
  };

  function getOptionComponent() {
    fetchQuestion()
    switch(question.optionType) {
      case "radio":
        return (
          <RadioOption
            handleSubmit={handleSubmit}
            formData={question}
          />
        );
      case "checkbox":
        return (
          <CheckboxOption
            handleSubmit={handleSubmit}
            formData={question}
          />
        );
      case "toggle":
        return (
          <ToggleOption 
            handleSubmit={handleSubmit}
            formData={question}
          />
        );
      case "slider":
        return (
          <SliderOption 
            handleSubmit={handleSubmit}
            formData={question}
          />
        );

      default:
        return (
          <RadioOption
            handleSubmit={handleSubmit}
            formData={question}
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
