import React, { useState } from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from '@material-ui/core/Slider';

import NextButton from "../NextButton";
import { BUTTON_COLORS } from "../../helpers/constants";

const useStyles = makeStyles(() => ({
  toggle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

const sliderStyles = () => ({
  root: {
    color: BUTTON_COLORS.GREEN.HEX_CODE,
    width: 200,
    margin: '2rem',
  },
  thumb: {
    backgroundColor: BUTTON_COLORS.GREEN.HOVER_HEX_CODE,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    }
  },
});

const CustomSlider = withStyles(sliderStyles)(Slider);

export default function SliderOption(props) {
  const { formData: { options }, handleSubmit } = props;
  const [leftText, rightText] = options;
  const [value, setValue] = useState(50);
  const classNames = useStyles();

  const handleChange = (event, newValue) => {
    console.log('event', event, '\n\nnewValue: ',newValue)
    setValue(newValue);
  };

  return (
    <div>
      <div className={classNames.toggle}>
        <p>{ leftText.option }</p>
        <CustomSlider 
          value={value}
          onChange={handleChange}
          aria-labelledby="continuous-slider"
        />
        <p>{ rightText.option }</p>
      </div>
      <div>
        <NextButton
          text="Submit"
          color={BUTTON_COLORS.GREEN.TEXT}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
