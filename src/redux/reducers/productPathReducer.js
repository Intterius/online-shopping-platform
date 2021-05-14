const allProducts = [];

export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";

export const productPathReducer = (state = allProducts, action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return [...state, [...action.payload]];
        default:
            return state;
    }
}

export const setProductList = payload => ({type: SET_PRODUCT_LIST, payload});
