import { combineReducers } from "redux";
import { cartReducer } from "./CartReducers";

const reducers = combineReducers({
    cartReducer : cartReducer
})

export default reducers;