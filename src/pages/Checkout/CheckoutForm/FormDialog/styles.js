import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  successIcon: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(15),
    width: '100%',
  },

  title: {
    textAlign: 'center',
  },

  ok: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    transition: '0.3s ease-in-out',
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },
}));

export { useStyles };
