import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  boxBackground: {
    background: theme.palette.primary.main,
    padding: theme.spacing(1.8, 0),
  },
  boxTitle: {
    margin: theme.spacing(2, 0),
    color: theme.palette.common.white,
    fontFamily: 'Lemonada, cursive',
    fontSize: theme.spacing(3.8),
    fontWeight: '600',
  },
  breadLinks: {
    marginBottom: theme.spacing(2.5),
    color: theme.palette.common.white,
    display: 'grid',
    justifyContent: 'center',
  },
  homeBtn: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    transition: '0.3s ease-in-out',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.common.black,
    },
    [theme.breakpoints.down('965')]: {
      fontSize: theme.spacing(1.8),
    },
  },

  location: {
    [theme.breakpoints.down('965')]: {
      fontSize: theme.spacing(1.8),
    },
  },
}));

export { useStyles };
