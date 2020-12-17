import { getAuthThunkCreator } from "./auth-reducer";

const APP_INITIALIZED = "INITIALIZED";

let initialState = {
    initialized: false,
}

function appReducer (state = initialState, action) {
    switch (action.type) {
        case APP_INITIALIZED: {
            return {
                ...state,
                initialized: true,
            }
        }
        default: {
            return state;
        }
    }
}

export function initSucces () {
    return ({
        type: APP_INITIALIZED,
    })
}

export const initThunkCreator = () => (dispatch) => {
    dispatch(getAuthThunkCreator()).then( () => {
        dispatch(initSucces());
    })
}

export default appReducer;