import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

const UserIDKey = 'Admin-ID'

export function getUserID() {
    return Cookies.get(UserIDKey)
}

export function setUserID(user_id) {
    return Cookies.set(UserIDKey, user_id)
}

export function removeUserID() {
    return Cookies.remove(UserIDKey)
}
