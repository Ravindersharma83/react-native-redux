import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/CartSlice";

const store = configureStore({
    reducer:{
        name:CartReducer
    }
});

export default store;