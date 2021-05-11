import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { useFormValidation } from '../../utils/FormValidation';
import DescriptiveAccountHeader from '../../components/DescriptiveAccountHeader';
import ResetPassword from './ResetPassword';
import DashboardHeader from '../../components/DashboardHeader';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Login = () => {
  const classes = useStyles();
  const [resetPasswordForm, setResetPasswordForm] = useState(false);
  const [fields, setValues] = useFormValidation({
    email: '',
    password: '',
  });
  const [validationStatus, setValidationStatus] = useState();
  const [submitDisable, setSubmitDisable] = useState(false);
  const { status } = useSelector((state) => state);
  const history = useHistory();

  const showStatus = () => {
    if (validationStatus === false) {
      return <Alert severity='error'>Wrong email or password!</Alert>;
    } else if (validationStatus === true) {
      return <Alert severity='success'>You have successfully signed in!</Alert>;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fields.email.error || fields.password.error) {
      return;
    } else {
      axios
        .post(
          'https://online-shopping-platform-back.herokuapp.com/sign-in/login',
          {
            email: fields.email.input,
            password: fields.password.input,
          }
        )
        .then((res) => {
          setValidationStatus(true);
          localStorage.setItem('key', res.data.key);
          e.target.reset();
          setTimeout(() => {
            history.push('/home');
            window.location.reload();
          }, 1000);
        })
        .catch((err) => {
          setValidationStatus(false);
        });
    }
  };
  useEffect(() => {
    if (fields.email.error || fields.password.error) {
      setSubmitDisable(true);
    } else {
      setSubmitDisable(false);
    }
    if (status) {
      history.push('/account');
    }
  }, [fields, status, history]);

  return (
    <>
      <DashboardHeader />
      <DescriptiveAccountHeader title={'Account'} />
      {!resetPasswordForm ? (
        <form className={classes.loginForm} onSubmit={handleSubmit}>
          {showStatus()}
          <TextField
            className={classes.input}
            variant='outlined'
            margin='normal'
            required
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            type='email'
            onChange={setValues}
            error={fields.email.error ? true : false}
            helperText={fields.email.error}
          />

          <TextField
            className={classes.input}
            variant='outlined'
            margin='normal'
            required
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={setValues}
            error={fields.password.error ? true : false}
            helperText={fields.password.error}
            inputProps={{
              minLength: 5,
              maxLength: 10,
            }}
          />
          <Box display='grid' justifyContent='center'>
            <Button
              fullWidth
              variant='text'
              className={classes.forgotPassword}
              onClick={() => setResetPasswordForm(true)}
            >
              Forgot your password?
            </Button>
          </Box>
          <Grid container justify='center'>
            <Button
              disabled={submitDisable}
              type='submit'
              variant='outlined'
              fullWidth
              className={classes.loginBtn}
            >
              Log In
            </Button>
          </Grid>
          <Box
            display='grid'
            justifyContent='center'
            style={{ marginTop: '5px' }}
          >
            <Link to='/account/register' className={classes.createAccBtn}>
              <p>Create account</p>
            </Link>
            <Link to='/home' className={classes.returnHomeBtn}>
              <p>Return to store</p>
            </Link>
          </Box>
        </form>
      ) : (
        <ResetPassword
          cancelReset={(resetPasswordForm) =>
            setResetPasswordForm(resetPasswordForm)
          }
        />
      )}
    </>
  );
};

export default Login;
