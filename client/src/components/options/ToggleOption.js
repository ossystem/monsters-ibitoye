import React, { useState, useEffect } from "react"
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Switch from '@material-ui/core/Switch';

import { submitAnswer } from "../../actions/answerAction";
import NextButton from "../NextButton";
import { BUTTON_COLORS, COLORS } from "../../helpers/constants";

const useStyles = makeStyles(() => ({
  toggle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftP: {
    marginRight: '2rem',
    fontWeight: 300,
  },
  rightP: {
    marginLeft: '2rem',
    fontWeight: 300,
  },
}));

const switchStyles = () => ({
  switchBase: {
    color: COLORS.BLACK,
    '&$checked': {
      color: BUTTON_COLORS.GREEN.HOVER_HEX_CODE,
    },
    '&$checked + $track': {
      backgroundColor: COLORS.LIGHT_GREEN,
    },
  },
  checked: {},
  track: {},
});

const CustomSwitch = withStyles(switchStyles)(Switch);

function ToggleOption(props) {
  const { formData: { options }, goToNextPage, buttonStyle } = props;
  const [leftText, rightText] = options;
  const [selected, setSelected] = useState({});
  const classNames = useStyles();

  useEffect(() => {
    const ifLeftText = Object.values(selected);
    const selectedOptions = ifLeftText === true ? leftText.option : rightText.option;

    const userAnswersLengthFromProps = props.answer.answers.length;
    const userAnswersFromProps = props.answer.answers[userAnswersLengthFromProps - 1];

    if (selectedOptions === userAnswersFromProps) {
      goToNextPage();
    }
  }, [goToNextPage, leftText.option, props.answer.answers, rightText.option, selected]);

  const handleChange = name => event => {
    setSelected({ ...selected, [name]: event.target.checked });
  };

  const handleSubmit = event => {
    const ifLeftText = Object.values(selected);
    const questionOptionsId = ifLeftText === true ? [leftText.id] : [rightText.id];

    props.submitAnswer({ questionOptionsId });
  };

  return (
    <div>
      <div className={classNames.toggle}>
        <p className={classNames.leftP}>{ leftText.option }</p>
        <CustomSwitch 
          checked={selected[leftText.option] === true ? true : false}
          value={leftText.option}
          onChange={handleChange(leftText.option)}
        />
        <p className={classNames.rightP}>{ rightText.option }</p>
      </div>
      <div className={buttonStyle}>
        <NextButton 
          text="Next"
          color={BUTTON_COLORS.BLUE.TEXT}
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
)(ToggleOption);
