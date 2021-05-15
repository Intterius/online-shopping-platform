const SET_CART_FOR_USER = 'SET_CART_FOR_USER';
const ADD_TO_CART_AS_GUEST = 'ADD_TO_CART_AS_GUEST';
const ADD_TO_CART_AS_USER = 'ADD_TO_CART_AS_USER';
const REMOVE_ITEM_AS_GUEST = 'REMOVE_ITEM_AS_GUEST';
const REMOVE_ITEM_AS_USER = 'REMOVE_ITEM_AS_USER';

const addToCartReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CART_FOR_USER:
      return [...action.payload];

    case ADD_TO_CART_AS_GUEST:
      action.payload.id = Math.random();
      return [{ ...action.payload }, ...state];

    case ADD_TO_CART_AS_USER:
      action.payload.id = Math.random();
      localStorage.setItem(
        'cartContent',
        JSON.stringify([{ ...action.payload }, ...state])
      );
      return [{ ...action.payload }, ...state];

    case REMOVE_ITEM_AS_GUEST:
      return [...state.filter((item) => item.id !== action.payload)];

    case REMOVE_ITEM_AS_USER:
      localStorage.setItem(
        'cartContent',
        JSON.stringify([...state.filter((item) => item.id !== action.payload)])
      );
      return [...state.filter((item) => item.id !== action.payload)];

    default:
      return state;
  }
};

export const setCartForUser = (payload) => ({
  type: SET_CART_FOR_USER,
  payload,
});

export const addToCartAsGuest = (payload) => ({
  type: ADD_TO_CART_AS_GUEST,
  payload,
});
export const addToCartAsUser = (payload) => ({
  type: ADD_TO_CART_AS_USER,
  payload,
});

export const removeItemAsGuest = (payload) => ({
  type: REMOVE_ITEM_AS_GUEST,
  payload,
});

export const removeItemAsUser = (payload) => ({
  type: REMOVE_ITEM_AS_USER,
  payload,
});

export default addToCartReducer;
