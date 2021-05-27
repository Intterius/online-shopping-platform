import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCartForUser } from '../redux/reducers/cartReducer';
import { setUserCartPrice } from '../redux/reducers/cartPriceReducer';
import { url } from './baseUrl';
import { interceptorRequest } from './requestInterceptor';
import { setUserRole } from '../redux/reducers/userRoleReducer';

const useUserValidation = () => {
  let user = localStorage.getItem('key');
  const dispatch = useDispatch();
  if (user) {
    axios
      .get(`${url}/sign-in/userInfo`, {
        headers: {
          Authorization: user,
        },
      })
      .then((res) => {
        interceptorRequest.get(`${url}/cart`).then((res) => {
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
        if (res.data.role === 'USER') {
          dispatch({ type: 'VALID', payload: res.data.userName });
          return;
        } else {
          dispatch({ type: 'VALID', payload: res.data.userName });
          dispatch(setUserRole(res.data.role));
        }
      })
      .catch(() => {
        dispatch({ type: 'INVALID' });
     });
  }
};

export { useUserValidation };
