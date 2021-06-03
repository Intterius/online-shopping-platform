import axios from 'axios';
import { setProductList } from '../redux/reducers/productPathReducer';
import { useDispatch } from 'react-redux';
import { url } from './baseUrl';
import { setDB } from '../redux/reducers/productQuantityReducer';

const useAddProductList = () => {
  const dispatch = useDispatch();
  axios
    .get(`${url}/products?pageNumber=0&itemsPerPage=100&category=&department=`)
    .then((res) => {
      dispatch(setProductList(res.data));
      dispatch(setDB(res.data));
    })
    .catch((err) => console.error(err));
};

export default useAddProductList;
