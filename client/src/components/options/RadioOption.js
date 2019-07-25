import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from "@material-ui/core/FormControl";

import { submitAnswer } from "../../actions/answerAction";
import NextButton from "../NextButton";
import { BUTTON_COLORS } from "../../helpers/constants";

const CustomRadio = withStyles({
  root: {
    '&$checked': {
      color: BUTTON_COLORS.GREEN.HEX_CODE,
    },
  },
  checked: {},
})(Radio);

const useStyles = makeStyles(theme => ({
  formControl: {
    display: 'flex',
    margin: theme.spacing(3),
  },
  radioStyling: {
    margin: theme.spacing(1, 0),
  },
}));

function RadioOption(props) {
  const { formData: { options }, goToNextPage, buttonStyle } = props;
  const [value, setValue] = useState('');
  const classNames = useStyles();

  useEffect(() => {
    const userAnswersLength = props.answer.answers.length;
    const userAnswers = props.answer.answers[userAnswersLength - 1];

    if (userAnswers === value) {
      goToNextPage();
    }
  }, [goToNextPage, props.answer.answers, value]);

  const handleChange = event => {
    setValue(event.target.value);
  }

  const handleSubmit = event => {
    const [selectedOption] = options.filter(o => o.option === value);

    props.submitAnswer({ questionOptionsId: [selectedOption.id] });
  }

  const getButtonColor = () => {
    if (value.length) {
      return BUTTON_COLORS.BLUE.TEXT;
    }

    return BUTTON_COLORS.DISABLED.TEXT;
  };

  return (
    <FormControl component="fieldset" className={classNames.formControl}>
      <RadioGroup
        aria-label="Question"
        name="question"
        className={classNames.radioStyling}
        value={value}
        onChange={handleChange}
      >
        { options.map(({ option, id }) => (
            <FormControlLabel key={id} value={option} control={<CustomRadio />} label={option} />
          ))
        }
      </RadioGroup>

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
)(RadioOption);
