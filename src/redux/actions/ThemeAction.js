import { CHANGE_THEME } from "../ActionTypes";


export const changeTheme = (type) => {
    return {
        type: CHANGE_THEME,
        payload: type,
    };
};