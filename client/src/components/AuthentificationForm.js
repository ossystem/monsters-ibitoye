import React, { useState } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import NextButton from "./NextButton";

import { BUTTON_COLORS } from "../helpers/constants";

const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '&:hover .MuiInput-underline': {
      borderBottomColor: 'green',
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

export default function AuthentificationForm(props) {
  const { handleSubmit } = props;
  const [values, setValues] = useState({
    email: '',
    password: '',
    emailError: '',
    authFailedError: '',
  });
  const classNames = useStyles();

  const getButtonColor = () => {
    if (values.email.length && values.password.length && !values.emailError.length) {
      return BUTTON_COLORS.GREEN.TEXT;
    }

    return BUTTON_COLORS.DISABLED.TEXT;
  };

  const handleChange = name => event => {
    let emailError = 'Email is not valid';

    if (name === 'email') {
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;

      if (!pattern.test(event.target.value)) {
        console.log(values);
        return setValues({ 
          ...values,
          [name]: event.target.value,
          emailError,
        });
      } else {
        emailError = ''
      }
    }

    setValues({ 
      ...values,
      emailError,
      [name]: event.target.value,
    });
  };

  const authenticateUser = event => {
    event.preventDefault();
    // Send username and password to API
    // if failed then update values.authError
    // if passed then send update props with token and authStatus
    handleSubmit()
  };

  return (
    <form className={classNames.container}>
      <CustomTextField
        id="email"
        type="email"
        error={values.emailError.length ? true : false}
        helperText={values.emailError}
        required={true}
        label="Your Email"
        className={classNames.textField}
        value={values.email}
        onChange={handleChange('email')}
        margin="normal"
      />
      <CustomTextField
        id="password"
        type="password"
        required={true}
        error={values.authFailedError.length ? true : false}
        helperText={values.authFailedError}
        label="Your Password"
        className={classNames.textField}
        value={values.password}
        onChange={handleChange('password')}
        margin="normal"
      />
      <div className={classNames.submitButton}>
        <NextButton
          text="Submit"
          color={getButtonColor()}
          handleSubmit={authenticateUser}
        />
      </div>
    </form>
  );
};
