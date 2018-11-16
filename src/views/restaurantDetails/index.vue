<template>
    <div class="app-container">
        <div class="Grid-Title">
            <span style="font-weight: bold;">Restaurant Details</span>
        </div>
        <div class="Grid-Row" style="width: 800px;margin-top: 50px;">
            <div class="Grid-Column" style="width: 200px;">
                <span style="font-weight: bold;">Upload Logo:</span>
                <!-- <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="formData.pic_url" :src="formData.pic_url" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload> -->
                <el-upload
                    class="avatar-uploader"
                    :action="baseUrl + '/camaro/v1/file'"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="formData.pic_url" :src="formData.pic_url" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
            <div class="Grid-Column" style="width: 300px;padding-left: 20px;">
                <el-form ref="formData" class="form-container">
                    <span class="title" style="line-height: 10px;">Restaurant Name:</span>
                    <el-form-item>
                        <el-input :rows="1" v-model="formData.name_en" type="textarea" class="article-textarea" autosize placeholder=""/>
                    </el-form-item>
                    <span class="title" style="line-height: 10px;">Contact Person:</span>
                    <el-form-item>
                        <el-input :rows="1" v-model="formData.contact_person" type="textarea" class="article-textarea" autosize placeholder=""/>
                    </el-form-item>
                    <span class="title" style="line-height: 10px;">Restaurant Type:</span>
                    <el-form-item>
                        <el-select v-model="formData.restaurant_type" placeholder="Select">
                            <el-option
                            v-for="item in restaurantTypeList"
                            :key="item"
                            :label="item"
                            :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <div class="Grid-Column" style="width: 300px;padding-left: 20px;">
                <el-form ref="formData" class="form-container">
                    <span class="title" style="line-height: 10px;">Contact Email:</span>
                    <el-form-item>
                        <el-input :rows="1" v-model="formData.contact_email" type="textarea" class="article-textarea" autosize placeholder=""/>
                    </el-form-item>
                    <span class="title" style="line-height: 10px;">Contact Phone Number:</span>
                    <el-form-item>
                        <el-input :rows="1" v-model="formData.contact_phone_number" type="textarea" class="article-textarea" autosize placeholder=""/>
                    </el-form-item>
                    <span class="title" style="line-height: 10px;">Cuisine Type:</span>
                    <el-form-item>
                        <el-select v-model="formData.cuisine_type" placeholder="Select">
                            <el-option
                            v-for="item in cuisineTypeList"
                            :key="item"
                            :label="item"
                            :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="Grid-Row">
            <div class="Grid-Column" style="width: 800px;margin-top: 20px;">
                <span class="title" style="line-height: 10px;font-weight: bold;">Restaurant Address:</span>
                <el-form ref="formData" class="form-container">
                    <el-form-item style="margin-bottom: 10px;" label-width="70px" label="Street:">
                        <el-input type="textarea" v-model="formData.street" class="article-textarea" autosize placeholder=""/>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 10px;" label-width="70px" label="Unit:">
                        <el-input type="textarea" v-model="formData.unit" class="article-textarea" autosize placeholder=""/>
                    </el-form-item>
                    <div style="display:flex;">
                        <el-form-item style="margin-bottom: 10px;" label-width="70px" label="City:">
                            <el-input type="textarea" v-model="formData.city" class="article-textarea" autosize placeholder=""/>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 10px;" label-width="120px" label="State/Province:">
                            <el-input type="textarea" v-model="formData.state_or_province" class="article-textarea" autosize placeholder=""/>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 10px;" label-width="70px" label="Country:">
                            <el-select v-model="formData.country" placeholder="Select">
                                <el-option
                                v-for="item in countryList"
                                :key="item"
                                :label="item"
                                :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 10px;" label-width="85px" label="Zip Code:">
                            <el-input type="textarea" v-model="formData.zip_code" class="article-textarea" autosize placeholder=""/>
                        </el-form-item>
                    </div>
                    <el-form-item style="margin-bottom: 10px;" label-width="70px" label="Website:">
                        <el-input type="textarea" v-model="formData.website" class="article-textarea" autosize placeholder=""/>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="Grid-Row">
            <div class="Grid-Column" style="width: 800px;margin-top: 20px;">
                <span class="title" style="line-height: 20px;font-weight: bold;">Features:</span>
                <el-form ref="formData" class="form-container" label-width="150px">
                    <el-form-item style="margin-bottom: 10px;" label="Take Reservations:">
                        <el-select v-model="formData.reservations" placeholder="Select">
                            <el-option value="Yes">Yes</el-option>
                            <el-option value="No">No</el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 10px;" label="Delivery:">
                        <el-select v-model="formData.delivery" placeholder="Select">
                            <el-option value="Yes">Yes</el-option>
                            <el-option value="No">No</el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 10px;" label="Wifi:">
                        <el-select v-model="formData.wifi" placeholder="Select">
                            <el-option value="Yes">Yes</el-option>
                            <el-option value="No">No</el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 10px;" label="Payment:">
                        <el-checkbox-group v-model="formData.payment">
                            <el-checkbox v-for="item in paymentList" :label="item" :key="item"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item> 
                </el-form>
            </div>
        </div>
        <div class="Grid-Row">
            <div class="Grid-Column" style="width: 800px;margin-top: 20px;">
                <span class="title" style="line-height: 10px;font-weight: bold;">About Us:</span>
                <el-form ref="formData" class="form-container" style="margin-top: 20px;">
                    <el-input
                        type="textarea"
                        rows="5"
                        placeholder="A brief introduction about your restaurant. Also include fun facts or stories about your dishes, staff, history, restaurant culture, etc. to make your restaurant special and memorable among customers."
                        v-model="formData.about_us">
                    </el-input>
                </el-form>
            </div>
        </div>
        <div class="Grid-Row" style="margin-top: 20px;">
            <el-button type="primary" @click="submitForm('formData')">Save</el-button>
            <el-button type="primary" @click="submitForm('formData')">Cancel</el-button>
        </div>
    </div>
</template>

<script>
    import {
        updateRestaurant,
        addRestaurant,
    } from '@/api/foodie'
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    import {
        getToken,
        setToken,
        removeToken,
        getUserID,
        setUserID,
        removeUserID,
    } from '@/utils/auth'
    export default {    
        components:{
        },
        data() {
            return {
				baseUrl:process.env.BASE_API,
                list: null,
                listLoading: true,
                imageUrl: '',
                cuisineTypeList:[
                    "American",
                    "British",
                    "Caribbean",
                    "Chinese",
                    "French",
                    "Greek",
                    "Indian",
                    "Italian",
                    "Japanese",
                    "Mediterranean",
                    "Mexican",
                    "Moroccan",
                    "Spanish",
                    "Thai",
                    "Turkish",
                    "Vietnamese",
                ],
                restaurantTypeList: ["Dine-in","Quick Type"],
                
                countryList:["USA","Canada"],
                paymentList: [
                    "Cash",
                    "Credit Card (Visa)",
                    "Credit Card (Mastercard)",
                    "Credit Card (Discover)",
                    "Credit Card (American Express)",
                    "Debit Card",
                    "WeChat Pay",
                    "Apple Pay"],
                formData: {
                    name_en: '',
                    contact_email: '',
                    contact_person: '',
                    pic_url: '',
                    payment:[],
                },
            }
        },
        computed: {
            ...mapGetters(['restaurant'])
        },
        mounted(){
            let myRestaurant = JSON.parse(JSON.stringify(this.restaurant))
            if(myRestaurant && myRestaurant.id){
                this.formData = myRestaurant
                if (myRestaurant.payment){
                    this.formData.payment = myRestaurant.payment.split(",")
                }else {
                    this.formData.payment = []
                }
            }
        },
        watch:{
            restaurant(newRestaurant, oldRestaurant){
                let myRestaurant = JSON.parse(JSON.stringify(newRestaurant))
                if(myRestaurant && myRestaurant.id){
                    this.formData = myRestaurant
                    if (myRestaurant.payment){
                        this.formData.payment = myRestaurant.payment.split(",")
                    }else {
                        this.formData.payment = []
                    }
                }else{
                    this.formData = {
                        name_en: '',
                        contact_email: '',
                        contact_person: '',
                        pic_url: '',
                        payment:[],
                    }
                }
            }
        },
        created() {
            //this.fetchData();
        },
        methods: {
            ...mapActions(['getRestaurants','setRestaurant']),
            submitForm(formName){
                console.log(this.formData)
                let myRestaurant = JSON.parse(JSON.stringify(this.formData))
                if(myRestaurant.id){
                    myRestaurant.payment = myRestaurant.payment.join(',')
                    updateRestaurant(myRestaurant).then(response => {
                        const data = response.data
                        if(response.status == 1){
                            //this.$message('success2')
                            this.getRestaurants()
                            this.setRestaurant(myRestaurant)
                            this.$notify({
                                title: 'update success',
                                message: "It's great that Linglink helps to boost your business! We will get back to you shortly to add your new restaurant for you.",
                                type: 'success'
                            });
                        }else{
                            this.$message('fail')
                        }
                    }).catch(error => {
                        this.$message(error);
                    })
                }else{
                    myRestaurant.payment = myRestaurant.payment.join(',')
                    myRestaurant.administrator_id = parseInt(getUserID())
                    myRestaurant.code = myRestaurant.name_en+'-'+myRestaurant.country+'-'+myRestaurant.zip_code
                    addRestaurant(myRestaurant).then(response => {
                        const data = response.data
                        if(response.status == 1){
                            //this.$message('success1')
                            this.getRestaurants()
                            myRestaurant.id=data
                            this.setRestaurant(myRestaurant)
                            this.$notify({
                                title: 'Get ready for more',
                                message: "It's great that Linglink helps to boost your business! We will get back to you shortly to add your new restaurant for you.",
                                type: 'success'
                            });
                        }else{
                            this.$message('fail')
                        }
                    }).catch(error => {
                        this.$message(error);
                    })
                }
            },
            handleAvatarSuccess(res, file) {
                //this.imageUrl = URL.createObjectURL(file.raw);
                console.log(res)
                if (res.status == 1) {
                    this.formData.pic_url = res.data.aws_url;
                    console.log("=================")
                    console.log(this.formData.pic_url)
				}else{
					this.$message.error('上传图片失败！');
				}
            },
            beforeAvatarUpload(file) {
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isLt2M;
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
    margin-top: 10px;
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
    }
    .title {
        line-height: 0px;
    }
}
</style>
