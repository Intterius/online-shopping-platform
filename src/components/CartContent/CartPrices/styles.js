import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cartOptionsBox: {
    boxShadow: '0 -5px 5px -5px #333',
  },
  priceDescription: {
    fontSize: theme.spacing(2.5),
    fontFamily: 'Roboto, sans-serif',
    margin: 0,
    paddingTop: theme.spacing(1.8),
    marginBottom: theme.spacing(2.5),
  },
  finalPrice: {
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(1.8),
  },

  buttonsBox: {
    width: '80%',
  },

  buttonContent: {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    borderRadius: theme.spacing(3),
    padding: theme.spacing(1, 3),
    transition: '0.3s ease-in-out',
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },

  link: {
    textDecoration: 'none',
    color: theme.palette.common.white,
  },
}));

export { useStyles };
