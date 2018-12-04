<template>
    <div class="app-container">
        <div class="Grid-Title">
            <span style="font-weight: bold;color: #FB001F;font-size: 1.5em;">Subscription</span>
        </div>
        <div class="Grid-Column" style="margin-top: 50px;">
            <div class="title" style="width: 800px; display:flex; justify-content: space-between;align-items: center;padding: 5px 5px 5px 5px; background-color:#898989">
                <span style="line-height: 30px;font-weight: bold;color:white">Subscription Summary</span>
                <el-button type="primary" @click="upgrade">Upgrade</el-button>
            </div>
            <el-form ref="formData" :model="formData" class="form-container">
                <el-form-item class="form-item-label" style="margin-bottom: 10px; " label="My Plan:">
                    <div style="margin-right: 30px; margin-top: 15px; display:flex; flex-direction: column;">
                        <el-radio-group v-model="formData.my_plan" disabled style="display:flex;flex-direction: column">
                            <el-radio style="margin-left: 30px; color:inherit;" label="Appetizer">Appetizer</el-radio>
                            <el-radio style="margin-top: 10px;color:inherit;" label="Entree">Entree</el-radio>
                            <el-radio style="margin-top: 10px;color:inherit;" label="Combo">Combo</el-radio>
                        </el-radio-group>
                    </div>
                </el-form-item>
            </el-form>
        </div>
        <div class="Grid-Column" style="margin-top: 20px;">
            <div class="title" style="width: 800px; margin-right: 20px;display:flex; justify-content: space-between;align-items: center;padding: 5px 5px 5px 5px; background-color:#898989">
                <span style="line-height: 30px;font-weight: bold;color:white">Invoice Information (optional)</span>
                <el-button type="primary" @click="save">Save</el-button>
            </div>
            <div class="Grid-Row" style="margin-top: 20px;">
                <div class="Grid-Column" style="width: 400px;margin-right: 20px;">
                    <el-form ref="formData" :model="formData" class="form-container">
                        <span class="title" style="line-height: 10px;">First Name</span>
                        <el-form-item>
                            <el-input :rows="1" type="textarea" v-model="formData.first_name" class="article-textarea" autosize placeholder=""/>
                        </el-form-item>
                        <span class="title" style="line-height: 10px;">Company Name</span>
                        <el-form-item>
                            <el-input :rows="1" type="textarea" v-model="formData.company_name" class="article-textarea" autosize placeholder=""/>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="Grid-Column" style="width: 400px;padding-right: 20px;">
                    <el-form ref="formData" class="form-container">
                        <span class="title" style="line-height: 10px;">Last Name</span>
                        <el-form-item>
                            <el-input :rows="1" type="textarea" v-model="formData.last_name" class="article-textarea" autosize placeholder=""/>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="Grid-Column">
                <div class="Grid-Column" style="width: 800px;margin-right: 20px;">
                    <el-form ref="formData" class="form-container">
                        <span class="title" style="line-height: 10px;">Street:</span>
                        <el-form-item>
                            <el-input type="textarea" v-model="formData.street" class="article-textarea" autosize placeholder=""/>
                        </el-form-item>
                        <div style="display:flex;">
                            <el-form-item class="form-item-label" style="margin-bottom: 10px;" label-width="40px" label="City:">
                                <el-input type="textarea" v-model="formData.city" class="article-textarea" autosize placeholder=""/>
                            </el-form-item>
                            <el-form-item class="form-item-label" style="margin-bottom: 10px;" label-width="120px" label="State/Province:">
                                <el-input type="textarea" v-model="formData.state_or_province" class="article-textarea" autosize placeholder=""/>
                            </el-form-item>
                            <el-form-item class="form-item-label" style="margin-bottom: 10px;" label-width="70px" label="Country:">
                                <el-select v-model="formData.country" placeholder="Select">
                                    <el-option
                                    v-for="item in countryList"
                                    :key="item"
                                    :label="item"
                                    :value="item">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item class="form-item-label" style="margin-bottom: 10px;" label-width="85px" label="Zip Code:">
                                <el-input type="textarea" v-model="formData.zip_code" class="article-textarea" autosize placeholder=""/>
                            </el-form-item>
                        </div>
                    </el-form>
                </div>
            </div>
        </div>
        <div class="Grid-Column" style="margin-top: 20px;margin-bottom: 20px;">
            <div class="title" style="width: 800px; margin-right: 20px;display:flex; justify-content: space-between;align-items: center;padding: 12px 5px 12px 5px; background-color:#898989">
                <span style="line-height: 30px;font-weight: bold;;color:white">Statement</span>
            </div>
            <div class="Grid-Row" style="margin-top: 20px;">
                <div class="Grid-Column" style="width: 400px;margin-right: 20px;">
                    <el-form ref="formData" :model="formData" class="form-container">
                        <span class="title" style="line-height: 10px;">Date</span>
                    </el-form>
                </div>
                <div class="Grid-Column" style="width: 400px;margin-right: 20px;">
                    <el-form ref="formData" :model="formData" class="form-container">
                        <span class="title" style="line-height: 10px;">PDF</span>
                    </el-form>
                </div>
            </div>
            <div class="hr2" style="width: 800px; margin-right: 20px;margin-bottom: 20px;"/> 
            <div class="Grid-Row">
                <div class="Grid-Column" style="width: 400px;margin-right: 20px;">
                    <el-form ref="formData" :model="formData" class="form-container">
                        <span class="title" style="line-height: 10px;">November 01, 2018</span>
                    </el-form>
                </div>
                <div class="Grid-Column" style="width: 400px;margin-right: 20px;">
                    <el-form ref="formData" :model="formData" class="form-container">
                        <a :href="pdfURL" target="_blank" download="PaymentStatementSample.pdf"><i class="el-icon-document" style="cursor:pointer"></i></a>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getList
    } from "@/api/table"
    import {
        getInvoice,
        addInvoice,
        updateInvoice,
    } from '@/api/foodie'
    import {
        mapGetters,
        mapActions
    } from 'vuex'

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
        data() {
            return {
                list: null,
                listLoading: true,
                formData:{
                    my_plan:'Appetizer',
                },
                countryList:["USA","Canada"],
                theDate:{},
                pdfURL:'https://s3.us-east-2.amazonaws.com/linglink/public/PaymentStatementSample.pdf',
                subscription:null,
            };
        },
        computed: {
            ...mapGetters(['restaurant'])
        },
        created() {
            //this.fetchData();
        },
        mounted(){
            this.theDate = new Date()
            this.init()
        },
        watch:{
            restaurant(newRestaurant, oldRestaurant){
                this.init()
                this.formData={
                    my_plan:'Entree',
                }
            },
        },
        methods: {
            init(){
                this.subscription = null
                this.getInvoice()
            },
            fetchData() {
                this.listLoading = true;
                getList(this.listQuery).then(response => {
                    this.list = response.data.items;
                    this.listLoading = false;
                });
            },
            upgrade(){
                this.$notify({
                    title: 'Get ready for more',
                    message: "It's great that Linglink helps to boost your business! We will get back to you shortly with more info on our advanced plan options.",
                    type: 'success'
                });
            },
            getInvoice(formName){
                if(this.restaurant){
                    getInvoice(this.restaurant.id).then(response => {
                        const data = response.data
                        if(response.status == 1){
                           this.subscription = data
                           this.formData = data
                        }else{
                            //this.$message('fail')
                        }
                    }).catch(error => {
                        //this.$message(error);
                    })
                }
            },
            save(){
                if(this.subscription){
                    updateInvoice(this.subscription).then(response => {
                        const data = response.data
                        if(response.status == 1){
                            this.$message({
                                message: 'update subscription success',
                                type: 'success'
                            });
                        }else{
                            this.$message.error('update subscription fail')
                        }
                    }).catch(error => {
                        console.log(error)
                    })
                }else{
                    this.formData.restaurant_id = this.restaurant.id
                    addInvoice(this.formData).then(response => {
                        const data = response.data
                        if(response.status == 1){
                            this.$message({
                                message: 'create subscription success',
                                type: 'success'
                            });
                            this.subscription = this.formData
                        }else{
                            this.$message.error('create subscription fail')
                        }
                    }).catch(error => {
                        //console.log(error)
                    })
                }
            },
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
.form-item-label >>> .el-form-item__label {
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
.hr2{ 
    height:3px;
    border:none;
    border-top:1px solid #bfcbd9;
    margin-top: 10px;
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
    background: #FF008B;
    border-color: #FF008B;
    color: #fff;
}
.el-button--primary.is-active, .el-button--primary:active {
    background: #FF004B;
    /* border-color: #3a8ee6; */
    color: #fff;
}
.el-button:active {
    /* color: #3a8ee6; */
    border-color: #FF004B;
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
    }
    .title {
        line-height: 0px;
    }
}
</style>