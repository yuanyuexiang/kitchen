<template>
    <div class="app-container">
        <div class="Grid-Title">
            <span style="font-weight: bold;">My Account</span>
        </div>
        <div class="Grid-Row" style="margin-top: 50px;">
            <div class="Grid-Column" style="width: 800px;margin-right: 20px;">
                <div class="title" style="display:flex; justify-content: flex-start">
                    <span style="line-height: 30px;font-weight: bold;">My Account： </span>
                    <span style="line-height: 30px;">{{user.email}}</span>
                </div>
                <div class="title" style="display:flex; justify-content: space-between">
                    <span style="line-height: 30px;font-weight: bold;">Contact Information</span>
                    <el-button type="primary" @click="updateUser">Save</el-button>
                </div>
                <el-form ref="formData" :model="formData" class="form-container">
                    <div style="display:flex;flex-wrap:wrap;justify-content:space-between;">
                        <el-form-item style="margin-bottom: 10px;" label-width="60px" label="Title:">
                            <el-select v-model="formData.title" style="width: 150px;" placeholder="Select">
                                <el-option
                                v-for="item in titleList"
                                :key="item"
                                :label="item"
                                :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 10px;" label-width="100px" label="First Name:">
                            <el-input type="textarea" v-model="formData.first_name" class="article-textarea" autosize placeholder=""/>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 10px;" label-width="100px" label="Last Name:">
                            <el-input type="textarea" v-model="formData.last_name" class="article-textarea" autosize placeholder=""/>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 10px;" label-width="140px" label="Phone Number:">
                            <el-input type="textarea" v-model="formData.phone_number" class="article-textarea" autosize placeholder=""/>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </div>
        <div class="Grid-Row" style="margin-top: 20px;">
            <div class="Grid-Column" style="width: 800px;margin-right: 20px;">
                <div class="title" style="display:flex; justify-content: space-between">
                    <span style="line-height: 30px;font-weight: bold;">Reset Password</span>
                    <el-button type="primary" @click="updateUserPassword">Save</el-button>
                </div>
                <el-form ref="formData" :model="formData" :rules="rules2" label-width="150px" class="form-container">
                    <el-form-item style="margin-bottom: 15px; text-align: left;" label="Old Password" prop="old_password">
                        <el-input :rows="1" type="password" v-model="formData.old_password" class="article-textarea" autosize placeholder=""/>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 15px;" label="New Password" prop="password">
                        <el-input :rows="1" type="password" v-model="formData.password" class="article-textarea" autosize placeholder=""/>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 10px;" label="Confirm Password" prop="confirm_password">
                        <el-input :rows="1" type="password" v-model="formData.confirm_password" class="article-textarea" autosize placeholder=""/>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="Grid-Row" style="margin-top: 20px;">
            <div class="Grid-Column" style="width: 800px;margin-right: 20px;">
                <div class="title" style="display:flex; justify-content: space-between">
                    <span style="line-height: 30px;font-weight: bold;">Marketing and Communications</span>
                    <el-button type="primary" @click="updateUserAcceptEmail">Save</el-button>
                </div>
                <span style="margin-top: 20px;">
                    We process your personal information for the purposes of marketing activities to offer you products or services that may be of interest based on your preferences. 
                </span>
                <el-checkbox style="margin-top: 20px;margin-left: 20px;" v-model="formData.accept_email">I would like to receive relevant marketing communications</el-checkbox>
            </div>
        </div>
        <div class="Grid-Row" style="margin-top: 20px;">
            <div class="Grid-Column" style="width: 800px;margin-right: 20px;">
                <div class="title" style="display:flex; justify-content: space-between">
                    <span style="line-height: 30px;font-weight: bold;">Terms of Service and Privacy Policy</span>
                    <!-- <el-button type="primary">View</el-button> -->
                </div>
                <span style="margin-top: 20px;margin-bottom: 20px;">
                Linglink <a style="color:#1890FF;" target="_blank" href="http://www.linglink.us/llktermsofservice">Terms of Service</a> and <a target="_blank" style="color:#1890FF;" href="http://www.linglink.us/llkprivacypolicy">Privacy Policy</a> explains how we use, store, and process information about you to provide, understand, improve, and develop the Instapage Platform, create and maintain a trusted and safer environment and comply with our legal obligations.
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getList
    } from "@/api/table"
    import {
        mapGetters
    } from 'vuex'
    import {
        updateUser,
        updateUserPassword,
        updateUserAcceptEmail,
    } from '@/api/foodie'
    import md5 from 'js-md5';
    export default {
        filters: {
            statusFilter(status) {
                const statusMap = {
                    published: "success",
                    draft: "gray",
                    deleted: "danger"
                };
                return statusMap[status];
            }
        },
        computed: {
            ...mapGetters([
                'user',
                'restaurant'
            ])
        },
        data() {
            var validatePass = (rule, value, callback) => {
                console.log("-----validatePass-----|"+value)
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.confirm_password !== '') {
                        this.$refs.formData.validateField('confirm_password');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                console.log("-----validatePass2-----|"+value)
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formData.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };

            return {
                list: null,
                listLoading: true,
                radio:1,
                formData: {
                    name_en: '',
                    contact_email: '',
                    contact_person: '',
                    pic_url: '',
                    payment:[],
                },
                old_password:'',
                confirm_password:'',
                titleList:["Mr","Mrs","Miss"],

                rules2: {
                    old_password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    confirm_password: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                }

            };
        },
        created() {
            //this.fetchData();
            console.log(this.user)
            this.formData = JSON.parse(JSON.stringify(this.user))
        },
        methods: {
            fetchData() {
                this.listLoading = true;
                getList(this.listQuery).then(response => {
                    this.list = response.data.items;
                    this.listLoading = false;
                });
            },
            updateUser(){
                updateUser(this.formData).then(response => {
                    const data = response.data
                    if(response.status == 1){
                        this.$message({
                            message: 'update user success',
                            type: 'success'
                        });
                    }else{
                        this.$message.error('update user fail')
                    }
                }).catch(error => {
                    this.$message.error(error);
                })
            },
            updateUserAcceptEmail(){
                updateUserAcceptEmail(this.formData).then(response => {
                    const data = response.data
                    if(response.status == 1){
                        this.$message({
                            message: 'update accept email success',
                            type: 'success'
                        });
                    }else{
                        this.$message.error('update accept email fail')
                    }
                }).catch(error => {
                    this.$message.error(error);
                })
            },
            updateUserPassword(){
                if(this.formData.password !== this.formData.confirm_password){
                    this.$message.error('confirm password error')
                    return
                }
                this.formData.password=md5(this.formData.password)
                this.formData.old_password=md5(this.formData.old_password)
                updateUserPassword(this.formData,this.formData.old_password).then(response => {
                    const data = response.data
                    if(response.status == 1){
                        this.$message({
                            message: 'update user password success',
                            type: 'success'
                        });
                    }else{
                        this.$message.error('update user password fail')
                    }
                    this.formData.password=''
                    this.formData.confirm_password=''
                    this.formData.old_password=''
                }).catch(error => {
                    this.$message.error('update user password fail '+error)
                    this.formData.password=''
                    this.formData.confirm_password=''
                    this.formData.old_password=''
                })
            }
        }
    };

</script>
<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    background-color: #E5E5E5;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.Grid-Row {
    display: flex;
    flex-direction:row;
}
.Grid-Column {
    display: flex;
    flex-direction: column;
}
.Grid-cell {
    flex: 1;
}
.Grid-cell.u-full {
    flex: 0 0 100%;
}
.Grid-cell.u-1of2 {
    flex: 0 0 50%;
}
.Grid-cell.u-1of3 {
    flex: 0 0 33.3333%;
}
.Grid-cell.u-1of4 {
    flex: 0 0 25%;
}
.Grid-Title {
    width: 800px;
    display: flex;
    justify-content: center;
}
.el-radio {
    color:inherit;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    white-space: nowrap;
    outline: 0;
}
</style>
<style lang="less">
//文章页textarea修改样式
.form-container {
    .article-textarea {
        textarea {
            padding-right: 0px;
            resize: none;
            border: none;
            border-radius: 0px;
            border-bottom: 1px solid #bfcbd9;
            height: 36px !important;
        }
        input {
            padding-right: 0px;
            resize: none;
            border: none;
            border-radius: 0px;
            border-bottom: 1px solid #bfcbd9;
            height: 36px !important;
        }
    }
    .title {
        line-height: 0px;
    }
    .el-form-item__label {
        text-align: right;
        float: left;
        font-size:inherit;
        font-weight: inherit;
        color:inherit;
        line-height: 40px;
        padding: 0 12px 0 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
}
</style>