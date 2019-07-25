import React from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import NextButton from "./NextButton";
import Logo from "../assets/logo.png";
import MonsterImageList from "../assets/page_1_monsters.png";
import { BUTTON_COLORS, COLORS } from "../helpers/constants";

const useStyles = makeStyles(theme => ({
  home: {
    marginTop: '20px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  logo: {
    width: '900px',
    height: '135px',
  },
  p: {
    color: COLORS.LIGHT_GREEN,
  },
  monstersImageList: {
    width: '1160px',
    height: '660px',
  },
}));

export default function Home(props) {
  const classNames = useStyles();
  const { handleNextPage } = props;

  return (
    <Container className={classNames.home}>
      <img src={Logo} className={classNames.logo} alt="Monster Logo"/>
      <p className={classNames.p}><font size="+3">Found your monsters</font></p>
      <img src={MonsterImageList} className={classNames.monstersImageList} alt="Monster List"/>
      <NextButton 
        text="Start"
        color={BUTTON_COLORS.BLUE.TEXT}
        handleSubmit={handleNextPage}
      />
    </Container>
  );
};
