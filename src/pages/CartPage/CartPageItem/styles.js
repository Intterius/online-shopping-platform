import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    width: '100%',
    height: theme.spacing(30),
    borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
    display: 'grid',
    gridTemplateColumns: '2fr 5fr',
    gridGap: theme.spacing(2),
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.down('769')]: {
      height: theme.spacing(25),
      gridTemplateColumns: '3fr 5fr',
    },
  },

  removeItem: {
    padding: theme.spacing(0.4),
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(0,0,0,.15)',
    stroke: theme.palette.common.white,
    strokeWidth: '1',
    color: theme.palette.common.white,
    margin: '0',
    fontSize: theme.spacing(2),
    transition: '0.3s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.primary.main,
      stroke: theme.palette.common.black,
      color: theme.palette.common.black,
    },
  },

  img: {
    paddingTop: theme.spacing(2),
    maxHeight: theme.spacing(28),
    width: '90%',
    [theme.breakpoints.down('769')]: {
      paddingTop: theme.spacing(4),
    },
  },

  title: {
    textTransform: 'capitalize',
    margin: '0',
    letterSpacing: 0,
    fontWeight: 400,
    fontSize: theme.spacing(2),
    lineHeight: 1.7,
    fontFamily: theme.fontFamily.main,
    color: '#000',
  },

  description: {
    margin: '0',
    letterSpacing: 0,
    fontWeight: 400,
    fontSize: theme.spacing(2),
    lineHeight: 1.7,
    fontFamily: theme.fontFamily.main,
    color: '#aaa',
  },

  money: {
    marginTop: theme.spacing(1),
    color: theme.palette.primary.main,
    fontSize: theme.spacing(2),
    fontWeight: 600,
    fontFamily: 'Lemonada',
    lineHeight: 'normal',
    letterSpacing: 0,
  },

  quantityChanger: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: theme.spacing(3.8),
  },
  increment: {
    borderRadius: '0px',
    border: '1px solid rgba(0,0,0,.15)',
    borderLeft: 'none',
    height: '100%',
    color: theme.palette.primary.main,
    '&:hover': {
      background: 'transparent',
      color: theme.palette.secondary.main,
    },
  },
  decrement: {
    borderRadius: '0px',
    border: '1px solid rgba(0,0,0,.15)',
    borderRight: 'none',
    height: '100%',
    color: theme.palette.primary.main,
    '&:hover': {
      background: 'transparent',
      color: theme.palette.secondary.main,
    },
  },

  input: {
    background: theme.palette.common.white,
    borderRadius: theme.spacing(0),
    border: `1px solid rgba(0,0,0,.15)`,
    textAlign: 'center',
    height: theme.spacing(3.3),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    '&:focus': {
      // outline: `1px solid ${theme.palette.primary.main}`,
      outline: `none`,
    },
    '&[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '&::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '&::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
  total: {
    margin: '0',
    marginTop: theme.spacing(3),
    color: '#aaa',
    letterSpacing: 0,
    fontWeight: 600,
    fontSize: theme.spacing(2),
    lineHeight: 1.7,
    fontFamily: theme.fontFamily.main,
  },
}));

export { useStyles };
