<template>
    <div class="app-container">
        <div class="Grid-Title">
            <span style="font-weight: bold;">Upload Menu</span>
        </div>
        <div class="Grid-Row" style="margin-top: 50px;">
            <div class="Grid-Column" style="width: 800px;margin-right: 20px;">
                <div class="title" style="display:flex; justify-content: space-between">
                    <span style="line-height: 30px;font-weight: bold;">Tips</span>
                    <!-- <el-button type="primary">View</el-button> -->
                </div>
                <span style="margin-top: 20px;margin-bottom: 20px;">
                Use button below to upload your full menu. It can be in the format of PDF, Word document, Excel sheet, or an image file. 
                </span>
                <span style="margin-bottom: 20px;">
                Subscribed customers enjoy more options to upload additional dishes every month!
                </span>
            </div>
        </div>
        <div class="Grid-Row">
            <div class="Grid-Raw" style="margin-top: 20px;width: 800px;">
                <!-- <el-upload
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
                </el-upload> -->
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    :action="baseUrl + '/camaro/v1/file'"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :on-success="handleSuccess"
                    :file-list="fileList"
                    :multiple="true"
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">Choose File</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">Upload To Server</el-button>
                    <div slot="tip" class="el-upload__tip">Size: less than 2 MB</div>
                    <div slot="tip" class="el-upload__tip">Format: PDF, Word, Excel, Jpeg/Png</div>
                </el-upload>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getList
    } from "@/api/table";
    import {
        addMaterial
    } from "@/api/foodie"
    import {
        mapGetters
    } from 'vuex'
    //import {baseUrl, baseImgPath} from '@/config/env'

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
            ...mapGetters(['restaurant','user'])
        },
        data() {
            return {
                list: null,
                listLoading: true,
				baseUrl:"",
    			city: {},
    			formData: {
					pic_url:'',
					//restaurant_id:0,
				},
				baseUrl:process.env.BASE_API,
                fileList:[],
            };
        },
        created() {
            //this.fetchData();
        },
        methods: {
            fetchData() {
                this.listLoading = true;
                getList(this.listQuery).then(response => {
                    this.list = response.data.items;
                    this.listLoading = false;
                });
            },
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            beforeUpload(file) {
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isLt2M;
            },
            handleSuccess(response, file, fileList){
                let theFileList = JSON.parse(JSON.stringify(fileList))
                let result = theFileList.every(function(item){
                    return item.status === "success" 
                })
                console.log(result)
                if(result){
                    let theFileInfoList=[]
                    theFileList.forEach(item=>{
                        theFileInfoList.push({file_name:item.name,file_url:item.response.data.aws_url})
                    })
                    let formData={
                        name:this.restaurant.name_en+" "+this.user.first_name+" commit",
                        status:-1,
                        restaurant_id:this.restaurant.id,
                        submitter_id:this.user.id,
                        file_info_list:theFileInfoList,
                    }

                    console.log("-------------------------")
                    console.log(formData)
                    addMaterial(formData).then(response=>{
                        const responseData = response.data;
                        const status = response.status;
                        console.log(responseData);
                        if (status != 1) {
                            const message = responseData.message;
                            console.log(message);
                            this.$message.error(message)
                        }else{
                            const data = responseData;
                            this.$notify({
                                title: 'Upload Success',
                                message: "Upload Success",
                                type: 'success'
                            });
                        }
                    }).catch(err=>{

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