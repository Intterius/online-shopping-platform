import { useStyles } from './styles';
import { useEffect, useState } from 'react';
import { Box, IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItemAsGuest,
  removeItemAsUser,
} from '../../../redux/reducers/cartReducer';
import { removePrice } from '../../../redux/reducers/cartPriceReducer';
import { url } from '../../../utils/baseUrl';
import { cartRequest } from '../../../utils/requestInterceptor';
import ClearIcon from '@material-ui/icons/Clear';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const CartPageItem = ({
  id,
  image,
  title,
  amount,
  measure,
  price,
  updateCart,
}) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(amount);
  const { user } = useSelector((state) => state.tokenReducer);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    if (e.target.value > 99) {
      return setQuantity(99);
    } else if (e.target.value < 1) {
      return setQuantity(1);
    } else if (e.target.value[0] !== '0') {
      return setQuantity(Number(e.target.value));
    }
  };

  const removeItem = () => {
    if (user) {
      cartRequest.delete(`${url}/cart?product_id=${id}`);
      dispatch(removeItemAsUser(id));
    } else {
      dispatch(removeItemAsGuest(id));
    }
  };

  useEffect(() => {
    updateCart({ id, quantity });
  }, [quantity]);

  return (
    <div id={id}>
      <div className={classes.container}>
        <ClearIcon
          className={classes.removeItem}
          onClick={() => {
            dispatch(removePrice(price * amount));
            removeItem();
          }}
        />
        <img className={classes.img} src={image} alt={title} />
        <div className={classes.itemDetails}>
          <div className={classes.itemTitle}>
            <p className={classes.title}>{title}</p>
            <p className={classes.description}>
              {amount} {measure === 'KG' ? 'kg' : amount > 1 ? 'packs' : 'pack'}
            </p>
          </div>
          <p className={classes.money}>${price.toFixed(2)}</p>
          <div className={classes.quantityChanger}>
            <IconButton
              disabled={quantity === 1 ? true : false}
              className={classes.decrement}
              onClick={() => setQuantity(quantity - 1)}
            >
              <RemoveIcon />
            </IconButton>
            <Box height='100%'>
              <input
                onChange={handleInput}
                className={classes.input}
                type='number'
                min='1'
                max='99'
                value={quantity}
              />
            </Box>
            <IconButton
              disabled={quantity === 99 ? true : false}
              className={classes.increment}
              onClick={() => setQuantity(quantity + 1)}
            >
              <AddIcon />
            </IconButton>
          </div>
          <p className={classes.total}>
            Total:{' '}
            <span className={classes.money}>
              ${(price * quantity).toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPageItem;
