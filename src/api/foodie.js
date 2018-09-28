import request from '@/utils/request'

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

export function getUser(user_id) {
    return request({
        url: '/foodie/v1/user/'+user_id,
        method: 'GET',
    })
}

export function deleteSession() {
    return request({
        url: '/foodie/v1/session',
        method: 'DELETE'
    })
}