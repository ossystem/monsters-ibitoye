import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from '@material-ui/core/FormControlLabel';

import NextButton from "../NextButton";
import { BUTTON_COLORS } from "../../helpers/constants";

const checkBoxStyles = () => ({
  root: {
    '&$checked': {
      color: BUTTON_COLORS.GREEN.HEX_CODE,
    },
  },
  checked: {},
});

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

const useStyles = makeStyles(theme => ({
  formControl: {
    display: 'flex',
    margin: theme.spacing(3),
  },
}));

export default function CheckboxOption(props) {
  const { formData: { options }, handleSubmit, buttonStyle } = props;
  const classNames = useStyles();
  const [selectedValue, setSelectedValue] = useState({});

  const handleChange = name => event => {
    const newValue = { ...selectedValue, [name]: event.target.checked };

    setSelectedValue(newValue);
  };

  const getButtonColor = () => {
    const stateValues = Object.values(selectedValue);

    if (stateValues.length && stateValues.includes(true)) {
      return BUTTON_COLORS.BLUE.TEXT;
    }

    return BUTTON_COLORS.DISABLED.TEXT;
  };

  return (
    <FormControl component="fieldset" className={classNames.formControl}>
      <FormGroup>
        {
          options.map(({ option, id }) => (
            <FormControlLabel
              key={id}
              control={
                <CustomCheckbox 
                  checked={selectedValue[id] === true} 
                  onChange={handleChange(id)} 
                  value={option}
                  className={classNames.checkBox}
                />
              }
              label={option}
            />
          ))
        }
      </FormGroup>
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
