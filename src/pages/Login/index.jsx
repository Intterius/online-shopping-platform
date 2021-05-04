import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DescriptiveAccountHeader from '../../components/DescriptiveAccountHeader';
import { useState } from 'react';
import ResetPassword from './ResetPassword';
import { useStyles } from './styles';
import { useFormValidation } from '../../utils/FormValidation';
import DashboardHeader from '../../components/DashboardHeader';

const Login = () => {
  const classes = useStyles();
  const [resetPasswordForm, setResetPasswordForm] = useState(false);
  const [fields, setValues] = useFormValidation({
    email: '',
    password: '',
  });

  return (
    <>
      <DashboardHeader />
      <DescriptiveAccountHeader title={'Account'} />
      {!resetPasswordForm ? (
        <form
          className={classes.loginForm}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
