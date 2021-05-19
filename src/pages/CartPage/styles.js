import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6.2),

    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  cartBox: {
    width: '83%',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gridGap: theme.spacing(6.2),
    [theme.breakpoints.down('768')]: {
      width: '95%',
      gridTemplateColumns: 'none',
    },
  },

  btnBox: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  continueBtn: {
    fontSize: theme.spacing(2),
    padding: theme.spacing(1, 3),
    borderRadius: theme.spacing(3.8),
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    transition: '0.3s ease-in-out',
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },

  updateBtn: {
    fontSize: theme.spacing(2),
    padding: theme.spacing(1, 3.2),
    borderRadius: theme.spacing(3.8),
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    transition: '0.3s ease-in-out',
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },

  total: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: theme.spacing(2),
    fontWeight: '600',
    fontFamily: 'Lemonada, cursive',
    marginTop: theme.spacing(1.2),
    marginBottom: theme.spacing(2),
  },

  note: {
    display: 'block',
    letterSpacing: '0',
    fontWeight: '300',
    fontSize: theme.spacing(2),
    lineHeight: 1.7,
    fontFamily: 'Roboto, sans-serif',
    marginBottom: theme.spacing(1.2),
    color: '#000',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },

  details: {
    letterSpacing: '0',
    fontWeight: '300',
    fontSize: theme.spacing(2),
    lineHeight: 1.7,
    fontFamily: 'Roboto, sans-serif',
    fontStyle: 'italic',
    marginBottom: theme.spacing(2),
  },

  checkout: {
    fontSize: theme.spacing(2),
    width: '100%',
    padding: theme.spacing(1.2, 3.2),
    borderRadius: theme.spacing(3.8),
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    transition: '0.3s ease-in-out',
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },

  font: {
    boxSizing: 'border-box',
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1.2),
    fontFamily: 'Lemonada, cursive',
    fontWeight: 'bold',
    fontSize: theme.spacing(2),
    letterSpacing: '0.3px',
    textAlign: 'left',
    textTransform: 'uppercase',
    width: '100%',
    margin: theme.spacing(2, 0),
    borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
  },
}));

export { useStyles };
