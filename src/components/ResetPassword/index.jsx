import { Box, Button, Grid, TextField } from '@material-ui/core';
import * as EmailValidator from 'email-validator';
import { useState } from 'react';
import { useStyles } from './styles';

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
    <>
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
        <Box display='grid' justifyContent='center'>
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
        </Box>
      </Box>
    </>
  );
};

export default ResetPassword;
