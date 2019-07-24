import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from "@material-ui/core/FormControl";

import NextButton from "../NextButton";
import { BUTTON_COLORS } from "../../helpers/constants";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
  radioStyling: {
    margin: theme.spacing(1, 0),
  },
}));

export default function RadioOption(props) {
  const { formData: { options }, handleSubmit } = props;
  const [value, setValue] = useState('');
  const classNames = useStyles();

  const handleChange = event => {
    setValue(event.target.value);
  }

  const getButtonColor = () => {
    if (value.length) {
      return BUTTON_COLORS.BLUE.TEXT;
    }

    return BUTTON_COLORS.DISABLED.TEXT;
  };

  return (
    <FormControl component="fieldset" className={classNames.formControl}>
      <RadioGroup
        aria-label="Question"
        name="question"
        className={classNames.radioStyling}
        value={value}
        onChange={handleChange}
      >
        { options.map(({ option, id }) => (
            <FormControlLabel key={id} value={option} control={<Radio />} label={option} />
          ))
        }
      </RadioGroup>
      <NextButton 
        text="Next"
        color={getButtonColor()}
        handleSubmit={handleSubmit}
      />
    </FormControl>
  );
};