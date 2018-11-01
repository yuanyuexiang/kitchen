import {
    getUserID,
} from '@/utils/auth'
import {
    getRestaurantList,
} from '@/api/foodie'

const restaurant = {
    state: {
        restaurants:null,
        restaurant:null
    },
    getters: {
        restaurant: state => {
            if(!state.restaurant){
                state.restaurant = JSON.parse(localStorage.getItem("restaurant"))
            }
            return state.restaurant
        },
        restaurants: state => {
            if(!state.restaurants){
                state.restaurants = JSON.parse(localStorage.getItem("restaurants"))
            }
            return state.restaurants
        }
    },
    mutations: {
        SaveRestaurantList: (state,data) => {
            state.restaurants = data;
            console.log(JSON.stringify(state.restaurants))
            if(data){
                localStorage.setItem("restaurants",JSON.stringify(state.restaurants));
            }
        },
        SaveRestaurant: (state,data) => {
            state.restaurant = data;
            if(data){
                localStorage.setItem("restaurant",JSON.stringify(state.restaurant));
            }
        },
        DeleteRestaurant: (state,data) => {
            localStorage.removeItem("restaurant");
            state.restaurant = {name_en:"Create Restaurant"}
            console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
            console.log(state.restaurant)
        },
    },
    actions: {
        getRestaurants({ commit, state }){
            return new Promise((resolve, reject) => {
                getRestaurantList(getUserID()).then(response => {
                    const data = response.data
                    commit('SaveRestaurantList',data)
                    console.log("----------------getRestaurantList------------------")
                    console.log(data)
                    console.log("----------------getRestaurantList------------------")
                    if(state.restaurant == null && data != null){
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
        },
        deleteRestaurant({ commit,}){
            console.log("GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG")
            commit('DeleteRestaurant',null)
        }
    }
}

export default restaurant
