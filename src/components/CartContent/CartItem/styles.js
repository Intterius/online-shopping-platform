import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  item: {
    width: '100%',
    marginBottom: theme.spacing(2),
    borderBottom: '1px solid black',
  },
  itemComponents: {
    display: 'grid',
    gridTemplateColumns: '4fr 6fr 3fr',
    width: '95%',
  },

  itemImg: {
    margin: '0',
    height: '80%',
    width: '80%',
    objectFit: 'contain',
  },

  itemDescription: {
    textDecoration: 'none',
    color: theme.palette.common.black,
    margin: '0',
    lineHeight: '32px',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'start',
    fontSize: theme.spacing(2.1),
    transition: '0.3s ease-in-out',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },

  removeItemBtn: {
    margin: '0',
    float: 'right',
    color: theme.palette.common.black,
  },
  removeIcon: {
    stroke: theme.palette.common.black,
    strokeWidth: '1',
    margin: '0',
    fontSize: theme.spacing(2),
    transition: '0.3s ease-in-out',
    '&:hover': {
      cursor:'pointer',
      stroke: theme.palette.primary.main,
      color: theme.palette.primary.main,
    },
  },

  priceAndQuantity: {
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'start',
    color: theme.palette.common.black,
    margin: '0',
    marginBottom: theme.spacing(2.5),
    marginTop: theme.spacing(0.8),
  },
}));

export { useStyles };
