import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import RadioOption from "./options/RadioOption";
import CheckboxOption from "./options/CheckboxOption";
import ToggleOption from "./options/ToggleOption";
import SliderOption from "./options/SliderOption";
import Pagination from "./Pagination";
import Header from "./Header";
import AuthentificationForm from './AuthentificationForm';

import { QUESTION_CHECKBOX, QUESTION_SLIDER, QUESTION_TOGGLE, QUESTION_RADIO } from "../helpers/constants";
import PageTwoMonster from "../assets/page_2_monster.png";
import PageThreeMonster from "../assets/page_3_monster.png";
import PageFourMonster from "../assets/page_4_monster.png";
import PageSevenMonster from "../assets/page_7_monster.png";
import PageEightMonster from "../assets/page_8_monster.png";

const useStyles = makeStyles(_ => ({
  groupedJumbotron: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    marginBottom: '50px',
  },
  jumbotron: {
    border: '1px solid #D2D2D2',
    borderRadius: '5px',
    padding: '0 56px 56px',
    width: '50%',
    height: '50%',
    margin: 'auto',
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
  monster: {
    width: '370px',
    height: '280px',
    margin: '0 auto',
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
  let monsterImage = PageTwoMonster;
  let FormComponent = null;

  const handleSubmit = event => {
    console.log('Submitting form now');
  };

  switch(question.optionType) {
    case "radio":
      monsterImage = PageThreeMonster;
      FormComponent = (
        <RadioOption
          handleSubmit={handleSubmit}
          formData={question}
          buttonStyle={classNames.submitButton}
        />
      );
      break;
    case "checkbox":
      monsterImage = PageFourMonster;
      FormComponent = (
        <CheckboxOption
          handleSubmit={handleSubmit}
          formData={question}
          buttonStyle={classNames.submitButton}
        />
      );
      break;
    case "toggle":
      monsterImage = PageSevenMonster;
      FormComponent = (
        <ToggleOption 
          handleSubmit={handleSubmit}
          formData={question}
          buttonStyle={classNames.submitButton}
        />
      );
      break;
    case "slider":
      monsterImage = PageEightMonster;
      FormComponent = (
        <SliderOption 
          handleSubmit={handleSubmit}
          formData={question}
          buttonStyle={classNames.submitButton}
        />
      );
      break;
    default:
      FormComponent = (
        <AuthentificationForm
          handleSubmit={handleSubmit}
        />
      );
      break;
  }

  return (
    <>
      <Header />
      <div className={classNames.groupedJumbotron}>
        <img src={monsterImage} className={classNames.monster} alt="Monster crown"/>
        <div className={classNames.jumbotron}>
          <Pagination 
            min={1}
            max={5}
          />
          <p className={classNames.question}>{ question.question }</p>
          { FormComponent }
        </div>
      </div>
    </>
  );
};
