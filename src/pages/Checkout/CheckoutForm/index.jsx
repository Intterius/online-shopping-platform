import { useStyles } from './styles';
import {
  Breadcrumbs,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Autocomplete } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { countries } from '../../../utils/countries';
import { useFormValidation } from '../../../utils/FormValidation';
import { useSelector } from 'react-redux';
import { url } from '../../../utils/baseUrl';
import { interceptorRequest } from '../../../utils/requestInterceptor';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import logo from '../../../components/DashboardHeader/InteractionLinks/logo.png';
import FormDialog from './FormDialog';
import ErrorFormDialog from './ErrorFormDialog';

const CheckoutForm = () => {
  const classes = useStyles();
  const items = useSelector((state) => state.cartReducer);
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [fields, setValues] = useFormValidation({
    email: '',
    phoneNumber: '',
    postalCode: '',
    firstName: '',
    lastName: '',
  });
  const [checkNews, setCheckNews] = useState(false);
  const [checkSaveInfo, setCheckSaveInfo] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const handleNumberInput = (e) => {
    if (/^\d*$/.test(e.target.value)) {
      return setValues(e);
    }
  };

  const handleCharInput = (e) => {
    if (/^[a-zA-Z]*$/.test(e.target.value)) {
      return setValues(e);
    }
  };

  const handleCountry = () => {
    const result = countries.filter((item) => item.country === country);
    return result.length ? result[0].cities : [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setShowSuccessDialog(true);
    // setShowErrorDialog(true);
  };

  const handleSubmitBtn = () => {
    if (!items.length || fields.email.error) {
      return true;
    } else {
      return false;
    }
  };

  // useEffect(() => {
  //   interceptorRequest
  //     .get(`${url}/orders`)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className={classes.formContainer}>
      <div className={classes.formBox}>
        <Link to={'/home'} style={{ width: '150px' }}>
          <img src={logo} alt='grocery-logo' className={classes.logo} />
        </Link>
        <Breadcrumbs
          separator={
            <NavigateNextIcon
              fontSize='small'
              style={{ display: 'flex', alignItems: 'center' }}
            />
          }
          aria-label='breadcrumb'
        >
          <Link className={classes.cart} to='/cart'>
            Cart
          </Link>
          <div className={classes.checkout}>Checkout</div>
        </Breadcrumbs>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.info}>
            <div className={classes.infoText}>Contact information</div>
          </div>
          <TextField
            onChange={setValues}
            className={classes.input}
            InputLabelProps={{
              style: {
                height: 45,
                top: -6,
              },
            }}
            inputProps={{
              style: {
                height: 45,
                padding: '0 16px',
              },
            }}
            fullWidth
            variant='outlined'
            margin='normal'
            required
            id='email'
            label='Email Address'
            name='email'
            autoFocus
            autoComplete='email'
            type='email'
            error={fields.email.error ? true : false}
            helperText={fields.email.error}
          />
          <FormControlLabel
            control={
              <Checkbox
                color='primary'
                checked={checkNews}
                onChange={(e) => setCheckNews(e.target.checked)}
              />
            }
            label={
              <span className={classes.check}>
                Keep me up to date on news and exclusive offers
              </span>
            }
          />
          <div className={classes.shippingBox}>
            <span className={classes.infoText}>Shipping Address</span>
            <div className={classes.userName}>
              <TextField
                onChange={handleCharInput}
                className={classes.input}
                value={fields.firstName}
                InputLabelProps={{
                  style: {
                    height: 45,
                    top: -6,
                  },
                }}
                inputProps={{
                  style: {
                    height: 45,
                    padding: '0 16px',
                  },
                }}
                variant='outlined'
                margin='normal'
                id='firstName'
                required
                label='First name'
                name='firstName'
                autoComplete='firstName'
                type='text'
              />
              <TextField
                onChange={handleCharInput}
                className={classes.input}
                value={fields.lastName}
                InputLabelProps={{
                  style: {
                    height: 45,
                    top: -6,
                  },
                }}
                inputProps={{
                  style: {
                    height: 45,
                    padding: '0 16px',
                  },
                }}
                variant='outlined'
                margin='normal'
                id='lastName'
                label='Last name (optional)'
                name='lastName'
                autoComplete='lastName'
                type='text'
              />
            </div>
            <TextField
              onChange={handleNumberInput}
              value={fields.phoneNumber}
              className={classes.input}
              InputLabelProps={{
                style: {
                  height: 45,
                  top: -6,
                },
              }}
              inputProps={{
                style: {
                  height: 45,
                  padding: '0 16px',
                },
                maxLength: 10,
                minLength: 6,
              }}
              required
              variant='outlined'
              margin='normal'
              id='phoneNumber'
              label='Phone number'
              name='phoneNumber'
              autoComplete='phoneNumber'
              type='text'
            />
            <TextField
              onChange={setValues}
              className={classes.input}
              InputLabelProps={{
                style: {
                  height: 45,
                  top: -6,
                },
              }}
              inputProps={{
                style: {
                  height: 45,
                  padding: '0 16px',
                },
              }}
              required
              variant='outlined'
              margin='normal'
              id='userAddress'
              label='Address'
              name='userAddress'
              autoComplete='userAddress'
              type='text'
            />
            <div className={classes.userLocation}>
              <TextField
                onChange={handleNumberInput}
                value={fields.postalCode}
                className={classes.input}
                InputLabelProps={{
                  style: {
                    height: 45,
                    top: -6,
                  },
                }}
                inputProps={{
                  style: {
                    height: 45,
                    padding: '0 16px',
                  },
                  maxLength: 8,
                  minLength: 4,
                }}
                variant='outlined'
                margin='normal'
                id='postalCode'
                required
                label='Postal code'
                name='postalCode'
                autoComplete='postalCode'
                type='text'
              />
              <Autocomplete
                id='city-select'
                onChange={(event, value) => setCity(value)}
                key={country}
                options={handleCountry()}
                autoHighlight
                getOptionSelected={(option, value) => option === value}
                getOptionLabel={(option) => option}
                renderOption={(option) => <span>{option}</span>}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    className={classes.input}
                    style={{ marginTop: '16px' }}
                    InputLabelProps={{
                      style: {
                        height: 27,
                        top: -6,
                      },
                    }}
                    label='City'
                    variant='outlined'
                    inputProps={{
                      style: {
                        height: 27,
                        padding: '0 16px',
                      },
                      ...params.inputProps,
                      autoComplete: 'new-password',
                    }}
                  />
                )}
              />
            </div>
            <Autocomplete
              onChange={(event, values) =>
                values ? setCountry(values.country) : setCountry('')
              }
              id='country-select'
              options={countries}
              autoHighlight
              getOptionSelected={(option, value) =>
                option.country === value.country
              }
              getOptionLabel={(option) => option.country}
              renderOption={(option) => <span>{option.country}</span>}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  className={classes.input}
                  style={{ marginTop: '16px' }}
                  InputLabelProps={{
                    style: {
                      height: 27,
                      top: -6,
                    },
                  }}
                  label='Choose a country'
                  variant='outlined'
                  inputProps={{
                    style: {
                      height: 27,
                      padding: '0 16px',
                    },
                    ...params.inputProps,
                    autoComplete: 'new-password',
                  }}
                />
              )}
            />
          </div>
          <FormControlLabel
            control={
              <Checkbox
                color='primary'
                checked={checkSaveInfo}
                onChange={(e) => setCheckSaveInfo(e.target.checked)}
              />
            }
            label={
              <span className={classes.check}>
                Save this information for next time
              </span>
            }
          />
          <div className={classes.btnBox}>
            <Button
              disabled={handleSubmitBtn()}
              className={classes.submitBtn}
              type='submit'
            >
              Finish checkout
            </Button>
            <Link className={classes.returnBtn} to='/cart'>
              Return to cart
            </Link>
          </div>
        </form>
        <div className={classes.rights}>
          All rights reserved by Endava's Interns.
        </div>
      </div>
      <FormDialog open={showSuccessDialog} />
      <ErrorFormDialog
        handleCloseError={(state) => setShowErrorDialog(state)}
        open={showErrorDialog}
      />
    </div>
  );
};

export default CheckoutForm;
