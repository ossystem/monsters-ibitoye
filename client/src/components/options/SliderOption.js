import React, { useState, useEffect } from "react"
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from '@material-ui/core/Slider';

import { submitAnswer } from "../../actions/answerAction";
import NextButton from "../NextButton";
import { BUTTON_COLORS } from "../../helpers/constants";

const useStyles = makeStyles(() => ({
  toggle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

const CustomSlider = withStyles({
  root: {
    color: BUTTON_COLORS.GREEN.HEX_CODE,
    width: 200,
    margin: '2rem',
  },
  thumb: {
    backgroundColor: BUTTON_COLORS.GREEN.HOVER_HEX_CODE,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    }
  },
})(Slider);

function SliderOption(props) {
  const { formData: { options }, goToNextPage, buttonStyle } = props;
  const [leftText, rightText] = options;
  const [value, setValue] = useState(50);
  const classNames = useStyles();

  useEffect(() => {
    const selectedOptions = value <= 50 ? leftText.option : rightText.option;

    const userAnswersLengthFromProps = props.answer.answers.length;
    const userAnswersFromProps = props.answer.answers[userAnswersLengthFromProps - 1];

    if (selectedOptions === userAnswersFromProps) {
      goToNextPage();
    }
  }, [goToNextPage, leftText.option, props.answer.answers, rightText.option, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = event => {
    const questionOptionsId = value <= 50 ? [leftText.id] : [rightText.id];

    props.submitAnswer({ questionOptionsId });
  };

  return (
    <div>
      <div className={classNames.toggle}>
        <p>{ leftText.option }</p>
        <CustomSlider 
          value={value}
          onChange={handleChange}
          aria-labelledby="continuous-slider"
        />
        <p>{ rightText.option }</p>
      </div>
      <div className={buttonStyle}>
        <NextButton
          text="Submit"
          color={BUTTON_COLORS.GREEN.TEXT}
          handleSubmit={handleSubmit}
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
  { submitAnswer },
)(SliderOption);