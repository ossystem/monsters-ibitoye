import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from "@material-ui/core/FormControl";

import NextButton from "../NextButton";
import { BUTTON_COLORS } from "../../helpers/constants";

const CustomRadio = withStyles({
  root: {
    '&$checked': {
      color: BUTTON_COLORS.GREEN.HEX_CODE,
    },
  },
  checked: {},
})(Radio);

const useStyles = makeStyles(theme => ({
  formControl: {
    display: 'flex',
    margin: theme.spacing(3),
  },
  radioStyling: {
    margin: theme.spacing(1, 0),
  },
}));

export default function RadioOption(props) {
  const { formData: { options }, goToNextPage, buttonStyle } = props;
  const [value, setValue] = useState('');
  const classNames = useStyles();

  const handleChange = event => {
    setValue(event.target.value);
  }

  const handleSubmit = event => {
    goToNextPage();
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
            <FormControlLabel key={id} value={option} control={<CustomRadio />} label={option} />
          ))
        }
      </RadioGroup>

      <div className={buttonStyle}>
        <NextButton 
          text="Next"
          color={getButtonColor()}
          handleSubmit={handleSubmit}
        />
      </div>
    </FormControl>
  );
};
