<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container" />
        <breadcrumb />
        <my-restaurant class="restaurant-container"/>
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
                <!-- <i class="el-icon-caret-bottom" /> -->
                <img v-if="restaurant!=null" :src='restaurant.pic_url.length>1?restaurant.pic_url:"/static/logo.png"' class="user-avatar">
                <img v-else src="/static/logo.png" class="user-avatar">
            </div>
            <el-dropdown-menu slot="dropdown" class="user-dropdown">
                <router-link class="inlineBlock" to="/myAccount/index">
                    <el-dropdown-item>
                        My Account
                    </el-dropdown-item>
                </router-link>
                <el-dropdown-item divided>
                    <span style="display:block;" @click="logout">Logout</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import Breadcrumb from '@/components/Breadcrumb'
    import Hamburger from '@/components/Hamburger'
    import MyRestaurant from './MyRestaurant'

    export default {
        components: {
            Breadcrumb,
            Hamburger,
            MyRestaurant,
        },
        computed: {
            ...mapGetters([
                'sidebar',
                'avatar',
                'restaurant'
            ])
        },
        methods: {
            toggleSideBar() {
                this.$store.dispatch('ToggleSideBar')
            },
            logout() {
                this.$store.dispatch('Logout').then(() => {
                    location.reload() // 为了重新实例化vue-router对象 避免bug
                })
            }
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;

        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }

        .screenfull {
            position: absolute;
            right: 90px;
            top: 16px;
            color: red;
        }

        .restaurant-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 80px;
        }

        .avatar-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 20px;

            .avatar-wrapper {
                cursor: pointer;
                margin-top: 5px;
                position: relative;

                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }

                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }

</style>
