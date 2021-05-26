import { Button, Snackbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import { updateCartAsGuest } from '../../redux/reducers/cartReducer';
import { updatePrice } from '../../redux/reducers/cartPriceReducer';
import {  interceptorRequest } from '../../utils/requestInterceptor';
import { url } from '../../utils/baseUrl';
import { Alert } from '@material-ui/lab';
import DescriptiveAccountHeader from '../../components/DescriptiveAccountHeader';
import DashboardHeader from '../../components/DashboardHeader';
import CartPageItem from './CartPageItem';

const CartPage = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showRemove, setShowRemove] = useState(false);

  const classes = useStyles();
  const items = useSelector((state) => state.cartReducer);
  const totalSum = useSelector((state) => state.cartPriceReducer);
  const { user } = useSelector((state) => state.tokenReducer);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState({ id: '', quantity: '' });
  const [updatedCart, setUpdatedCart] = useState([...items]);

  useMemo(() => {
    const result = updatedCart.map((item) => {
      if (item.id === update.id) {
        const updatedItem = { ...item };
        updatedItem.quantity = update.quantity;
        return updatedItem;
      }
      return item;
    });
    setUpdatedCart(result);
  }, [update]);

  const cartContent = items.map((item) => (
    <CartPageItem
      removeProduct={(status) => setShowRemove(status)}
      stock={item.quantityInStock}
      updateProduct={(update) => setUpdate(update)}
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
      interceptorRequest.put(`${url}/cart`, updatedCart).then(() => {
        setShowSuccess(true);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
      return;
    }
    dispatch(updateCartAsGuest(updatedCart));
    dispatch(updatePrice(updatedCart));
    setShowSuccess(true);
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
                onClick={() => {
                  updateCart();
                }}
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
            <Link style={{ textDecoration: 'none' }} to={'/checkout'}>
              <Button className={classes.checkout}>Proceed To Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
      <Snackbar
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity='success'>Cart successfully updated!</Alert>
      </Snackbar>
      <Snackbar
        open={showRemove}
        onClose={() => setShowRemove(false)}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity='error'>Product successfully removed from cart!</Alert>
      </Snackbar>
    </>
  );
};

export default CartPage;
