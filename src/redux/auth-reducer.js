import { headerAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const AUTH_SET_USER_DATA = "SET-USER-DATA";
const AUTH_SET_LOGIN_DATA = "SET-LOGIN-DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

function authReducer (state = initialState, action) {
    switch (action.type) {
        case AUTH_SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

export function setUserData (id, email, login, isAuth) {
    return ({
        type: AUTH_SET_USER_DATA,
        payload: {
            id,
            email, 
            login,
            isAuth
        }
    })
}

export function setLoginData (email, password, rememberMe, captcha) {
    return ({
        type: AUTH_SET_LOGIN_DATA,
        payload: {
            email,
            password, 
            rememberMe,
            captcha,
        }
    })
}

// export const getAuthThunkCreator = () => (dispatch) => {
//     return headerAPI.getAuth().then( data => {
//         if (data.resultCode === 0) {
//             let {id, email, login, } = data.data; 
//             dispatch(setUserData(id, email, login, true));
//         }
//     } )
// }

export const getAuthThunkCreator = () => async (dispatch) => {
    let data = await headerAPI.getAuth();
    if (data.resultCode === 0) {
        let {id, email, login, } = data.data; 
        return dispatch(setUserData(id, email, login, true));
    }
}

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    let data = await headerAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(getAuthThunkCreator());
    } else {
        let message = data.messages.length ? data.messages[0] : "some error";
        dispatch(stopSubmit("login", {_error: message} ));
    }
}

export const logoutThunkCreator = () => async (dispatch) => {
    let data = await headerAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export default authReducer;