import request from '@/utils/request'

export function login(username, password) {
    return request({
        url: '/user/login',
        method: 'post',
        data: {
            username,
            password
        }
    })
}

export function getInfo(token) {
    return request({
        url: '/user/info',
        method: 'get',
        params: {
            token
        }
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'POST'
    })
}

export function createSession(username, password) {
    return request({
        url: '/foodie/v1/session',
        method: 'POST',
        data: {
            username,
            password
        }
    })
}