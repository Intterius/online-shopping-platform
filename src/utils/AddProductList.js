import axios from 'axios';
import { setProductList } from '../redux/reducers/productPathReducer';
import { useDispatch } from 'react-redux';
import { demoUrl } from './baseUrl';


const useAddProductList = () => {
  const dispatch = useDispatch();
  axios
    .get(`${demoUrl}/products?pageNumber=0&itemsPerPage=50`)
    .then((res) => {
      dispatch(setProductList(res.data));
    })
    .catch((err) => console.error(err));
};

export default useAddProductList;
