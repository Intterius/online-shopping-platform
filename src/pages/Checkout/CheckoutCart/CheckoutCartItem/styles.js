import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  product: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: theme.spacing(2),
  },

  imgBox: {
    position: 'relative',
    height: theme.spacing(8),
    width: theme.spacing(8),
    background: theme.palette.common.white,
    borderRadius: theme.spacing(1),
    border: '1px #E5E5E5 solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    height: theme.spacing(5),
    width: theme.spacing(5),
  },

  productQuantity: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    fontSize: theme.spacing(1.6),
    padding: theme.spacing(0.4, 0),
    width: '33%',
    position: 'absolute',
    color: theme.palette.common.white,
    background: '#808080',
    top: -11,
    right: -12,
  },

  productDetails: {
    marginLeft: theme.spacing(2),
    display: 'grid',
  },

  productTitle: {
    fontSize: theme.spacing(1.8),
    fontWeight: '700',
    color: '#323232',
    fontFamily: theme.fontFamily.main,
  },

  productAmount: {
    fontSize: theme.spacing(1.6),
    fontFamily: theme.fontFamily.main,
    color: '#717171',
  },

  productTotalPrice: {
    textAlign: 'right',
    flexGrow: 1,
    fontFamily: theme.fontFamily.main,
    color: '#323232',
    fontWeight: '600',
    fontSize: theme.spacing(1.7),
  },
}));

export { useStyles };
