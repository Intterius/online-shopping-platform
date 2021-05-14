const defaultState = {
    productId: ''

};

export const GET_PRODUCT_ID = "GET_PRODUCT_ID";

export const getProductIdReducer = (state = defaultState, action)=>{
    switch(action.type){
        case GET_PRODUCT_ID:
            return {...state, productId: action.payload}
        default:
            return state;
    }
}

export const getProductId = payload =>({type: GET_PRODUCT_ID, payload})
