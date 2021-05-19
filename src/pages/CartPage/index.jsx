import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import DashboardHeader from '../../components/DashboardHeader';
import DescriptiveAccountHeader from '../../components/DescriptiveAccountHeader';
import CartPageContent from './CartPageContent';

const CartPage = () => {
  const classes = useStyles();
  const items = [];

  return (
    <>
      <DashboardHeader />
      <DescriptiveAccountHeader title={'Your shopping cart'} />
      <div className={classes.container}>
        <div className={classes.cartBox}>
          <div>
            <h4 className={classes.font}>PRODUCTS</h4>
            {items.length ? (
              <CartPageContent />
            ) : (
              'Your cart is currently empty!'
            )}
            <div className={classes.btnBox}>
              <Button className={classes.continueBtn}>Continue Shopping</Button>
              <Button
                disabled={items.length ? false : true}
                className={classes.updateBtn}
              >
                Update Cart
              </Button>
            </div>
          </div>
          <div>
            <h4 className={classes.font}>ORDER SUMMARY</h4>
            <div className={classes.total}>
              <span>Subtotal: </span>
              <span>$1412.00</span>
            </div>
            <Link to={'#'} className={classes.note}>
              Add a note to your order
            </Link>
            <div className={classes.details}>
              Shipping, taxes, and discounts will be calculated at checkout.
            </div>
            <Button className={classes.checkout}>Proceed To Checkout</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
