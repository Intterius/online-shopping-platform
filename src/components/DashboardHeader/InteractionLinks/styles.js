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
  },

  '@keyframes stickyHeader': {
    from: { top: -80 },
    to: { top: 0 },
  },

  linksContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '8%',
    [theme.breakpoints.down('760')]: {
      width: '100%',
      justifyContent: 'center',
    },
  },

  links: {
    paddingRight: theme.spacing(1.9),
    color: theme.palette.common.black,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },

  user: {
    fontSize: theme.spacing(3.2),
  },

  cart: {
    fontSize: theme.spacing(3.2),
    marginTop: theme.spacing(2.05),
  },

  cartCounter: {
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '65%',
    fontSize: theme.spacing(1.75),
    bottom: theme.spacing(4.5),
    left: theme.spacing(2.25),
    borderRadius: '50%',
    background: theme.palette.primary.main,
  },

  menuBtn: {
    display: 'none',
    paddingRight: theme.spacing(1.9),
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
