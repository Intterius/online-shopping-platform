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
      const validation = new RegExp(/^([a-zA-Z0-9_-]){5,10}$/);
      if (validation.test(value)) {
        setValues({ ...fields, password: { input: value, error: '' } });
      } else {
        setValues({
          ...fields,
          password: {
            input: value,
            error: 'Password must contain 5 to 10 letters and numbers.',
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
