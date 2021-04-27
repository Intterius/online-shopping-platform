import { Box, Button, Grid, TextField } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as EmailValidator from 'email-validator';
import { useState } from 'react';

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#89C74A',
    },
  },
});

const useStyles = makeStyles({
  resetTitle: {
    fontSize: '27px',
    fontFamily: 'Lemonada, cursive',
    fontWeight: '400',
  },
  resetForm: {
    marginTop: '35px',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtn: {
    marginTop: '15px',
    background: '#89C74A',
    color: 'white',
    transition: '0.3s ease-in-out',
    borderRadius: '50px',
    '&:hover': {
      background: '#FF6600',
    },
  },
  cancelBtn: {
    marginTop: '15px',
    transition: '0.3s ease-in-out',
    '&:hover': {
      background: 'transparent',
      color: '#89C74A',
    },
  },
});

const ResetPassword = ({ cancelReset }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [emailError, setError] = useState('');

  const emailValidation = (e) => {
    const { value } = e.target;
    if (!EmailValidator.validate(value)) {
      setEmail(value);
      setError('Please, introduce a valid email address.');
    } else {
      setEmail(value);
      setError('');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        display='grid'
        justifyContent='center'
        alignItems='center'
        className={classes.resetForm}
      >
        <Box
          display='grid'
          justifyContent='center'
          alignItems='center'
          textAlign='center'
        >
          <h2 className={classes.resetTitle}>Reset your password</h2>
          <p style={{ fontSize: '17px' }}>
            We will send you an email to reset your password.
          </p>
        </Box>
        <TextField
          variant='outlined'
          margin='normal'
          required
          style={{ width: '350px' }}
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          autoFocus
          type='email'
          onChange={emailValidation}
          error={emailError ? true : false}
          helperText={emailError}
        />
        <Grid container justify='center'>
          <Button
            type='submit'
            variant='outlined'
            fullWidth
            className={classes.submitBtn}
          >
            Submit
          </Button>
        </Grid>
        <Grid container justify='center'>
          <Button
            className={classes.cancelBtn}
            fullWidth
            variant='text'
            onClick={() => {
              cancelReset(false);
            }}
          >
            Cancel
          </Button>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default ResetPassword;
