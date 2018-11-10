import {
    createSession,
    getUser,
    deleteSession,
} from '@/api/foodie'
import {
    getToken,
    setToken,
    removeToken,
    getUserID,
    setUserID,
    removeUserID,
} from '@/utils/auth'

const user = {
    state: {
        token: getToken(),
        user_id: getUserID(),
        name: '',
        avatar: '',
        role: '',
        user:null,
    },
    getters: {
        user: state => {
            if(!state.user){
                state.user = JSON.parse(localStorage.getItem("user"))
            }
            return state.user
        },
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USER_ID: (state, user_id) => {
            state.user_id = user_id
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLE: (state, role) => {
            state.role = role
        },
        SaveUser: (state,data) => {
            state.user = data;
            if(data){
                localStorage.setItem("user",JSON.stringify(state.user));
            }
        },
        DeleteUser: (state,data) => {
            localStorage.removeItem("user");
        },
    },
    actions: {
        // 登录
        Login({commit}, userInfo) {
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                createSession(username, userInfo.password).then(response => {
                    const data = response.data
                    console.log(data)
                    setToken(data.token)
                    commit('SET_TOKEN', data.token)
                    setUserID(data.user_id)
                    commit('SET_USER_ID', data.user_id)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 获取用户信息
        GetInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                getUser(state.user_id).then(response => {
                    const data = response.data
                    if (data.role) {
                        commit('SET_ROLE', data.role)
                    } else {
                        reject('getInfo: role must be a non-null string !')
                    }
                    commit('SET_NAME', data.name)
                    commit('SET_AVATAR', data.avatar)
                    commit('SaveUser',data)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 登出
        Logout({commit,state}) {
            return new Promise((resolve, reject) => {
                deleteSession().then(() => {
                    commit('SET_TOKEN', '')
                    commit('SET_ROLE', '')
                    commit('USER_ID', '')
                    removeToken()
                    removeUserID()
                    commit('DeleteUser',null)
                    localStorage.clear()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 前端 登出
        FedLogOut({
            commit
        }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        }
    }
}

export default user