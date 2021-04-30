import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  boxBackground: {
    background: theme.palette.primary.main,
  },
  boxTitle: {
    margin: theme.spacing(2, 0),
    color: theme.palette.common.white,
    fontFamily: 'Lemonada, cursive',
    fontSize:theme.spacing(3.8),
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
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.common.black,
    },
  },
}));

export { useStyles };
