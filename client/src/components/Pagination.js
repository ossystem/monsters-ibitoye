import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { BUTTON_COLORS } from "../helpers/constants";

const useStyles = makeStyles(theme => ({
  pagination: {
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
    maxWidth: '10rem',
    boxShadow: '4px 13px 18px 1px rgba(0,0,0,0.24)',
    '@media (max-width:320px)': {
      fontSize: '30px',
      width: '100%',
      height: '50px',
      right: '20px',
      marginBottom: '40px',
      lineHeight: '1.6',
      textAlign: 'left',
      paddingLeft: '20px',
      display: 'flex',
      alignItems: 'center'
    },
  },
}));

export default function Pagination({ min = 1, max = 4 }) {
  const text = `${min} from ${max}`;
  const classNames = useStyles();

  return (
    <p className={classNames.pagination}>{text}</p>
  )
};
