import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { BUTTON_COLORS } from "../helpers/constants";

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid #D2D2D2',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    width: '253px',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '4px 13px 18px 1px rgba(0,0,0,0.24)',
    '@media (max-width: 320px)': {
      width: '260px',
      padding: 0,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
  tag: {
    borderRadius: 5,
    lineHeight: '1.2',
    padding: '16px 40px',
    backgroundColor: BUTTON_COLORS.GREEN.HEX_CODE,
    textAlign: 'center',
    color: 'white',
    fontSize: '40px',
    position: 'relative',
    top: '10px',
    right: '110px',
    marginBottom: '20px',
    boxShadow: '4px 13px 18px 1px rgba(0,0,0,0.24)',
    '@media (max-width: 320px)': {
      right: '70px',
      fontSize: '30px',
    }
  },
  answer: {
    display: 'flex',
    borderRadius: '50%',
    border: '2px solid #D2DF11',
    height: '100px',
    padding: '10px',
    width: '100px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '8px',
    '@media (max-width: 320px)': {
      // right: '70px',
      // fontSize: '30px',
      paddingRight: '5px',
      marginRight: '6px',
    }
  },
}));

export default function ResultBox(props) {
  const { answers } = props;
  const classNames = useStyles();

  return (
    <div className={classNames.root}>
      <span className={classNames.tag}>You'r</span>
      {answers.map((answer, key) => (
        <p key={key} className={classNames.answer}>{answer}</p>
      ))}
    </div>
  )
};
