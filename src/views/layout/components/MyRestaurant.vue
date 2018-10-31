<template>
    <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
            {{currentRestaurants.name_en}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in restaurants" :key="item.id" :command="item">{{item.name_en}}</el-dropdown-item>
            <el-dropdown-item divided>Create Restaurant</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    import {
        getRestaurantList,
    } from '@/api/foodie'
    import {
        getToken,
        setToken,
        removeToken,
        getUserID,
        setUserID,
        removeUserID,
    } from '@/utils/auth'

    export default {
        components: {
        },
        computed: {
            ...mapGetters([
                'restaurants',
                'restaurant',
            ])
        },
        data() {
            return {
                //restaurants: ["Krazi Kebob","Krazi Burrito","Bagel Place","DemoSample"],
                currentRestaurants: "Krazi Kebob",
                user_id:getUserID(),
            }
        },
        methods: {
            ...mapActions(['getRestaurants','setRestaurant']),
            handleCommand(command) {
                if(command != undefined){
                    if(this.currentRestaurants.id != command.id){
                        this.currentRestaurants = command;
                        console.log("****************************")
                        console.log(this.currentRestaurants)
                        this.setRestaurant(this.currentRestaurants)
                        this.$message('click on item ' + command.name_en);
                    }
                }
            },
            /*
            getRestaurants(){
                console.log("----------------")
                console.log({administrator_id:this.user_id})
                getRestaurantList(this.user_id).then(response => {
                    const data = response.data
                    console.log("--------getRestaurantList------")
                    console.log(data)
                    if (data != null){
                        this.restaurants = data
                    }
                }).catch(error => {
                    reject(error)
                })
            }
            */
        },
        mounted(){
            //this.getRestaurants()
            this.currentRestaurants = this.restaurant
            //console.log("================================")
            //console.log(this.restaurants)
        },
    }

</script>
