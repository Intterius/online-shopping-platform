import addToCartReducer from './addToCartReducer';
import { tokenReducer } from './tokenReducer';
import { combineReducers } from 'redux';
import { productPathReducer } from './productPathReducer';
import { getProductIdReducer } from './getProductIdReducer';
import { cartPriceReducer } from './cartPriceReducer';

const rootReducer = combineReducers({
  addToCartReducer,
  tokenReducer,
  productPathReducer,
  getProductIdReducer,
  cartPriceReducer,
});

export default rootReducer;
