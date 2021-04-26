import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link as LinkStyle } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

function Copyright() {
  return (
    <Typography
      component={'span'}
      variant='body2'
      color='textSecondary'
      align='center'
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        With
        <FavoriteRoundedIcon color='secondary' style={{ margin: '0 3px' }} />
        from Endava's Interns!
      </div>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://picsum.photos/3840/2160)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form
            className={classes.form}
            onSubmit={(e) => {
              e.preventDefault();
              history.push('/home');
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
              inputProps={{ maxLength: 20, minLength: 8 }}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign In
            </Button>

            <Grid container justify='center'>
              <LinkStyle component={Link} to='/sign-up' variant='body2'>
                {"Don't have an account? Sign Up"}
              </LinkStyle>
            </Grid>
            <Box mt={3}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
