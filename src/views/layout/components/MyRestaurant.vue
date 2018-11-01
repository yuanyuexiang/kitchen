<template>
    <el-dropdown v-if="restaurants" @command="handleCommand">
        <span class="el-dropdown-link">
            {{currentRestaurant.name_en}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in restaurants" :key="item.id" :command="item">{{item.name_en}}</el-dropdown-item>
            <el-dropdown-item divided>Create Restaurant</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    <div v-else>
        <span class="el-dropdown-link">
            <router-link to="/restaurantManagement/restaurantDetails">Create Restaurant</router-link>
        </span>
    </div>
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
        watch:{
            restaurant(newRestaurant, oldRestaurant){
                let myRestaurant = JSON.parse(JSON.stringify(newRestaurant))
                if(myRestaurant){
                    this.currentRestaurant = myRestaurant
                }
            },
            restaurants(newRestaurants, oldRestaurants){
                console.log("-------------watch-----------------")
                console.log(newRestaurants)
            }
        },
        data() {
            return {
                currentRestaurant: {},
            }
        },
        methods: {
            ...mapActions(['getRestaurants','setRestaurant','deleteRestaurant']),
            handleCommand(command) {
                if(command != undefined){
                    if( !this.currentRestaurant || this.currentRestaurant.id != command.id){
                        this.currentRestaurant = command;
                        console.log("****************************")
                        console.log(this.currentRestaurant)
                        this.setRestaurant(this.currentRestaurant)
                        this.$message('click on item ' + command.name_en);
                    }
                }else{
                    this.deleteRestaurant()
                    this.$router.push("/restaurantManagement/restaurantDetails")
                }
            },
        },
        mounted(){
            this.currentRestaurant = this.restaurant
        },
    }

</script>
