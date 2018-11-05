<template>
    <div class="app-container" style="width:800px">
        <el-steps :space="200" :active="0" simple >
            <el-step title="Review Content" class="el-step-width" icon="x">
            </el-step>
            <el-step title="Review Content" class="el-step-width" icon="x">
            </el-step>
            <el-step title="Translate Dishes" class="el-step-width" icon="x">
            </el-step>
        </el-steps>
        <div class="Grid-Raw" style="margin-top: 20px;margin-left: 20px;">
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