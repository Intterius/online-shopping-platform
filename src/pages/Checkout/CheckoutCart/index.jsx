import { useSelector } from 'react-redux';
import CheckoutCartItem from './CheckoutCartItem';
import { useStyles } from './styles';

const CheckoutCart = () => {
  const classes = useStyles();
  const items = useSelector((state) => state.cartReducer);
  const finalPrice = items.reduce(
    (acum, item) => acum + item.price * item.quantity,
    0
  );

  const cartContent = items.map((item) => (
    <CheckoutCartItem
      key={item.id}
      id={item.id}
      image={item.imagesSet[0].url}
      title={item.title}
      quantity={item.quantity}
      measure={item.measureUnit}
      price={item.price}
    />
  ));

  return (
    <div className={classes.container}>
      <div className={classes.cartBox}>
        {cartContent}
        <div className={classes.overviewDetails}>
          <div className={classes.priceDetails}>
            <span className={classes.detailsTitle}>Subtotal</span>
            <span className={classes.price}>${finalPrice.toFixed(2)}</span>
          </div>
          <div className={classes.priceDetails}>
            <span className={classes.detailsTitle}>Shipping</span>
            <span className={classes.next}>Calculated at next step</span>
          </div>
        </div>
        <div className={classes.totalBox}>
          <span className={classes.total}>Total</span>
          <div>
            <span className={classes.currency}>USD</span>
            <span className={classes.finalPrice}>${finalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
