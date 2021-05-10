import * as EmailValidator from 'email-validator';
import { useCallback, useState } from 'react';

const useFormValidation = (initialState) => {
  const [fields, setValues] = useState(initialState);

  const validateEmail = useCallback(
    (e) => {
      const { value } = e.target;
      if (!EmailValidator.validate(value)) {
        setValues({
          ...fields,
          email: {
            input: value,
            error: 'Please, introduce a valid email address.',
          },
        });
      } else {
        setValues({
          ...fields,
          email: {
            input: value,
            error: '',
          },
        });
      }
    },
    [fields]
  );

  const validatePassword = useCallback(
    (e) => {
      const { value } = e.target;
      const validation = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,10}$/);
      if (validation.test(value)) {
        setValues({ ...fields, password: { input: value, error: '' } });
      } else {
        setValues({
          ...fields,
          password: {
            input: value,
            error:
              'The password should contain at least one digit, ' +
              'letters, and have a size between 5 and 10 characters.',
          },
        });
      }
    },
    [fields]
  );

  return [
    fields,
    (e) => {
      if (e.target.name === 'email') {
        validateEmail(e);
      } else if (e.target.name === 'password') {
        validatePassword(e);
      } else {
        setValues({ ...fields, [e.target.name]: e.target.value });
      }
    },
  ];
};

export { useFormValidation };
