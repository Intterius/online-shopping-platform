import { useStyles } from './styles';

import CheckoutCart from './CheckoutCart';
import CheckoutForm from './CheckoutForm';

const Checkout = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CheckoutForm />
      <CheckoutCart />
    </div>
  );
};

export default Checkout;
