import cartReducer from './cartReducer';
import { tokenReducer } from './tokenReducer';
import { combineReducers } from 'redux';
import { productPathReducer } from './productPathReducer';
import { getProductIdReducer } from './getProductIdReducer';
import { cartPriceReducer } from './cartPriceReducer';
import { userRoleReducer } from './userRoleReducer';
import { productQuantityReducer } from './productQuantityReducer';

const rootReducer = combineReducers({
  cartReducer,
  tokenReducer,
  productPathReducer,
  getProductIdReducer,
  cartPriceReducer,
  userRoleReducer,
  productQuantityReducer,
});

export default rootReducer;
