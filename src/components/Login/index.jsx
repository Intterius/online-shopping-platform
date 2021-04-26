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

const useStyles = makeStyles({
  boxBackground: {
    background: '#89C74A',
  },
  boxTitle: {
    margin: '15px 0',
    color: 'white',
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
    '&:hover': {
      color: '#89c74a',
    },
  },
  returnHomeBtn: {
    color: 'black',
    textDecoration: 'none',
    transition: '0.3s ease-in-out',
    '&:hover': {
      color: '#89c74a',
      textDecoration: 'none',
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#89C74A',
    },
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box
          display='grid'
          justifyContent='center'
          className={classes.boxBackground}
        >
          <Typography component='h1' variant='h4' className={classes.boxTitle}>
            Account
          </Typography>
          <Breadcrumbs aria-label='breadcrumb' className={classes.breadLinks}>
            <LinkStyle component={Link} to='/home' className={classes.homeBtn}>
              {'Home'}
            </LinkStyle>
            <div>Account</div>
          </Breadcrumbs>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center' mt={5}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              type='email'
            />

            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              type='password'
              inputProps={{
                minLength: 5,
                maxLength: 10,
                pattern: '^[a-zA-Z0-9]+$',
              }}
            />
            <Grid container justify='center'>
              <Button
                type='submit'
                variant='outlined'
                fullWidth
                className={classes.loginBtn}
              >
                Login
              </Button>
            </Grid>
            <Box
              display='grid'
              justifyContent='center'
              style={{ marginTop: '5px' }}
            >
              <Link to='/account/register' className={classes.createAccBtn}>
                <h3>Create account</h3>
              </Link>
              <Link to='/home' className={classes.returnHomeBtn}>
                <h3>Return to store</h3>
              </Link>
            </Box>
          </form>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
