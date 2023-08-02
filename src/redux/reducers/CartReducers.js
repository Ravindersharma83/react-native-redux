import { ADD_ITEM, REMOVE_ITEM } from "../ActionTypes";

const initialState = {
    cartItem: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_ITEM:
            // return { ...state,payload };
            return {...state, cartItem: [...state.cartItem, payload]};

        case REMOVE_ITEM:
            const deleteArray = state.cartItem.filter((item,index)=>{
                // return (index = action.payload)
                return index !== payload; // Filter out the item at the specified index
            });
            // return deleteArray;
            return { ...state, cartItem: deleteArray }; // Update the cartItem array
        default:
            return state;
    }
}
