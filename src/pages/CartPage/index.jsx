import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import DashboardHeader from '../../components/DashboardHeader';
import DescriptiveAccountHeader from '../../components/DescriptiveAccountHeader';
import CartPageItem from './CartPageItem';
import { useState } from 'react';
import {
  updateCartAsGuest,
  updateCartAsUser,
} from '../../redux/reducers/cartReducer';
import { updatePrice } from '../../redux/reducers/cartPriceReducer';

const CartPage = () => {
  const classes = useStyles();
  const items = useSelector((state) => state.cartReducer);
  const totalSum = useSelector((state) => state.cartPriceReducer);
  const { user } = useSelector((state) => state.tokenReducer);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState({ id: '', quantity: '' });

  const updatedChildren = items.map((item) => {
    if (item.id === update.id) {
      item.quantity = update.quantity;
      return item;
    }
    return item;
  });

  const cartContent = items.map((item) => (
    <CartPageItem
      updateCart={(update) => setUpdate(update)}
      key={item.id}
      id={item.id}
      image={item.imagesSet[0].url}
      title={item.title}
      amount={item.quantity}
      measure={item.measureUnit}
      price={item.price}
    />
  ));

  const updateCart = () => {
    if (user) {
      dispatch(updateCartAsUser(updatedChildren));
      window.location.reload();
    }
    dispatch(updateCartAsGuest(updatedChildren));
    dispatch(updatePrice(updatedChildren));
  };

  return (
    <>
      <DashboardHeader />
      <DescriptiveAccountHeader title={'Your shopping cart'} />
      <div className={classes.container}>
        <div className={classes.cartBox}>
          <div>
            <h4 className={classes.font}>PRODUCTS</h4>
            {items.length ? cartContent : 'Your cart is currently empty!'}
            <div className={classes.btnBox}>
              <Link to={'/home'} style={{ textDecoration: 'none' }}>
                <Button className={classes.continueBtn}>
                  Continue Shopping
                </Button>
              </Link>
              <Button
                disabled={items.length ? false : true}
                className={classes.updateBtn}
                onClick={updateCart}
              >
                Update Cart
              </Button>
            </div>
          </div>
          <div>
            <h4 className={classes.font}>ORDER SUMMARY</h4>
            <div className={classes.total}>
              <span>Subtotal: </span>
              <span>${totalSum.toFixed(2)}</span>
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
