import React from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import NextButton from "./NextButton";
import Logo from "../assets/logo.png";
import MonsterImageList from "../assets/page_1_monsters.png";
import { BUTTON_COLORS } from "../helpers/constants";

const useStyles = makeStyles(theme => ({
  home: {
    marginTop: '20px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '@media (max-width: 320px)': {
      textAlign: 'center',
      display: 'block',
      margin: '10px auto',
      width: '300px',
      height: '100%',
      padding: 0,
    },
  },
  logo: {
    width: '900px',
    height: '135px',
    '@media (max-width:320px)': {
      width: '80%',
      height: '10%',
    },
  },
  p: {
    color: BUTTON_COLORS.GREEN.HOVER_HEX_CODE,
    fontSize: '30px',
    '@media (max-width:320px)': {
      fontSize: '20px',
      textAlign: 'center',
    },
  },
  monstersImageList: {
    width: '1160px',
    height: '660px',
    '@media (max-width:320px)': {
      width: '90%',
      height: '250px',
      margin: '50px auto'
    },
  },
}));

export default function Home(props) {
  const classNames = useStyles();
  const { handleNextPage } = props;

  return (
    <Container className={classNames.home}>
      <img src={Logo} className={classNames.logo} alt="Monster Logo"/>
      <p className={classNames.p}>Found your monsters</p>
      <img src={MonsterImageList} className={classNames.monstersImageList} alt="Monster List"/>
      <NextButton 
        text="Start"
        color={BUTTON_COLORS.BLUE.TEXT}
        handleSubmit={handleNextPage}
      />
    </Container>
  );
};
