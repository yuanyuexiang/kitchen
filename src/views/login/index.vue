<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="loginForm" class="login-form" auto-complete="on"
            label-position="left">
            <!-- <h3 class="title">kitchen</h3> -->
            <div class="logo">
                <img src="/static/linglink.png" style="height:100px;">
            </div>
            <el-form-item prop="username">
                <span class="svg-container svg-container_login">
                    <svg-icon icon-class="user" />
                </span>
                <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="username" />
            </el-form-item>
            <el-form-item prop="password">
                <span class="svg-container">
                    <svg-icon icon-class="password" />
                </span>
                <el-input :type="pwdType" v-model="loginForm.password" name="password" auto-complete="on" placeholder="password"
                    @keyup.enter.native="handleLogin" />
                <span class="show-pwd" @click="showPwd">
                    <svg-icon icon-class="eye" />
                </span>
            </el-form-item>
            <el-form-item>
                <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
                    Sign in
                </el-button>
            </el-form-item>
            <!--
            <div class="tips">
                <span style="margin-right:20px;">username: admin</span>
                <span> password: admin</span>
            </div>
            -->
            <div class="tips">
                <span>
                    <router-link to="/forgetPassword">forget password</router-link>
                </span>
            </div>
        </el-form>
        <div class="foot">Copyright © 2018-2018 LingLink,LLC. All Rights Reserved.</div>
    </div>
</template>

<script>
    import {
        isvalidUsername
    } from '@/utils/validate'
    import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
    import md5 from 'js-md5';

    export default {
        name: 'Login',
        data() {
            const validateUsername = (rule, value, callback) => {
                if (!isvalidUsername(value)) {
                    callback(new Error('请输入正确的用户名'))
                } else {
                    callback()
                }
            }
            const validatePass = (rule, value, callback) => {
                if (value.length < 5) {
                    callback(new Error('密码不能小于5位'))
                } else {
                    callback()
                }
            }
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                loginRules: {
                    username: [{
                        required: true,
                        trigger: 'blur',
                        validator: validateUsername
                    }],
                    password: [{
                        required: true,
                        trigger: 'blur',
                        validator: validatePass
                    }]
                },
                loading: false,
                pwdType: 'password'
            }
        },
        methods: {
            ...mapActions(['Login','getRestaurants']),
            showPwd() {
                if (this.pwdType === 'password') {
                    this.pwdType = ''
                } else {
                    this.pwdType = 'password'
                }
            },
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.loading = true
                        /*
                        this.$store.dispatch('Login', this.loginForm).then(() => {
                            this.loading = false
                            this.$router.push({
                                path: '/'
                            })
                        }).catch(() => {
                            this.loading = false
                        })
                        */
                       
                       this.Login({username:this.loginForm.username,password:md5(this.loginForm.password)}).then(() => {
                            this.loading = false
                            this.getRestaurants()
                            this.$router.push({
                                path: '/'
                            })
                        }).catch(() => {
                            this.loading = false
                        })
                    } else {
                        return false
                    }
                    /*
                    if (valid) {
                        this.loading = false
                        this.$router.push({
                            path: '/'
                        })
                    }
                    */
                })
            }
        }
    }

</script>
<!--//$bg:#2B2B2B;-->
<style rel="stylesheet/scss" lang="scss">
    $bg:#eee;
    $light_gray:#eee;

    /* reset element-ui css */
    .login-container {
        .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;

            input {
                background: transparent;
                border: 0px;
                -webkit-appearance: none;
                border-radius: 0px;
                padding: 12px 5px 12px 15px;
                color: $light_gray;
                height: 47px;

                &:-webkit-autofill {
                    -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
                    -webkit-text-fill-color: #fff !important;
                }
            }
        }

        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }
    }
</style>
<style scoped>
.logo{
    display: flex;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: center;
}
.foot{
    display: flex;
    justify-content:center;
    margin-top: 10px;
    margin-bottom: 0px;
    bottom:0;
    position:absolute;
    padding: 0 10px;
    width: 100%;
    font-size: .2em;
    color: #FFF;
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
    $bg:#2B2B2B;
    $dark_gray:#889aa4;
    $light_gray:#eee;

    .login-container {
        position: fixed;
        height: 100%;
        width: 100%;
        background-color: $bg;

        .login-form {
            position: absolute;
            left: 0;
            right: 0;
            width: 520px;
            padding: 35px 35px 15px 35px;
            margin: 100px auto;
        }

        .tips {
            font-size: 14px;
            color: #fff;
            margin-bottom: 10px;
            display: flex;
            justify-content: flex-end;
            span {
                &:first-of-type {
                    margin-left: 1px;
                }
                &:last-of-type{
                    margin-right: 1px;
                }
            }
        }

        .svg-container {
            padding: 6px 5px 6px 15px;
            color: $dark_gray;
            vertical-align: middle;
            width: 30px;
            display: inline-block;

            &_login {
                font-size: 20px;
            }
        }

        .title {
            font-size: 26px;
            font-weight: 400;
            color: $light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }

        .show-pwd {
            position: absolute;
            right: 10px;
            top: 7px;
            font-size: 16px;
            color: $dark_gray;
            cursor: pointer;
            user-select: none;
        }
    }

    .el-button--primary {
        color: #fff;
        background-color: #FF004B;
        border-color: #FF004B;
    }
    .el-button:focus, .el-button:hover {
        color: #409EFF;
        border-color: #FF004B;
        background-color: #FF004B;
    }

    .el-button--primary:focus, .el-button--primary:hover {
        background: #FF4663;
        border-color: #FF4663;
        color: #fff;
    }
    .el-button--primary.is-active, .el-button--primary:active {
        background: #CD1B37;
        border-color: #CD1B37;
        color: #fff;
    }
    .el-button:active {
        // color: #FF4663;
        border-color: #CD1B37;
        outline: 0;
    }
</style>
