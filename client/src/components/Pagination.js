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
  },
}));

export default function Pagination({ min = 1, max = 4 }) {
  const text = `${min} from ${max}`;
  const classNames = useStyles();

  return (
    <p className={classNames.pagination}>{text}</p>
  )
};
