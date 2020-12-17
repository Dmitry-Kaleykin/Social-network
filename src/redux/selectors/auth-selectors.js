export function getCurrentUserIdState (state) {
    return state.header.id
}

export function getIsAuthState (state) {
    return state.header.isAuth
}

export function getLoginState (state) {
    return state.header.login
}
