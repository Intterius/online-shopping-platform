import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { useFormValidation } from '../../utils/FormValidation';
import { useSelector } from 'react-redux';
import DescriptiveAccountHeader from '../../components/DescriptiveAccountHeader';
import ResetPassword from './ResetPassword';
import DashboardHeader from '../../components/DashboardHeader';
import useLoginationSubmit from '../../utils/LoginationSubmit';

const Login = () => {
  const classes = useStyles();
  const [resetPasswordForm, setResetPasswordForm] = useState(false);
  const [fields, setValues] = useFormValidation({
    email: '',
    password: '',
  });
  const [submitDisable, setSubmitDisable] = useState(false);
  const { status } = useSelector((state) => state.tokenReducer);
  const [handleSubmit, showStatus] = useLoginationSubmit(fields);
  const history = useHistory();

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
