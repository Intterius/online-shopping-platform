import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import CheckoutCart from './CheckoutCart';
import CheckoutForm from './CheckoutForm';

const Checkout = () => {
  const classes = useStyles();
  const items = useSelector((state) => state.cartReducer);
  const history = useHistory();

  useEffect(() => {
    if (!items.length) {
      history.push('/home');
    }
  }, []);
  return (
    <div className={classes.container}>
      <CheckoutForm />
      <CheckoutCart />
    </div>
  );
};

export default Checkout;
