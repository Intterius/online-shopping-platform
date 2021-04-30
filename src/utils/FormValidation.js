import * as EmailValidator from 'email-validator';
import { useState } from 'react';

const useFormValidation = (initialState) => {
  const [fields, setValues] = useState(initialState);

  const validateEmail = (e) => {
    const { value } = e.target;
    if (!EmailValidator.validate(value)) {
      return {
        input: value,
        error: 'Please, introduce a valid email address.',
      };
    } else {
      return { input: value, error: '' };
    }
  };

  const validatePassword = (e) => {
    const { value } = e.target;
    const validation = new RegExp(/^([a-zA-Z0-9_-]){5,10}$/);
    if (validation.test(value)) {
      return { input: value, error: '' };
    } else {
      return {
        input: value,
        error: 'Password must contain 5 to 10 letters and numbers.',
      };
    }
  };

  return [
    fields,
    (e) => {
      setValues({
        ...fields,
        [e.target.name]:
          e.target.name === 'email' ? validateEmail(e) : validatePassword(e),
      });
    },
  ];
};

export { useFormValidation };
