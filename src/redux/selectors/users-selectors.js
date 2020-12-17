export function getUsersState (state) {
    return state.users.users
}

export function getPageSizeState (state) {
    return state.users.pageSize
}

export function getTotalUsersCountState (state) {
    return state.users.totalUsersCount
}

export function getCurrentPageState (state) {
    return state.users.currentPage
}

export function getFetchState (state) {
    return state.users.fetch
}

export function getFollowingInProgressState (state) {
    return state.users.followingInProgress
}