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
  itemImg: { margin: '0' },

  itemDescription: {
    margin: '0',
    lineHeight: '20px',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'start',
    fontSize: theme.spacing(2.1),
  },

  removeItemBtn: {
    margin: '0',
    float: 'right',
    color: theme.palette.common.black,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  removeIcon: {
    stroke: 'black',
    strokeWidth: '1',
    margin: '0',
    fontSize: theme.spacing(2),
  },

  priceAndQuantity: {
    textAlign: 'center',
    margin: '0',
    marginBottom: theme.spacing(1.7),
  },
}));

export { useStyles };
