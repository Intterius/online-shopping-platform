import addToCartReducer from "./addToCartReducer";
import {tokenReducer} from "./tokenReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    addToCartReducer,
    tokenReducer
});

export default rootReducer;
