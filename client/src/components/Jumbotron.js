import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import AuthentificationForm from './AuthentificationForm';
import RadioOption from "./options/RadioOption";
import CheckboxOption from "./options/CheckboxOption";
import ToggleOption from "./options/ToggleOption";
import SliderOption from "./options/SliderOption";
import Pagination from "./Pagination";
import Header from "./Header";

import { getQuestion } from "../actions/questionAction";
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
    '@media (max-width: 320px)': {
      position: 'static',
      width: '300px'
    },
  },
  jumbotron: {
    border: '1px solid #D2D2D2',
    borderRadius: '5px',
    padding: '0 56px 56px',
    width: '50%',
    height: '50%',
    margin: 'auto',
    boxShadow: '4px 13px 18px 1px rgba(0,0,0,0.24)',
    '@media (max-width: 320px)': {
      padding: '0 96px 56px 10px'
    },
  },
  question: {
    fontSize: '4em',
    fontWeight: 400,
    lineHeight: '1.5',
    margin: '100px 0 20px 0',
    '@media (max-width: 320px)': {
      fontSize: '20px',
      margin: '30px 0 10px 0',
      width: '250px'
    },
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    '@media (max-width: 320px)': {
      position: 'relative',
      top: '70px',
      right: '25px',
      maxWidth: '100%',
      marginTop: 20,
      justifyContent: 'flex-start',
    },
  },
  monster: {
    width: '370px',
    height: '280px',
    margin: '0 auto',
    '@media (max-width: 320px)': {
      width: '200px',
      height: '150px',
    },
  },
}));

function Jumbotron(props) {
  const { question, getQuestion, handleNextPage, authenticateUser } = props;
  const classNames = useStyles();
  let monsterImage = PageTwoMonster;
  let FormComponent = null;

  if (!question.question && authenticateUser === false) {
    getQuestion(1, props.auth.access_token);    
  }

  const goToNextPage = () => {
    const questionId = question.id ? question.id + 1 : 1;
    getQuestion(questionId, props.auth.access_token);
  };

  switch(question.optionType) {
    case "radio":
      monsterImage = PageThreeMonster;
      FormComponent = (
        <RadioOption
          goToNextPage={goToNextPage}
          formData={question}
          buttonStyle={classNames.submitButton}
        />
      );
      break;
    case "checkbox":
      monsterImage = PageFourMonster;
      FormComponent = (
        <CheckboxOption
          goToNextPage={goToNextPage}
          formData={question}
          buttonStyle={classNames.submitButton}
        />
      );
      break;
    case "toggle":
      monsterImage = PageSevenMonster;
      FormComponent = (
        <ToggleOption 
          goToNextPage={goToNextPage}
          formData={question}
          buttonStyle={classNames.submitButton}
        />
      );
      break;
    case "slider":
      monsterImage = PageEightMonster;
      FormComponent = (
        <SliderOption 
          goToNextPage={handleNextPage}
          formData={question}
          buttonStyle={classNames.submitButton}
        />
      );
      break;
    default:
      monsterImage = PageEightMonster;
      FormComponent = authenticateUser === false 
        ? FormComponent
        : <AuthentificationForm
          goToNextPage={handleNextPage}
        />
      break;
  }

  return (
    <>
      <Header />
      { 
        FormComponent &&
        <div className={classNames.groupedJumbotron}>
          <img src={monsterImage} className={classNames.monster} alt="Monster crown"/>
          <div className={classNames.jumbotron}>
            <Pagination 
              min={question.id < 2 ? question.id + 1 : question.id}
              max={4}
            />
            <p className={classNames.question}>{ question.question }</p>
            {  FormComponent }
          </div>
        </div>
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  question: state.question,
  step: state.step,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getQuestion },
)(Jumbotron);
