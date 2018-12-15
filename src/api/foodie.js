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
export function verificateUser(data) {
    return request({
        url: '/foodie/v1/exemption/user/verification',
        method: 'POST',
        data,
    })
}
export function regainUser(data) {
    return request({
        url: '/foodie/v1/exemption/user/regain',
        method: 'POST',
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

export function updateRestaurantStatus(data) {
    return request({
        url: '/foodie/v1/restaurant/'+ data.id+'/status',
        method: 'PUT',
        data
    });
}

export function getInvoice(id) {
    return request({
        url: '/foodie/v1/invoice/'+id,
        method: 'GET',
    })
}

export function addInvoice(data) {
    return request({
        url: '/foodie/v1/invoice',
        method: 'POST',
        data,
    })
}

export function updateInvoice(data) {
    return request({
        url: '/foodie/v1/invoice/'+data.id,
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

export function updateDishStatus(data) {
    return request({
        url: '/foodie/v1/dish/'+ data.id+'/status',
        method: 'PUT',
        data
    });
}

export function updateDishSchedule(data) {
    return request({
        url: '/foodie/v1/dish/'+ data.id+'/schedule',
        method: 'PUT',
        data
    });
}

export function getStepsListByDishID(id) {
    return request({
        url: '/foodie/v1/dish/'+id+'/steps',
        method: 'GET',
    });
}

export function getMaterialList(restaurant_id) {
    return request({
        url: '/foodie/v1/material',
        method: 'GET',
        params:{
            query:'restaurant_id:'+restaurant_id,
            sortby: "id",
            order: "desc",
        },
    })
}

export function addMaterial(data) {
    return request({
        url: '/foodie/v1/material',
        method: 'POST',
        data,
    })
}

export function deleteMaterial(id) {
    return request({
        url: '/foodie/v1/material/'+id,
        method: 'DELETE',
    })
}