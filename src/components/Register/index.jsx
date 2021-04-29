import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useStyles } from './styles';
import * as EmailValidator from 'email-validator';
import DescriptiveAccountHeader from '../DescriptiveAccountHeader';

const Login = () => {
  const classes = useStyles();
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const emailValidation = (e) => {
    const { value } = e.target;
    if (!EmailValidator.validate(value)) {
      setUserInput({ email: value });
      setErrors({ email: 'Please, introduce a valid email address.' });
    } else {
      setUserInput({ email: value });
      setErrors({ email: '' });
    }
  };

  const passwordValidation = (e) => {
    const { value } = e.target;
    const validation = new RegExp(/^([a-zA-Z0-9_-]){5,10}$/);
    if (validation.test(value)) {
      setUserInput({ password: value });
      setErrors({ password: '' });
    } else {
      setUserInput({ password: value });
      setErrors({
        password: 'Password must contain 5 to 10 letters and numbers.',
      });
    }
  };

  return (
    <>
      <DescriptiveAccountHeader title={'Create Account'} />
      <form
        className={classes.registerForm}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TextField
          variant='outlined'
          margin='normal'
          style={{ width: '350px' }}
          required
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          autoFocus
          type='email'
          onChange={emailValidation}
          error={errors.email ? true : false}
          helperText={errors.email}
        />

        <TextField
          variant='outlined'
          margin='normal'
          required
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
          type='password'
          onChange={passwordValidation}
          error={errors.password ? true : false}
          helperText={errors.password}
          inputProps={{
            minLength: 5,
            maxLength: 10,
          }}
        />
        <Grid container justify='center'>
          <Button
            type='submit'
            variant='outlined'
            fullWidth
            className={classes.registerBtn}
          >
            Create
          </Button>
        </Grid>
        <Box
          display='grid'
          justifyContent='center'
          style={{ marginTop: '5px' }}
        >
          <Link to='/home' className={classes.returnHomeBtn}>
            <p>Return to store</p>
          </Link>
        </Box>
      </form>
    </>
  );
};

export default Login;
