import { useDispatch } from 'react-redux';
import { setCartForUser } from '../redux/reducers/cartReducer';
import { setUserCartPrice } from '../redux/reducers/cartPriceReducer';
import { url } from './baseUrl';
import { interceptorRequest } from './requestInterceptor';
import { setUserRole } from '../redux/reducers/userRoleReducer';
import { returnQuantity } from '../redux/reducers/productQuantityReducer';
import axios from 'axios';

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
          for (let item of res.data) {
            dispatch(
              returnQuantity({
                id: item.id,
                quantity: item.quantityInStock - item.quantity,
              })
            );
          }
        });
        if (res.data.role === 'USER') {
          dispatch({
            type: 'VALID',
            payload: {
              user: res.data.userName,
              orderHistory: res.data.customer,
            },
          });
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
