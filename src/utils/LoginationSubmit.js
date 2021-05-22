import { Alert } from '@material-ui/lab';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { demoUrl } from './baseUrl';

const useLoginationSubmit = (fields) => {
  const [validationStatus, setValidationStatus] = useState();
  const history = useHistory();

  const showStatus = useCallback(() => {
    if (validationStatus === false) {
      return <Alert severity='error'>Wrong email or password!</Alert>;
    } else if (validationStatus === true) {
      return <Alert severity='success'>You have successfully signed in!</Alert>;
    }
  }, [validationStatus]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (fields.email.error || fields.password.error) {
        return;
      } else {
        axios
          .post(
            `${demoUrl}/sign-in/login`,
            {
              email: fields.email.input,
              password: fields.password.input,
            }
          )
          .then((res) => {
            setValidationStatus(true);
            localStorage.setItem('key', res.data.key);
            event.target.reset();
            setTimeout(() => {
              history.push('/home');
              window.location.reload();
            }, 1000);
          })
          .catch((err) => {
            setValidationStatus(false);
          });
      }
    },
    [fields, history]
  );

  return [handleSubmit, showStatus];
};

export default useLoginationSubmit;
