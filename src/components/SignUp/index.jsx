import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link as LinkStyle } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import { Link, useHistory } from 'react-router-dom';

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
  image: {
    backgroundImage: 'url(https://picsum.photos/3840/2160)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    height: '100vh',
    backgroundPosition: 'center',
    minWidth: '100%',
    minHeight: '100%',
    top: '0',
    left: '0',
  },
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container component='main' className={classes.image}>
      <CssBaseline />
      <Container maxWidth='xs' style={{ background: 'rgba(255,255,255,0.8)' }}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <form
            className={classes.form}
            onSubmit={(e) => {
              e.preventDefault();
              history.push('/home');
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='fname'
                  name='firstName'
                  variant='outlined'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                  inputProps={{ maxLength: 20, minLength: 3 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='lname'
                  inputProps={{ maxLength: 20, minLength: 3 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  type='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  inputProps={{ maxLength: 20, minLength: 8 }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value='allowExtraEmails' color='primary' />
                  }
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify='flex-end'>
              <Grid item>
                <LinkStyle component={Link} to='/sign-in' variant='body2'>
                  Already have an account? Sign in
                </LinkStyle>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={3}>
          <Copyright />
        </Box>
      </Container>
    </Grid>
  );
}
