import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import NextButton from "./NextButton";
import { logIn } from "../actions/authAction";
import { usePrevious } from "../hooks";

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
    '@media (max-width: 320px)': {
      width: 200,
    },
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    '@media (max-width: 320px)': {
      position: 'relative',
      top: '170px',
      left: '110px',
      maxWidth: '100%',
      marginTop: 20
    },
  },
}));

function AuthentificationForm(props) {
  const { goToNextPage } = props;
  const [values, setValues] = useState({
    email: '',
    password: '',
    emailError: '',
    authFailedError: props.auth.error,
  });
  const classNames = useStyles();
  const prevError = usePrevious(props.auth.error);

  useEffect(() => {
    const authError = props.auth.error;
    if (props.auth.error && values.authFailedError !== authError) {
      setValues({
        ...values,
        authFailedError: props.auth.error,
      });
      return;
    }

    if (props.auth.access_token) {
      goToNextPage();
    }

  }, [goToNextPage, prevError, props.auth, values]);

  const getButtonColor = () => {
    if (values.email.length && values.password.length && !values.emailError.length) {
      return BUTTON_COLORS.GREEN.TEXT;
    }

    return BUTTON_COLORS.DISABLED.TEXT;
  };

  const handleChange = name => event => {
    let emailError = '';
    let authFailedError = '';
  
    if (name === 'email') {
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;

      if (!pattern.test(event.target.value)) {
        console.log(values);
        return setValues({ 
          ...values,
          [name]: event.target.value,
          emailError: 'Email is not valid',
        });
      } else {
        emailError = ''
      }
    }

    setValues({ 
      ...values,
      emailError,
      authFailedError,
      [name]: event.target.value,
    });
  };

  const authenticateUser = async event => {
    event.preventDefault();

    props.logIn({
      email: values.email,
      password: values.password,
    });
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logIn },
  )(AuthentificationForm);
