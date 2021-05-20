const SET_USER_CART_PRICE = 'SET_USER_CART_PRICE';
const ADD_PRICE = 'ADD_PRICE';
const UPDATE_PRICE = 'UPDATE_PRICE';
const REMOVE_PRICE = 'REMOVE_PRICE';

const cartPriceReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_USER_CART_PRICE:
      return action.payload;
    case ADD_PRICE:
      return Number((state + action.payload).toFixed(2));
    case UPDATE_PRICE:
      return Number(
        action.payload
          .reduce((a, b) => Number((a + b.price * b.quantity).toFixed(2)), 0)
          .toFixed(2)
      );
    case REMOVE_PRICE:
      return Number((state -= action.payload).toFixed(2));
    default:
      return state;
  }
};

export { cartPriceReducer };

export const setUserCartPrice = (payload) => ({
  type: SET_USER_CART_PRICE,
  payload,
});
export const addPrice = (payload) => ({ type: ADD_PRICE, payload });
export const updatePrice = (payload) => ({ type: UPDATE_PRICE, payload });
export const removePrice = (payload) => ({ type: REMOVE_PRICE, payload });
