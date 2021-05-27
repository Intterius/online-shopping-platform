import { Box } from '@material-ui/core';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@material-ui/icons/Clear';
import { removePrice } from '../../../redux/reducers/cartPriceReducer';
import {
  removeItemAsGuest,
  removeItemAsUser,
} from '../../../redux/reducers/cartReducer';
import { interceptorRequest } from '../../../utils/requestInterceptor';
import { url } from '../../../utils/baseUrl';

const CartItem = ({ id, image, title, price, quantity, measure }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.tokenReducer);

  const removeItem = () => {
    if (user) {
      interceptorRequest.delete(`${url}/cart?product_id=${id}`);
      dispatch(removeItemAsUser(id));
    } else {
      dispatch(removeItemAsGuest(id));
    }
  };

  return (
    <div className={classes.item}>
      <Box display='flex' justifyContent='center'>
        <div className={classes.itemComponents}>
          <Link to={`/product/${id}`}>
            <img className={classes.itemImg} src={image} alt={title} />
          </Link>
          <Box display='grid'>
            <Link style={{ textDecoration: 'none' }} to={`/product/${id}`}>
              <p className={classes.itemDescription}>{title}</p>
            </Link>
            <p className={classes.priceAndQuantity}>
              {quantity}{' '}
              {measure === 'kg' ? 'kg' : quantity > 1 ? 'packs' : 'pack'} x $
              {price} USD
            </p>
          </Box>
          <div>
            <Box
              className={classes.removeItemBtn}
              onClick={() => {
                dispatch(removePrice(price * quantity));
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
