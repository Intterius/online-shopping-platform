import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import { useState } from 'react';
import { useStyles } from './styles';
import { useFormValidation } from '../../utils/FormValidation';
import DescriptiveAccountHeader from '../../components/DescriptiveAccountHeader';
import ResetPassword from './ResetPassword';
import DashboardHeader from '../../components/DashboardHeader';

const Login = () => {
  const classes = useStyles();
  const [resetPasswordForm, setResetPasswordForm] = useState(false);
  const [fields, setValues] = useFormValidation({
    email: '',
    password: '',
  });

  const history = useHistory();

  const [validationStatus, setValidationStatus] = useState();

  const showStatus = () => {
    if (validationStatus === false) {
      return <Alert severity='error'>Such user already exists!</Alert>;
    } else if (validationStatus === true) {
      return <Alert severity='success'>You have successfully registerd!</Alert>;
    }
  };

  const handleSumit = (e) => {
    e.preventDefault();
    if (fields.email.error || fields.password.error) {
      setValidationStatus(false);
      console.log('invalid');
      return;
    } else {
      setValidationStatus(true);
      localStorage.setItem('auth', true);
      history.push('/home');
      e.target.reset();
      setTimeout(() => {
        console.log('everything ok');
      }, 1000);
    }
  };

  return (
    <>
      <DashboardHeader />
      <DescriptiveAccountHeader title={'Account'} />
      {!resetPasswordForm ? (
        <form className={classes.loginForm} onSubmit={handleSumit}>
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
              type='submit'
              variant='outlined'
              fullWidth
              className={classes.loginBtn}
            >
              Sign In
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
