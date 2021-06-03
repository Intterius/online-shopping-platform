const productQuantityReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_DB':
      return [...action.payload];
    case 'REMOVE_QUANTITY':
      const itemStock = state.findIndex((el) => el.id === action.payload.id);
      if (itemStock !== -1) {
        state[itemStock].quantityInStock -= action.payload.quantity;
        return [...state];
      }
      return [{ ...action.payload }, ...state];
    case 'UPDATE_QUANTITY':
      const updatedItemStock = state.findIndex(
        (el) => el.id === action.payload.id
      );
      if (updatedItemStock !== -1) {
        state[updatedItemStock].quantityInStock = action.payload.quantity;
        return [...state];
      }
      return [{ ...action.payload }, ...state];
    case 'RETURN_QUANTITY':
      const returnedItemStock = state.findIndex(
        (el) => el.id === action.payload.id
      );
      if (returnedItemStock !== -1) {
        state[returnedItemStock].quantityInStock = action.payload.quantity;
        return [...state];
      }
      return [{ ...action.payload }, ...state];
    default:
      return state;
  }
};

export { productQuantityReducer };

export const setDB = (payload) => ({ type: 'SET_DB', payload });

export const removeQuantity = (payload) => ({
  type: 'REMOVE_QUANTITY',
  payload,
});

export const updateQuantity = (payload) => ({
  type: 'UPDATE_QUANTITY',
  payload,
});
export const returnQuantity = (payload) => ({
  type: 'RETURN_QUANTITY',
  payload,
});
