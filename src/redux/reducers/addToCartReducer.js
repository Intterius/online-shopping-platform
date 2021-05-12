const defaultState = {
    productList: []
}

export const ADD_TO_CART = "ADD_TO_CART";

const addToCartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {...state, productList:[...state.productList, action.payload]};
        default:
            return state;
    }
}

export const addToCart = payload => ({type: ADD_TO_CART, payload})

export default addToCartReducer;
