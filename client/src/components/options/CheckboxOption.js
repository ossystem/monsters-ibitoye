import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { submitAnswer } from "../../actions/answerAction";
import NextButton from "../NextButton";
import { BUTTON_COLORS } from "../../helpers/constants";

const checkBoxStyles = () => ({
  root: {
    '&$checked': {
      color: BUTTON_COLORS.GREEN.HEX_CODE,
    },
  },
  checked: {},
});

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

const useStyles = makeStyles(theme => ({
  formControl: {
    display: 'flex',
    margin: theme.spacing(3),
    '@media (max-width: 320px)': {
      margin: 0,
      padding: 0,
      width: '250px',
      height: '12rem'
    },
  },
}));

function CheckboxOption(props) {
  const { formData: { options }, goToNextPage, buttonStyle } = props;
  const classNames = useStyles();
  const [selectedValue, setSelectedValue] = useState({});

  useEffect(() => {
    const selectedOptions = options.filter(o => Object.keys(selectedValue).includes(`${o.id}`));
    const moreThanOneOption = selectedOptions.length > 1 ? true : false;
    const lastSelecOption = selectedOptions[selectedOptions.length - 1];
    const selectedOptionsInString = selectedOptions
      .reduce((prev, curr) => {
        if (moreThanOneOption) {
          if (curr.option === lastSelecOption.option) {
            return prev.concat(' ', `& ${curr.option}`).replace(/^,\s/, '');
          } else {
            return prev.concat(', ', curr.option).replace(/^,\s/, '');
          }
        } else {
          return prev.concat(curr.option, '');
        }
      }, '')
      .trim();

    const userAnswersLengthFromProps = props.answer.answers.length;
    const userAnswersFromProps = props.answer.answers[userAnswersLengthFromProps - 1];
    console.log('selectedOptionsInString', selectedOptionsInString)
    console.log('userAnswersFromProps', userAnswersFromProps)

    if (userAnswersFromProps === selectedOptionsInString) {
      console.log('next page')
      goToNextPage();
    }

  }, [goToNextPage, options, props.answer.answers, selectedValue]);

  const handleChange = name => event => {
    const newValue = { ...selectedValue, [name]: event.target.checked };

    setSelectedValue(newValue);
  };

  const handleSubmit = event => {
    const questionOptionsId = Object.keys(selectedValue);

    props.submitAnswer({ questionOptionsId });
  };

  const getButtonColor = () => {
    const stateValues = Object.values(selectedValue);

    if (stateValues.length && stateValues.includes(true)) {
      return BUTTON_COLORS.BLUE.TEXT;
    }

    return BUTTON_COLORS.DISABLED.TEXT;
  };

  return (
    <FormControl component="fieldset" className={classNames.formControl}>
      <FormGroup>
        {
          options.map(({ option, id }) => (
            <FormControlLabel
              key={id}
              control={
                <CustomCheckbox 
                  checked={selectedValue[id] === true} 
                  onChange={handleChange(id)} 
                  value={option}
                  className={classNames.checkBox}
                />
              }
              label={option}
            />
          ))
        }
      </FormGroup>
      <div className={buttonStyle}>
        <NextButton 
          text="Next"
          color={getButtonColor()}
          handleSubmit={handleSubmit}
        />
      </div>
    </FormControl>
  );
};

const mapStateToProps = (state) => ({
  answer: state.answer,
});

export default connect(
  mapStateToProps,
  { submitAnswer },
)(CheckboxOption);
