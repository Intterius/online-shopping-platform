import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import DescriptiveAccountHeader from '../../components/DescriptiveAccountHeader';
import { useFormValidation } from '../../utils/FormValidation';

const Login = () => {
  const classes = useStyles();
  const [fields, setFields] = useFormValidation({ email: '', password: '' });

  return (
    <>
      <DescriptiveAccountHeader title={'Create Account'} />
      <form
        className={classes.registerForm}
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
          onChange={setFields}
          error={fields.email.error ? true : false}
          helperText={fields.email.error}
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

export default Login;
