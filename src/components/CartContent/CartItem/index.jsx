import { Box } from '@material-ui/core';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';

const CartItem = () => {
  const classes = useStyles();
  return (
    <div className={classes.item}>
      <Box display='flex' justifyContent='center'>
        <div className={classes.itemComponents}>
          <Link to={'#'} className={classes.itemImg}>
            <p>someimage</p>
          </Link>
          <p className={classes.itemDescription}>Watermelon - 3 kg / Blue</p>
          <div>
            <div className={classes.removeItemBtn}>
              <ClearIcon className={classes.removeIcon} />
            </div>
          </div>
        </div>
      </Box>
      <p className={classes.priceAndQuantity}>price and quantity</p>
    </div>
  );
};

export default CartItem;
