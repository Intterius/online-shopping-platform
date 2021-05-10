import axios from 'axios';
import { useDispatch } from 'react-redux';

const TokenValidation = () => {
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
      .then((res) => dispatch({ type: 'VALID', payload: res.data }))
      .catch((err) => dispatch({ type: 'INVALID' }));
  }
};

export { TokenValidation };
