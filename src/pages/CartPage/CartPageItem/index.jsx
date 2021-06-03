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
import { interceptorRequest } from '../../../utils/requestInterceptor';
import ClearIcon from '@material-ui/icons/Clear';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { Alert } from '@material-ui/lab';

const CartPageItem = ({
  removedId,
  removeProduct,
  id,
  image,
  title,
  amount,
  measure,
  price,
  updateProduct,
  stock,
}) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(amount);
  const { user } = useSelector((state) => state.tokenReducer);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    let value = e.target.value;
    if (value > stock) {
      return setQuantity(stock);
    } else if (value < 1) {
      return setQuantity(1);
    } else if (/^\d+$/.test(value)) {
      return setQuantity(Number(value));
    }
  };

  const removeItem = () => {
    if (user) {
      interceptorRequest.delete(`${url}/cart?product_id=${id}`);
      dispatch(removeItemAsUser(id));
    } else {
      dispatch(removeItemAsGuest(id));
    }
  };

  useEffect(() => {
    updateProduct({ id, quantity });
  }, [quantity, id]);

  return (
    <div id={id}>
      {!quantity && (
        <Alert style={{ marginBottom: '10px' }} severity='error'>
          Out of stock
        </Alert>
      )}
      <div className={classes.container}>
        <ClearIcon
          className={classes.removeItem}
          onClick={() => {
            removeProduct(true);
            removedId(id);
            dispatch(removePrice(price * amount));
            removeItem();
          }}
        />
        <img className={classes.img} src={image} alt={title} />
        <div className={classes.itemDetails}>
          <div className={classes.itemTitle}>
            <p className={classes.title}>{title}</p>
            <p className={classes.description}>
              {amount} {measure === 'kg' ? 'kg' : amount > 1 ? 'packs' : 'pack'}
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
                type='text'
                min='1'
                max='99'
                value={quantity}
              />
            </Box>
            <IconButton
              disabled={quantity >= stock || quantity === 99 ? true : false}
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
