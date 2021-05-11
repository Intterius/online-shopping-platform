import { Alert } from '@material-ui/lab';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

const useRegistrationSubmit = (fields) => {
  const [validationStatus, setValidationStatus] = useState();
  const [registerError, setRegisterError] = useState();
  const history = useHistory();

  const showStatus = useCallback(() => {
    if (validationStatus === false) {
      return <Alert severity='error'>{registerError}</Alert>;
    } else if (validationStatus === true) {
      return (
        <Alert severity='success'>You have successfully registered!</Alert>
      );
    }
  }, [validationStatus, registerError]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
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
            setValidationStatus(true);
            event.target.reset();
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
                setTimeout(() => {
                  history.push('/home');
                  window.location.reload();
                }, 1000);
              });
          })
          .catch((err) => {
            setValidationStatus(false);
            setRegisterError(err.response.data.error.message);
            console.log(err.response.data.error.message);
          });
      }
    },
    [fields, history]
  );

  return [handleSubmit, showStatus];
};

export default useRegistrationSubmit;
