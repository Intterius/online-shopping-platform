const SET_CART_FOR_USER = 'SET_CART_FOR_USER';
const ADD_TO_CART_AS_GUEST = 'ADD_TO_CART_AS_GUEST';
const ADD_TO_CART_AS_USER = 'ADD_TO_CART_AS_USER';
const REMOVE_ITEM_AS_GUEST = 'REMOVE_ITEM_AS_GUEST';
const REMOVE_ITEM_AS_USER = 'REMOVE_ITEM_AS_USER';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CART_FOR_USER:
      return [...action.payload];

    case ADD_TO_CART_AS_GUEST:
      const repeatedGuestItem = state.findIndex(
        (el) => el.id === action.payload.id
      );
      if (repeatedGuestItem !== -1) {
        state[repeatedGuestItem].quantity += action.payload.quantity;
        return [...state];
      }
      return [{ ...action.payload }, ...state];

    case ADD_TO_CART_AS_USER:
      const repeteadUserItem = state.findIndex(
        (el) => el.id === action.payload.id
      );
      if (repeteadUserItem !== -1) {
        state[repeteadUserItem].quantity += action.payload.quantity;
        localStorage.setItem('cartContent', JSON.stringify(state));
        return [...state];
      }
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

export default cartReducer;
