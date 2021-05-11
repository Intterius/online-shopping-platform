import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useStyles } from './styles';
import { useFormValidation } from '../../utils/FormValidation';
import { Alert } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import DescriptiveAccountHeader from '../../components/DescriptiveAccountHeader';
import DashboardHeader from '../../components/DashboardHeader';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Register = () => {
  const classes = useStyles();
  const [fields, setFields] = useFormValidation({
    email: '',
    password: '',
  });
  const [validationStatus, setValidationStatus] = useState();
  const [registerError, setRegisterError] = useState();
  const [submitDisable, setSubmitDisable] = useState(false);
  const { status } = useSelector((state) => state);
  const history = useHistory();

  const showStatus = () => {
    if (validationStatus === false) {
      return <Alert severity='error'>{registerError}</Alert>;
    } else if (validationStatus === true) {
      return (
        <Alert severity='success'>You have successfully registered!</Alert>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fields.email.error || fields.password.error) {
      return;
    } else {
      axios
        .post(
          'https://online-shopping-platform-back.herokuapp.com/sign-in/register',
          {
            email: fields.email.input,
            password: fields.password.input,
          }
        )
        .then((res) => {
          setTimeout(() => {
            setValidationStatus(true);
            e.target.reset();
            axios
              .post(
                'https://online-shopping-platform-back.herokuapp.com/sign-in/login',
                {
                  email: fields.email.input,
                  password: fields.password.input,
                }
              )
              .then((res) => {
                localStorage.setItem('key', res.data.key);
                history.push('/home');
                window.location.reload();
              });
          }, 1000);
        })
        .catch((err) => {
          setValidationStatus(false);
          setRegisterError(err.response.data.error.message);
        });
    }
  };

  useEffect(() => {
    if (fields.email.error || fields.password.error) {
      setSubmitDisable(true);
    } else {
      setSubmitDisable(false);
    }
    if (status) {
      history.push('/account');
    }
  }, [status, fields, history]);

  return (
    <>
      <DashboardHeader />
      <DescriptiveAccountHeader title={'Create Account'} />
      <form className={classes.registerForm} onSubmit={handleSubmit}>
        {showStatus()}
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
            disabled={submitDisable}
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
