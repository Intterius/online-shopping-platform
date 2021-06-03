const productQuantityReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_DB':
      return [...action.payload];
    //   case 'REMOVE_QUANTITY':
    //       return
    default:
      return state;
  }
};

export { productQuantityReducer };

export const setDB = (payload) => ({ type: 'SET_DB', payload });
