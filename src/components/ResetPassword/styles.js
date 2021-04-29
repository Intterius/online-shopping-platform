import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  resetTitle: {
    fontSize: theme.spacing(3.5),
    fontFamily: 'Lemonada, cursive',
    fontWeight: '400',
  },
  resetForm: {
    marginTop: theme.spacing(4),
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtn: {
    marginTop: theme.spacing(2),
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    transition: '0.3s ease-in-out',
    borderRadius: theme.spacing(6),
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },
  cancelBtn: {
    marginTop: theme.spacing(2),
    transition: '0.3s ease-in-out',
    '&:hover': {
      background: 'transparent',
      color: theme.palette.primary.main,
    },
  },
}));

export { useStyles };
