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
  },
  p: {
    color: COLORS.LIGHT_GREEN,
  },
}));

export default function Header() {
  const classNames = useStyles();

  return (
    <div className={classNames.header}>
      <img src={Logo} className={classNames.logo} alt="Monster logo"/>
      <p className={classNames.p}><font size="+2">Found your monsters</font></p>
    </div>
  );
};
