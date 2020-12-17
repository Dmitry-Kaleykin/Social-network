import { profileAPI } from "../api/api";

const PROFILE_ADD_POST = "ADD-POST";
const PROFILE_SET_USER_PROFILE = "SET-USER-PROFILE";
const PROFILE_GET_USER_STATUS = "GET-USER-STATUS";
const PROFILE_UPDATE_USER_STATUS = "UPDATE-USER-STATUS";

let initialState = {
    writterData: [
        {id: 1, message: "First post", likesCount: 0},
    ],
    profile: null,
    status: "",
}

function profileReducer (state = initialState, action) {
    switch (action.type) {
        case PROFILE_ADD_POST: {
            let post = {
                id: 2,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                writterData: [...state.writterData, post],
            };
        }
        case PROFILE_SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case PROFILE_GET_USER_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case PROFILE_UPDATE_USER_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        default: 
            return state;
    }
}

export function updateUserStatusActionCreator (status) {
    return ({
        type: PROFILE_UPDATE_USER_STATUS,
        status,
    })
}

export function getUserStatusActionCreator (status) {
    return ({
        type: PROFILE_GET_USER_STATUS,
        status,
    })
}

export function addPost (newPostText) {
    return ({
        type: PROFILE_ADD_POST,
        newPostText,
    })
}

export function setUserProfile (profile) {
    return ({
        type: PROFILE_SET_USER_PROFILE,
        profile,
    })
}

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(data));
}

export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(getUserStatusActionCreator(data));
}

export const updateUserStatusThunkCreator = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(updateUserStatusActionCreator(status));
    }
}


export default profileReducer;