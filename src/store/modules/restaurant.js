import {
    getUserID,
} from '@/utils/auth'
import {
    getRestaurantList,
} from '@/api/foodie'

const restaurant = {
    state: {
        restaurants:JSON.parse(localStorage.getItem("restaurants")),
        restaurant:JSON.parse(localStorage.getItem("restaurant"))
    },
    mutations: {
        SaveRestaurantList: (state,data) => {
            state.restaurants = data;
            console.log(JSON.stringify(state.restaurants))
            localStorage.setItem("restaurants",JSON.stringify(state.restaurants));
        },
        SaveRestaurant: (state,data) => {
            state.restaurant = data;
            localStorage.setItem("restaurant",JSON.stringify(state.restaurant));
        },
    },
    actions: {
        getRestaurants({ commit, state }){
            return new Promise((resolve, reject) => {
                getRestaurantList(getUserID()).then(response => {
                    const data = response.data
                    commit('SaveRestaurantList',data)
                    if(state.restaurant == null){
                        commit('SaveRestaurant',data[0])
                    }
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        setRestaurant({ commit, },restaurant){
            commit('SaveRestaurant', restaurant)
        }
    }
}

export default restaurant
