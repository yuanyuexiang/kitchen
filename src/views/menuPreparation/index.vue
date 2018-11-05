<template>
    <div class="app-container" style="width:800px">
        <el-steps :space="200" :active="active" simple >
            <el-step title="Review Content" class="el-step-width" icon="x">
            </el-step>
            <el-step title="Review Content" class="el-step-width" icon="x">
            </el-step>
            <el-step title="Translate Dishes" class="el-step-width" icon="x">
            </el-step>
        </el-steps>

        <div class="Grid-Raw" v-show="active==1" style="margin-top: 20px;margin-left: 20px;">
            <el-upload
                class="upload-demo"
                :action="baseUrl + '/camaro/v1/file'"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="10"
                :on-exceed="handleExceed"
                :on-success="handleSuccess"
                :before-upload="beforeUpload"
                :file-list="fileList">
                <el-button size="small" type="primary">Choose File</el-button>
                <div slot="tip" class="el-upload__tip">SIze: less than 2 MB</div>
                <div slot="tip" class="el-upload__tip">Format: PDF, Word, Excel, Jpeg/Png</div>
            </el-upload>
        </div>



        <el-tabs v-model="activeName" v-show="active==2"  style="width: 800px;">
            <el-tab-pane label="Dish List" name="first">
                <div class="Grid-Row" style="margin-bottom: 20px;" v-for="item in dishList" :key="item.id" >
                    <div class="Grid-Column" style="width: 200px;margin-right: 20px;">
                        <img style="width: 200px;" :src="item.pic_url" class="pan-thumb">
                    </div>
                    <div class="Grid-Column" style="width: 400px;margin-right: 20px;">
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Dish Name:</span>
                            <span style="margin-top: 20px;">{{item.name_en}}</span>
                        </div>
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Category:</span>
                            <span style="margin-top: 20px;">{{item.category_en}}</span>
                        </div>
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Price:</span>
                            <span>{{item.price}}</span>
                        </div>
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Description:</span>
                            <span>{{item.discription_en}}</span>
                        </div>
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Ingredients:</span>
                            <span>{{item.ingredientList}}</span>
                        </div>
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Options:</span>
                            <span>{{item.stepList}}</span>
                        </div>
                    </div>
                    <div class="Grid-Column" style="width: 150px;margin-right: 20px;">
                        <router-link :to="{path:'/menuManagement/reviewContent',query: {restaurant_id: item.id}}">
                            <el-button type="primary">Make Changes</el-button>
                        </router-link>
                    </div>
                </div>
                <div class="Pagination" style="text-align: left;margin-top: 10px;">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="10"
                        layout="total, prev, pager, next"
                        :total="count">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="Wait for Update" name="second">
                <div class="Grid-Row" style="margin-bottom: 20px;" v-for="item in dishList" :key="item.id" >
                    <div class="Grid-Column" style="width: 200px;margin-right: 20px;">
                        <img style="width: 200px;" :src="item.pic_url" class="pan-thumb">
                    </div>
                    <div class="Grid-Column" style="width: 400px;margin-right: 20px;">
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Dish Name:</span>
                            <span style="margin-top: 20px;">{{item.name_en}}</span>
                        </div>
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Category:</span>
                            <span style="margin-top: 20px;">{{item.category_en}}</span>
                        </div>
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Price:</span>
                            <span>{{item.price}}</span>
                        </div>
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Description:</span>
                            <span>{{item.discription_en}}</span>
                        </div>
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Ingredients:</span>
                            <span>{{item.ingredientList}}</span>
                        </div>
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Options:</span>
                            <span>{{item.stepList}}</span>
                        </div>
                    </div>
                    <div class="Grid-Column" style="width: 150px;margin-right: 20px;">
                        <el-button type="primary" disabled="">Wait for Update</el-button>
                    </div>
                </div>
                <div class="Pagination" style="text-align: left;margin-top: 10px;">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="10"
                        layout="total, prev, pager, next"
                        :total="count">
                    </el-pagination>
                </div>
            </el-tab-pane>
        </el-tabs>


        <div class="Grid-Column" v-show="active==3" style="margin-top: 20px;">
            <div class="Grid-Column" style="width: 800px;margin-right: 20px;">
                <div class="title" style="display:flex; justify-content: space-between">
                    <span style="line-height: 30px;font-weight: bold;">Translator Info</span>
                    <!-- <el-button type="primary">View</el-button> -->
                </div>
                <div class="title" style="display:flex; flex-direction:Column;align-items: center;margin-top: 20px;">
                    <img src="/static/review.jpeg" style="height:100px">
                    <span style="line-height: 30px;">Your Translator: Grace</span>
                    <!-- <router-link to="/menuPreparation/reviewContent">dasdasdasdsad</router-link> -->
                </div>
            </div>
            <div class="Grid-Column" style="width: 800px;margin-right: 20px;">
                <div class="title" style="display:flex; justify-content: space-between">
                    <span style="line-height: 30px;font-weight: bold;">Working Progress</span>
                    <!-- <el-button type="primary">View</el-button> -->
                </div>
                <el-steps :active="1">
                    <el-step title="Content Under Review" description="As soon as you finish finalizing content in the previous step, your translator will roll up sleeves and get to work! "></el-step>
                    <el-step title="Translation In Progress" description="Your translator is working hard on the menu! We will send you an email with an estimated time of completion."></el-step>
                    <el-step title="You're All Set!" description='Great! Your Chinese menu is ready to go! Check the "Menu Management" Page to view a demo.'></el-step>
                </el-steps>
            </div>
        </div>

        
    </div>
</template>

<script>
    import {
        getList
    } from "@/api/table";
    //import QRCode from 'qrcodejs2'
    import vueLogoQrcode from '@njshaoshao/vue-logo-qrcode';
    export default {
        components: {
            //QRCode
            vueLogoQrcode 
        },
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
				baseUrl:process.env.BASE_API,
                list: null,
                listLoading: true,
                config: {
                    value: 'https://www.baidu.com',
                    imagePath: '/static/logo.png',
                    filter: 'color',
                },
                content: "http://gastronome.linglinkmenu.cn/?restaurantCode=KraziKebob-USA-MD-20740&isAuthorization=no",
                width: 200,
                fileList:[],
                active:3
            };
        },
        created() {
            //this.fetchData();
            //this.qrcode();
        },
        mounted(){
        },
        methods: {
            fetchData() {
                this.listLoading = true;
                getList(this.listQuery).then(response => {
                    this.list = response.data.items;
                    this.listLoading = false;
                });
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return //this.$confirm(`确定移除 ${ file.name }？`);
            },
            handleSuccess(res, file) {
                //this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeUpload(file) {
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
.el-steps--simple {
    padding: 13px 1%;
    border-radius: 0px;
    background: white;
    border-bottom: 1px solid #bfcbd9;
    width: 800px;
}
/* .el-step-width >>> .el-step__title {
    max-width: 50% !important;
    word-break: break-all;
} */
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
        }
    }
    .title {
        line-height: 0px;
    }
}
</style>