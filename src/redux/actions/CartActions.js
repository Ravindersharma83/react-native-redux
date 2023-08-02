// Action take actionType and Data from View and pass this to reducer 

import { ADD_ITEM, REMOVE_ITEM } from "../ActionTypes";

export const addItemToCart = (data) => {
    // data kuch bhi ho skta/aa sakta hai like array,object,string,boolean,int etc or isko hum reducer me pass karenge action se
    return {
        type: ADD_ITEM,
        payload: data,
    };
};

export const removerItemFromCart = (index) => {
    return {
        type: REMOVE_ITEM,
        payload: index,
    };
};