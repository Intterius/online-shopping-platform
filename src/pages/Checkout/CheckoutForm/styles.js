import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    borderRight: '1.5px solid #E1E1E1',
    width: '100%',
    boxSizing: 'border-box',
    paddingTop: theme.spacing(7),
    paddingRight: theme.spacing(7),
  },

  formBox: {
    width: '76%',
    float: 'right',
    display: 'grid',
  },

  logo: {
    marginBottom: theme.spacing(2),
  },

  cart: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    fontSize: theme.spacing(1.6),
    textDecoration: 'none',
    fontFamily: theme.fontFamily.main,
    transition: '0.3s ease-in-out',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },

  checkout: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.black,
    fontSize: theme.spacing(1.6),
    fontWeight: '500',
    fontFamily: theme.fontFamily.main,
  },

  form: {
    marginTop: theme.spacing(3),
  },

  info: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },

  infoText: {
    color: '#333',
    fontFamily: theme.fontFamily.main,
    fontSize: theme.spacing(2.2),
    fontWeight: '400',
  },

  alreadyText: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.spacing(1.8),
    color: '#545454',
    fontWeight: '400',
    display: 'flex',
    paddingTop: theme.spacing(0.4),
  },

  login: {
    marginLeft: theme.spacing(0.6),
    color: theme.palette.primary.main,
    textDecoration: 'none',
    transition: '0.3s ease-in-out',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },

  input: {
    marginBottom: 0,
    [`& fieldset`]: {
      borderRadius: theme.spacing(0.8),
    },
  },

  keep: {
    fontFamily: theme.fontFamily.main,
    color: '#545454',
    fontWeight: '300',
    fontSize: theme.spacing(1.7),
  },

  shippingBox: {
    marginTop: theme.spacing(4.8),
    display: 'grid',
  },

  userName: {
    marginTop: theme.spacing(1),
    display: 'grid',
    gridGap: theme.spacing(1.7),
    gridTemplateColumns: '1fr 1fr',
  },

  userLocation: {
    display: 'grid',
    gridGap: theme.spacing(1.7),
    gridTemplateColumns: '1fr 1fr',
  },
}));

export { useStyles };
