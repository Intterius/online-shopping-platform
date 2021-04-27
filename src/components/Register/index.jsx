import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  TextField,
  Typography,
  Link as LinkStyle,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import * as EmailValidator from 'email-validator';

const useStyles = makeStyles({
  boxBackground: {
    background: '#89C74A',
  },
  boxTitle: {
    margin: '15px 0',
    color: 'white',
    fontFamily: 'Lemonada, cursive',
    fontWeight: '600',
  },
  breadLinks: {
    marginBottom: '20px',
    color: 'white',
  },
  homeBtn: {
    color: 'white',
    textDecoration: 'none',
    transition: '0.3s ease-in-out',
    '&:hover': {
      textDecoration: 'none',
      color: 'black',
    },
  },
  loginForm: {
    marginTop: '35px',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPassword: {
    transition: '0.3s ease-in-out',
    '&:hover': {
      background: 'transparent',
      color: '#89C74A',
    },
  },
  loginBtn: {
    marginTop: '15px',
    background: '#89C74A',
    color: 'white',
    transition: '0.3s ease-in-out',
    borderRadius: '50px',
    '&:hover': {
      background: '#FF6600',
    },
  },
  createAccBtn: {
    color: 'black',
    transition: '0.3s ease-in-out',
    fontFamily: 'Roboto, sans-serif',
    '&:hover': {
      color: '#89c74a',
    },
  },
  returnHomeBtn: {
    color: 'black',

    transition: '0.3s ease-in-out',
    fontFamily: 'Roboto, sans-serif',
    '&:hover': {
      color: '#89c74a',
    },
  },
});

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

const Login = () => {
  const classes = useStyles();
  const [Errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const emailValidation = (e) => {
    const { name, value } = e.target;
    if (!EmailValidator.validate(value)) {
      setUserInput({ [name]: value });
      setErrors({ [name]: 'Please, introduce a valid email address.' });
    } else {
      setUserInput({ [name]: value });
      setErrors({ [name]: '' });
    }
  };

  const passwordValidation = (e) => {
    const { name, value } = e.target;
    const validation = new RegExp(/^([a-zA-Z0-9_-]){5,10}$/);
    if (validation.test(value) && (value.length >= 5 || value.length <= 10)) {
      setUserInput({ [name]: value });
      setErrors({ [name]: '' });
    } else {
      setUserInput({ [name]: value });
      setErrors({
        [name]: 'Password must contain 5 to 10 letters and numbers.',
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        display='grid'
        justifyContent='center'
        className={classes.boxBackground}
      >
        <Typography component='h1' variant='h4' className={classes.boxTitle}>
          {'Register'}
        </Typography>
        <Breadcrumbs aria-label='breadcrumb' className={classes.breadLinks}>
          <LinkStyle component={Link} to='/home' className={classes.homeBtn}>
            {'Home'}
          </LinkStyle>
          <div>Register</div>
        </Breadcrumbs>
      </Box>
      <form
        className={classes.loginForm}
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
          error={Errors.email ? true : false}
          helperText={Errors.email}
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
          error={Errors.password ? true : false}
          helperText={Errors.password}
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
            className={classes.loginBtn}
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
    </ThemeProvider>
  );
};

export default Login;
