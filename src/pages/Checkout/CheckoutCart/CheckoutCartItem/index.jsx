import { Alert } from '@material-ui/lab';
import { useStyles } from './styles';

const CheckoutCartItem = ({ image, title, quantity, measure, price }) => {
  const classes = useStyles();
  
  return (
    <>
      <div className={classes.product}>
        <div className={classes.imgBox}>
          <img className={classes.img} src={image} alt={title} />
          <span className={classes.productQuantity}>{quantity}</span>
        </div>
        <div className={classes.productDetails}>
          <span className={classes.productTitle}>{title}</span>
          <span className={classes.productAmount}>
            {quantity}{' '}
            {measure === 'kg' ? 'kg' : quantity > 1 ? 'packs' : 'pack'}
          </span>
        </div>
        <span className={classes.productTotalPrice}>
          ${(price * quantity).toFixed(2)}
        </span>
      </div>
      {!quantity && (
        <Alert
          style={{ marginTop: '-15px', marginBottom: '20px' }}
          severity='error'
        >
          Out of stock
        </Alert>
      )}
    </>
  );
};

export default CheckoutCartItem;
