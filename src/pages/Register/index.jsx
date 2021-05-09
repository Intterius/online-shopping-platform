import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useStyles } from './styles';
import { useFormValidation } from '../../utils/FormValidation';
import { Alert } from '@material-ui/lab';
import { useState } from 'react';
import DescriptiveAccountHeader from '../../components/DescriptiveAccountHeader';
import DashboardHeader from '../../components/DashboardHeader';
import axios from 'axios';

const Register = () => {
  const classes = useStyles();
  const [fields, setFields] = useFormValidation({
    username: '',
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
      return;
    } else {
      try {
        axios
          .post('http://localhost:8080/sign-in/register', {
            username: fields.username,
            email: fields.email.input,
            password: fields.password.input,
          })
          .then(setValidationStatus(true));
        e.target.reset();
      } catch (err) {
        setValidationStatus(false);
        console.log(err)
      }
    }
  };

  return (
    <>
      <DashboardHeader />
      <DescriptiveAccountHeader title={'Create Account'} />
      <form className={classes.registerForm} onSubmit={handleSumit}>
        {showStatus()}
        <TextField
          variant='outlined'
          margin='normal'
          className={classes.input}
          required
          id='username'
          label='Username'
          name='username'
          autoComplete='username'
          autoFocus
          type='text'
          onChange={setFields}
          inputProps={{
            minLength: 3,
            maxLength: 30,
          }}
        />
        <TextField
          variant='outlined'
          margin='normal'
          className={classes.input}
          required
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          type='email'
          onChange={setFields}
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
          onChange={setFields}
          error={fields.password.error ? true : false}
          helperText={fields.password.error}
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

export default Register;
