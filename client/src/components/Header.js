import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Logo from "../assets/logo2.png";
import { COLORS } from "../helpers/constants";

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    maxWidth: '500px',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(5),
  },
  logo: {
    width: '418px',
    height: '82px',
    '@media (max-width: 320px)': {
      width: '80%',
      height: '50%',
    },
  },
  p: {
    color: COLORS.LIGHT_GREEN,
    fontSize: '30px',
    '@media (max-width:320px)': {
      fontSize: '20px',
      textAlign: 'center',
      marginBottom: '40px'
    },
  },
}));

export default function Header() {
  const classNames = useStyles();

  return (
    <div className={classNames.header}>
      <img src={Logo} className={classNames.logo} alt="Monster logo"/>
      <p className={classNames.p}>Found your monsters</p>
    </div>
  );
};
