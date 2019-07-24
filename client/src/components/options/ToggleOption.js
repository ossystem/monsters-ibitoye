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
}));

const switchStyles = () => ({
  switchBase: {
    color: COLORS.LIGHT_GREEN,
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
  const { formData: { options }, handleSubmit } = props;
  const [leftText, rightText] = options;
  const [selected, setSelected] = useState({});
  const classNames = useStyles();

  const handleChange = name => event => {
    setSelected({ ...selected, [name]: event.target.checked });
  };

  return (
    <div>
      <div className={classNames.toggle}>
        <p>{ leftText.option }</p>
        <CustomSwitch 
          checked={selected[leftText.option] === true ? true : false}
          value={leftText.option}
          onChange={handleChange(leftText.option)}
        />
        <p>{ rightText.option }</p>
      </div>
      <div>
        <NextButton 
          text="Next"
          color={BUTTON_COLORS.BLUE.TEXT}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
