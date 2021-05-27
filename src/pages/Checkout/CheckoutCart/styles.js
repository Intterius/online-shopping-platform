import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#FAFAFA',
    width: '100%',
    height: '100%',
    paddingTop: theme.spacing(9),
    paddingLeft: theme.spacing(6),
    boxSizing: 'border-box',
  },

  cartBox: {
    width: theme.spacing(52.5),
    height: '100%',
  },

  overviewDetails: {
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(2.2),
    padding: theme.spacing(3, 0),
    borderTop: '1px solid #e6e6e6',
    borderBottom: '1px solid #e6e6e6',
    display: 'grid',
    gridGap: theme.spacing(1.5),
  },

  priceDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsTitle: {
    fontFamily: theme.fontFamily.main,
    color: '#535353',
    fontSize: theme.spacing(1.8),
    fontWeight: '200',
  },
  price: {
    fontWeight: '700',
    fontFamily: theme.fontFamily.main,
    color: '#323232',
    fontSize: theme.spacing(1.8),
  },
  next: {
    color: '#717171',
    fontFamily: theme.fontFamily.main,
    fontSize: theme.spacing(1.6),
  },

  totalBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  total: {
    fontFamily: theme.fontFamily.main,
    color: '#323232',
    fontSize: theme.spacing(1.9),
  },

  currency: {
    marginRight: theme.spacing(1.6),
    color: '#717171',
    fontFamily: theme.fontFamily.main,
    fontSize: theme.spacing(1.6),
  },
  finalPrice: {
    color: '#323232',
    fontFamily: theme.fontFamily.main,
    fontSize: theme.spacing(3),
    fontWeight: 'bold',
  },
}));

export { useStyles };
