import React, { useState } from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Switch from '@material-ui/core/Switch';

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

export default function ToggleOption(props) {
  const { formData: { options }, handleSubmit, buttonStyle } = props;
  const [leftText, rightText] = options;
  const [selected, setSelected] = useState({});
  const classNames = useStyles();

  const handleChange = name => event => {
    setSelected({ ...selected, [name]: event.target.checked });
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
