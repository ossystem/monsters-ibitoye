import React from "react";
import ArrowForward from "@material-ui/icons/ArrowForward";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

import { BUTTON_COLORS } from "../helpers/constants";

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '0 2rem',
    fontSize: 30,
    color: 'white',
    whiteSpace: 'nowrap',
    margin: theme.spacing(2),
    maxWidth: '340px',
    border: 0,
    cursor: 'pointer',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      outline: 0,
    },
  },
  blueButton: {
    backgroundColor: BUTTON_COLORS.BLUE.HEX_CODE,
    '&:hover': {
      backgroundColor: BUTTON_COLORS.BLUE.HOVER_HEX_CODE,
    },
  },
  greenButton: {
    backgroundColor: BUTTON_COLORS.GREEN.HEX_CODE,
    '&:hover': {
      backgroundColor: BUTTON_COLORS.GREEN.HOVER_HEX_CODE,
    },
  },
  disabledButton: {
    backgroundColor: BUTTON_COLORS.DISABLED.HEX_CODE,
    cursor: 'not-allowed',
  },
  p: {
    padding: '0 50px',
    fontWeight: 500,
    margin: '28px 30px'
  },
  arrow: {
    width: '100px'
  },
}));

export default function NextButton({ 
  text = 'Start', 
  color = BUTTON_COLORS.BLUE.TEXT,
  handleSubmit
}) {
  const customClassNames = useStyles();
  let buttonColor = '';

  switch(color) {
    case BUTTON_COLORS.BLUE.TEXT:
      buttonColor = customClassNames.blueButton;
      break;
    case BUTTON_COLORS.GREEN.TEXT:
      buttonColor = customClassNames.greenButton;
      break;
    case BUTTON_COLORS.DISABLED.TEXT:
      buttonColor = customClassNames.disabledButton;
      break;
    default:
      buttonColor = customClassNames.blueButton;
  }

  return (
    <button 
      className={classNames(customClassNames.button, buttonColor)} 
      onClick={handleSubmit}
      disabled={buttonColor === customClassNames.disabledButton ? true : false}
    >
      <p className={customClassNames.p}>{text}</p>
      <ArrowForward className={customClassNames.arrow}/>
    </button>
  )
};
