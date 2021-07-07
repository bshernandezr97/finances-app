import { types } from "../types/types";
import { hideLoading, showLoading } from "./ui";


export const login = () => ({
    type: types.login
});

export const logout = () => ({
    type: types.logout
});

export const startLogin = (email, password) => {
    return async (dispatch) => {
        dispatch(showLoading());
        await setTimeout(() => {
            dispatch(hideLoading());
            dispatch(login());
        }, 2000);
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        await setTimeout(() => {
            dispatch(logout());
            dispatch(hideLoading());
        }, 2000);
    }
}