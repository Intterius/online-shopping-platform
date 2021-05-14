const defaultState = {
    productList: []
}

export const ADD_TO_CART_AS_GUEST = "ADD_TO_CART_AS_GUEST";
export const ADD_TO_CART_AS_USER = "ADD_TO_CART_AS_USER";

const addToCartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CART_AS_GUEST:
            console.log(state)
            return {...state, productList:[...state.productList, {...action.payload}]};
        case ADD_TO_CART_AS_USER:
            localStorage.setItem('cartContent', JSON.stringify({...state, productList:[...state.productList, {...action.payload}]}));
            return {...state, productList:[...state.productList, {...action.payload}]};

        default:
            return state;
    }
}

export const addToCartAsGuest = payload => ({type: ADD_TO_CART_AS_GUEST, payload});
export const addToCartAsUser = payload => ({type: ADD_TO_CART_AS_USER, payload})

export default addToCartReducer;
