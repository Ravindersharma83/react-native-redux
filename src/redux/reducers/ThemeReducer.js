import { CHANGE_THEME } from "../ActionTypes";


export const themeReducer = (state = false , {type,payload}) => {
    switch(type){
        case CHANGE_THEME:
            return payload;
        default:
            return state;
    }
}