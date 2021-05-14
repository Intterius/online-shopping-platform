import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCartForUser } from '../redux/reducers/addToCartReducer';
import { setUserCartPrice } from '../redux/reducers/cartPriceReducer';

const getUserCart = () => {
  const items = JSON.parse(localStorage.getItem('cartContent'));

  return [...items] || [];
};

const getUserCartPrice = () => {
  const items = JSON.parse(localStorage.getItem('cartContent'));

  return items.reduce((a, b) => Number((a + b.price).toFixed(2)), 0);
};

const useTokenValidation = () => {
  let user = localStorage.getItem('key');
  const dispatch = useDispatch();
  if (user) {
    axios
      .get(
        'https://online-shopping-platform-back.herokuapp.com/sign-in/userInfo',
        {
          headers: {
            Authorization: user,
          },
        }
      )
      .then((res) => {
        dispatch({ type: 'VALID', payload: res.data });
        dispatch(setCartForUser(getUserCart()));
        dispatch(setUserCartPrice(getUserCartPrice()));
      })
      .catch((err) => {
        dispatch({ type: 'INVALID' });
      });
  }
};

export { useTokenValidation };
