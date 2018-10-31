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

export function getRestaurantList(user_id) {
    return request({
        url: '/foodie/v1/restaurant',
        method: 'GET',
        params:{
            query:'administrator_id:'+user_id
        },
    })
}

export function addRestaurant(data) {
    return request({
        url: '/foodie/v1/restaurant',
        method: 'POST',
        data,
    })
}

export function updateRestaurant(data) {
    return request({
        url: '/foodie/v1/restaurant/'+data.id,
        method: 'PUT',
        data,
    })
}
/*
export const addRestaurant = data => fetch('/foodie/v1/restaurant', data, 'POST');
export const updateRestaurant = data => fetch('/foodie/v1/restaurant/'+data.id, data, 'PUT');
export const deleteRestaurant = id => fetch('/foodie/v1/restaurant/'+id, {}, 'DELETE');
export const getRestaurantList = data => fetch('/foodie/v1/restaurant', data, 'GET');
export const getRestaurantCount = data => fetch('/foodie/v1/restaurant/count', data, 'GET');
*/