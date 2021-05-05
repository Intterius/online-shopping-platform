import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import DescriptiveAccountHeader from '../../components/DescriptiveAccountHeader';
import { useFormValidation } from '../../utils/FormValidation';
import DashboardHeader from '../../components/DashboardHeader';
import { Alert } from '@material-ui/lab';

const Login = () => {
  const classes = useStyles();
  const [fields, setFields] = useFormValidation({
    username: '',
    email: '',
    password: '',
  });

  return (
    <>
      <DashboardHeader />
      <DescriptiveAccountHeader title={'Create Account'} />
      <form
        className={classes.registerForm}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* <Alert severity="error" >Such user alread exists!</Alert> */}
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

export default Login;
