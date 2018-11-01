const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    role: state => state.user.role,
    //restaurants:state => state.restaurant.restaurants,
    //restaurant:state => state.restaurant.restaurant,
}
export default getters
