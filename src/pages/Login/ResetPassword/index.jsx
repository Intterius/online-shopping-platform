import { Box, Button, Grid, TextField } from '@material-ui/core';
import { useFormValidation } from '../../../utils/FormValidation';
import { useStyles } from './styles';

const ResetPassword = ({ cancelReset }) => {
  const classes = useStyles();
  const [field, setEmail] = useFormValidation({ email: '' });

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
          onChange={setEmail}
          error={field.email.error ? true : false}
          helperText={field.email.error}
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
