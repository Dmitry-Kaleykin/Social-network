import Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "6ac2f7da-6ba0-4410-afba-ed686221a25f",
    }
});

export const profileAPI = {
    getUserProfile: function (userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus: function (userId) {
        return instance.get(`/profile/status/${userId}`).then(response => response.data);
    },
    updateStatus: function (status) {
        return instance.put(`/profile/status`, {status}).then(response => response.data);
    },
}

export const headerAPI = {
    getAuth: function () {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login: function (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data);
    },
    logout: function () {
        return instance.delete(`auth/login`).then(response => response.data);
    },
}

export const usersAPI = {
    getUsers: function (currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow: function (userId) {
        return instance.post(`follow/${userId}`).then(response => response.data);
    },
    unFollow: function (userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },
}