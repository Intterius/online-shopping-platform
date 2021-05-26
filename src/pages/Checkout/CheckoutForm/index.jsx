import { useStyles } from './styles';
import {
  Breadcrumbs,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Autocomplete } from '@material-ui/lab';
import { useState } from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import logo from '../../../components/DashboardHeader/InteractionLinks/logo.png';

const CheckoutForm = () => {
  const classes = useStyles();
  const [country, setCountry] = useState('');

  const handleCountry = () => {
    const result = countries.filter((item) => item.country === country);
    return result.length ? result[0].cities : [];
  };

  const countries = [
    {
      country: 'Belarus',
      cities: [
        'Borisov',
        'Dzerzhinsk',
        'Mar’ina Gorka',
        'Minsk',
        'Molodechno',
        'Soligorsk',
        'Slutsk',
        'Stolbtsy',
        'Vileyka',
        'Zhodino',
      ],
    },
    {
      country: 'Czech Republic',
      cities: [
        'Brno',
        'České Budějovice',
        'Hradec Králové',
        'Liberec',
        'Olomuc',
        'Ostrava',
        'Pardubice',
        'Prague',
        'Plzeň',
        'Ústí nad Labem',
      ],
    },
    {
      country: 'Latvia',
      cities: [
        'Daugavpils',
        'Jēkabpils',
        'Jelgava',
        'Jūrmala',
        'Liepāja',
        'Ogre',
        'Rēzekne',
        'Riga',
        'Valmiera',
        'Ventspils',
      ],
    },
    {
      country: 'Republic of Moldova',
      cities: [
        'Bălți',
        'Bender (Tighina)',
        'Cahul',
        'Chișinău',
        'Comrat',
        'Orhei',
        'Rîbnița',
        'Soroca',
        'Tiraspol',
        'Ungheni',
      ],
    },
    {
      country: 'Romania',
      cities: [
        'Brașov',
        'Bucharest',
        'Cluj-Napoca',
        'Constanța',
        'Craiova',
        'Galați',
        'Iași',
        'Oradea',
        'Timișoara',
        'Ploiești',
      ],
    },
    {
      country: 'Russian Federation',
      cities: [
        'Chelyabinks',
        'Kazan',
        'Moscow',
        'Nizhny Novgorod',
        'Novosibirsk',
        'Omsk',
        'Rostov-on-Don',
        'Saint Petersburg',
        'Samara',
        'Yekaterinburg',
      ],
    },
    {
      country: 'Ukraine',
      cities: [
        'Dnipro',
        'Donetsk',
        'Kharkiv',
        'Kryvyi Rih',
        'Kyiv',
        'Lviv',
        'Mariupol',
        'Mykolaiv',
        'Odesa',
        'Zaporizhzhia',
      ],
    },
  ];
  return (
    <div className={classes.formContainer}>
      <div className={classes.formBox}>
        <Link to={'/home'}>
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
        <form className={classes.form}>
          <div className={classes.info}>
            <div className={classes.infoText}>Contact information</div>
            <div className={classes.alreadyText}>
              Already have an account?{' '}
              <Link to='/account/login' className={classes.login}>
                Log In
              </Link>
            </div>
          </div>
          <TextField
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
          />
          <FormControlLabel
            control={<Checkbox color='primary' />}
            label={
              <span className={classes.keep}>
                Keep me up to date on news and exclusive offers
              </span>
            }
          />
          <div className={classes.shippingBox}>
            <span className={classes.infoText}>Shipping Address</span>
            <div className={classes.userName}>
              <TextField
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
                variant='outlined'
                margin='normal'
                id='first-name'
                required
                label='First name'
                name='firts-name'
                autoComplete='first-name'
                type='text'
              />
              <TextField
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
                variant='outlined'
                margin='normal'
                id='last-name'
                label='Last name (optional)'
                name='last-name'
                autoComplete='last-name'
                type='text'
              />
            </div>
            <TextField
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
              id='phone-number'
              label='Phone number'
              name='phone-number'
              autoComplete='phone-number'
              type='text'
            />
            <TextField
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
              id='user-address'
              label='Address'
              name='user-address'
              autoComplete='user-address'
              type='text'
            />
            <div className={classes.userLocation}>
              <TextField
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
                variant='outlined'
                margin='normal'
                id='postal-code'
                required
                label='Postal code'
                name='postal-code'
                autoComplete='postal-code'
                type='text'
              />
              <Autocomplete
                id='city-select'
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
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
