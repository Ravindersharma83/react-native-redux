import { combineReducers } from "redux";
import { cartReducer } from "./CartReducers";
import { themeReducer } from "./ThemeReducer";

const reducers = combineReducers({
    cartReducer : cartReducer,
    themeReducer : themeReducer
})

export default reducers;