import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import DoneIcon from '@material-ui/icons/Done';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const CartPrices = () => {
  const classes = useStyles();
  const totalSum = useSelector((state) => state.cartPriceReducer);

  return (
    <div className={classes.cartOptionsBox}>
      <p className={classes.priceDescription}>
        CART TOTAL :
        <span className={classes.finalPrice}>
          ${`${totalSum.toFixed(2)}`} USD
        </span>
      </p>
      <Box display='flex' justifyContent='center'>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          className={classes.buttonsBox}
        >
          <Button startIcon={<DoneIcon />} className={classes.buttonContent}>
            <Link to={'#'} className={classes.link}>
              Checkout
            </Link>
          </Button>

          <Button
            startIcon={<ShoppingBasketIcon />}
            className={classes.buttonContent}
          >
            <Link to={'/cart'} className={classes.link}>
              View Cart
            </Link>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default CartPrices;
