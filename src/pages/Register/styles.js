import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  registerForm: {
    marginTop: theme.spacing(4),
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: '350px',
    [theme.breakpoints.down('321')]: {
      width: '310px',
    },
  },
  registerBtn: {
    marginTop: theme.spacing(2),
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    transition: '0.3s ease-in-out',
    borderRadius: theme.spacing(6),
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },
  createAccBtn: {
    color: theme.palette.common.black,
    transition: '0.3s ease-in-out',
    fontFamily: 'Roboto, sans-serif',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  returnHomeBtn: {
    color: theme.palette.common.black,

    transition: '0.3s ease-in-out',
    fontFamily: 'Roboto, sans-serif',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

export { useStyles };
