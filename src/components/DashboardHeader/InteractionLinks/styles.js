import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    backgroundColor: theme.palette.common.white,
    zIndex: 2,
  },

  interactionBox: {
    background: theme.palette.common.white,
    width: '82%',
    margin: 'auto',
    paddingTop: theme.spacing(2.7),
    paddingBottom: theme.spacing(1.6),
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('1280')]: {
      width: '90%',
    },
    [theme.breakpoints.down('760')]: {
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  sticky: {
    position: 'sticky',
    animation: '$stickyHeader 0.5s ease-in-out',
    top: 0,
    boxShadow: '0px 15px 10px -15px #111',
  },

  '@keyframes stickyHeader': {
    from: { top: -80 },
    to: { top: 0 },
  },

  linksContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '11%',
    [theme.breakpoints.down('965')]: {
      width: '20%',
    },
    [theme.breakpoints.down('760')]: {
      width: '100%',
      paddingTop: theme.spacing(3.8),
    },
  },

  links: {
    color: theme.palette.common.black,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },

  cart: {
    fontSize: theme.spacing(3.2),
  },

  cartCounter: {
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '60%',
    fontSize: theme.spacing(1.75),
    left: theme.spacing(1.9),
    bottom: theme.spacing(2.5),
    borderRadius: '50%',
    background: theme.palette.primary.main,
  },

  cartProducts: {
    width: '350px',
    color: '#444444',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
    padding: theme.spacing(2, 0),
    position: 'absolute',
    background: 'white',
    border: 'transparent',
    top: theme.spacing(4.7),
    right: theme.spacing(1.9),
    boxShadow: '0px 0px 30px 0 rgb(0 0 0 / 15%)',
    [theme.breakpoints.down('760')]: {
      right: theme.spacing(-10),
    },
    [theme.breakpoints.down('500')]: {
      display: 'none',
    },
  },

  user: {
    fontSize: theme.spacing(3.2),
    marginRight: theme.spacing(1.25),
  },

  exit: {
    marginRight: theme.spacing(1.25),
    display: 'none',
  },

  menuBtn: {
    display: 'none',
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down('965')]: {
      display: 'block',
    },
  },
}));

export { useStyles };
