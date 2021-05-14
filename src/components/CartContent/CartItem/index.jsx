import { Box } from '@material-ui/core';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@material-ui/icons/Clear';
import { removePrice } from '../../../redux/reducers/cartPriceReducer';
import {
  removeItemAsGuest,
  removeItemAsUser,
} from '../../../redux/reducers/addToCartReducer';

const CartItem = ({ id, image, description, title, price }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.tokenReducer);

  const removeItem = () => {
    if (user) {
      dispatch(removeItemAsUser(id));
    } else {
      dispatch(removeItemAsGuest(id));
    }
  };

  return (
    <div className={classes.item}>
      <Box display='flex' justifyContent='center'>
        <div className={classes.itemComponents}>
          <Link to={'#'}>
            <img className={classes.itemImg} src={image} alt={title} />
          </Link>
          <Box display='grid'>
            <Link style={{ textDecoration: 'none' }} to={'#'}>
              <p className={classes.itemDescription}>
                {title} - 3 kg / {description}
              </p>
            </Link>
            <p className={classes.priceAndQuantity}>
              1 x ${Number.isInteger(price) ? `${price}.00` : price} USD
            </p>
          </Box>
          <div>
            <Box
              fontWeight='fontWeightBold'
              className={classes.removeItemBtn}
              onClick={() => {
                dispatch(removePrice(price));
                removeItem();
              }}
            >
              <ClearIcon className={classes.removeIcon} />
            </Box>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default CartItem;
