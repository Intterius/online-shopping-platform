import axios from 'axios';
import { setProductList } from '../redux/reducers/productPathReducer';
import { useDispatch } from 'react-redux';


const useAddProductList = () => {
  const dispatch = useDispatch();
  axios
    .get('https://online-shopping-platform-back.herokuapp.com/products')
    .then((res) => {
      dispatch(setProductList(res.data));
    })
    .catch((err) => console.error(err));
};

export default useAddProductList;
