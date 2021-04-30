import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  notFoundBox: {
    padding: theme.spacing(7, 0),
    width: '85%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  },
  title: {
    fontSize: theme.spacing(3.8),
    fontFamily: 'Lemonada, cursive',
    fontWeight: '500',
    margin: '0',
    [theme.breakpoints.down('sm')]: {
      wordSpacing: theme.spacing(-0.6),
    },
  },
  description: {
    fontSize: theme.spacing(2),
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.8),
    },
  },
  linkBtn: {
    color: theme.palette.primary.main,
    transition: '0.3s ease-in-out',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

export { useStyles };
