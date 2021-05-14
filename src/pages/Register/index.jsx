import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useStyles } from './styles';
import { useFormValidation } from '../../utils/FormValidation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DescriptiveAccountHeader from '../../components/DescriptiveAccountHeader';
import DashboardHeader from '../../components/DashboardHeader';
import useRegistrationSubmit from '../../utils/RegistrationSubmit';

const Register = () => {
  const classes = useStyles();
  const [fields, setFields] = useFormValidation({
    email: '',
    password: '',
  });
  const [submitDisable, setSubmitDisable] = useState(false);
  const { status } = useSelector((state) => state.tokenReducer);
  const [handleSubmit, showStatus] = useRegistrationSubmit(fields);
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
