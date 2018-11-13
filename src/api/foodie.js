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
export function updateUser(data) {
    return request({
        url: '/foodie/v1/user/'+data.id,
        method: 'PUT',
        data,
    })
}
export function updateUserAcceptEmail(data) {
    return request({
        url: '/foodie/v1/user/'+data.id+'/accept_email',
        method: 'PUT',
        data,
    })
}
export function updateUserPassword(data,old_password) {
    return request({
        url: '/foodie/v1/user/'+data.id+'/password'+'?old_password='+old_password,
        method: 'PUT',
        data,
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

export function getSubscription(id) {
    return request({
        url: '/foodie/v1/subscription/'+id,
        method: 'GET',
    })
}

export function addSubscription(data) {
    return request({
        url: '/foodie/v1/subscription',
        method: 'POST',
        data,
    })
}

export function updateSubscription(data) {
    return request({
        url: '/foodie/v1/subscription/'+data.id,
        method: 'PUT',
        data,
    })
}

export function getDishCount(params) {
    return request({
        url: '/foodie/v1/dish/count',
        method: 'GET',
        params
    });
}

export function getDishList(params) {
    return request({
        url: '/foodie/v1/dish',
        method: 'GET',
        params
    });
}

export function getDish(id) {
    return request({
        url: '/foodie/v1/dish/'+id,
        method: 'GET',
    })
}

export function updateDishForCustomer(data) {
    return request({
        url: '/foodie/v1/dish/customer/'+ data.id,
        method: 'PUT',
        data
    });
}

export function getStepsListByDishID(id) {
    return request({
        url: '/foodie/v1/dish/'+id+'/steps',
        method: 'GET',
    });
};