import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCartForUser } from '../redux/reducers/cartReducer';
import { setUserCartPrice } from '../redux/reducers/cartPriceReducer';
import { demoUrl } from './baseUrl';
import { cartRequest } from './requestInterceptor';

const useUserValidation = () => {
  let user = localStorage.getItem('key');
  const dispatch = useDispatch();
  if (user) {
    axios
      .get(`${demoUrl}/sign-in/userInfo`, {
        headers: {
          Authorization: user,
        },
      })
      .then((res) => {
        cartRequest.get(`${demoUrl}/cart`).then((res) => {
          dispatch(setCartForUser(res.data));
          dispatch(
            setUserCartPrice(
              res.data.reduce(
                (a, b) => Number((a + b.price * b.quantity).toFixed(2)),
                0
              )
            )
          );
        });
        dispatch({ type: 'VALID', payload: res.data });
      })
      .catch(() => {
        dispatch({ type: 'INVALID' });
      });
  }
};

export { useUserValidation };
