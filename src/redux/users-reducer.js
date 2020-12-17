import { usersAPI } from "../api/api";

const USERS_FOLLOW = "FOLLOW";
const USERS_UNFOLLOW = "UNFOLLOW";
const USERS_SET_USERS = "SET-USERS";
const USERS_SELECT_PAGE = "SELECT-PAGE";
const USERS_SET_TOTAL_USERS = "SET-TOTAL-USERS";
const USERS_TOGGLE_FETCH = "TOGGLE-FETCH";
const USERS_TOGGLE_BTN_STATUS = "TOGGLE-BTN-STATUS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    fetch: false,
    followingInProgress: [],
};

function usersReducer (state = initialState, action) {
    switch (action.type) {
        case USERS_FOLLOW: {
            return {
                ...state,
                users: state.users.map( u => (u.id === action.userId) ? {...u, followed: true} : u ),
            }
        }
        case USERS_UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( u => (u.id === action.userId) ? {...u, followed: false} : u ),
            }
        }
        case USERS_SET_USERS: {
            return {
                ...state,
                users: action.users,
            }
        }
        case USERS_SELECT_PAGE: {
            return {
                ...state,
                currentPage: action.page,
            }
        }
        case USERS_SET_TOTAL_USERS: {
            return {
                ...state,
                totalUsersCount: action.totalCount,
            }
        }
        case USERS_TOGGLE_FETCH: {
            return {
                ...state,
                fetch: action.fetch,
            }
        }
        case USERS_TOGGLE_BTN_STATUS: {
            return {
                ...state,
                followingInProgress: (action.fetch) 
                ? [...state.followingInProgress, action.userId ] 
                : state.followingInProgress.filter( id => id !== action.userId ),
            }
        }
        default: return state;
    }
}

export function toggleBtnStatus (fetch, userId) {
    return ({
        type: USERS_TOGGLE_BTN_STATUS,
        fetch,
        userId,
    })
}

export function toggleFetch (fetch) {
    return ({
        type: USERS_TOGGLE_FETCH,
        fetch,
    })
}

export function follow (userId) {
    return ({
        type: USERS_FOLLOW,
        userId,
    })
}

export function unFollow (userId) {
    return ({
        type: USERS_UNFOLLOW,
        userId,
    })
}

export function setUsers (users) {
    return ({
        type: USERS_SET_USERS,
        users,
    })
}

export function selectPage (page) {
    return ({
        type: USERS_SELECT_PAGE,
        page,
    })
}

export function setTotalUsersCount (totalCount) {
    return ({
        type: USERS_SET_TOTAL_USERS,
        totalCount,
    })
}

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleFetch(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleFetch(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

export const followThunkCreator = (userId) => async (dispatch) => {
    dispatch(toggleBtnStatus(true, userId));
    let data = await usersAPI.follow(userId);
    if (data.resultCode === 0) {
        dispatch(follow(userId));
    }
    dispatch(toggleBtnStatus(false, userId));
}

export const unFollowThunkCreator = (userId) => async (dispatch) => {
    dispatch(toggleBtnStatus(true, userId));
    let data = await usersAPI.unFollow(userId);
    if (data.resultCode === 0) {
        dispatch(unFollow(userId));
    }
    dispatch(toggleBtnStatus(false, userId));
}

export default usersReducer;