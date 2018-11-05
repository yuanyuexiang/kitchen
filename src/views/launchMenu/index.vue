<template>
    <div class="app-container">
        <div class="Grid-Title">
            <span style="font-weight: bold;">Launch Menu</span>
        </div>
        <div class="Grid-Row" style="margin-top: 50px;">
            <div class="Grid-Row">
                <span style="font-weight: bold;">Menu Status</span>
            </div>
            <div class="Grid-Row" style="margin-left: 20px;">
                <span style="margin-right: 10px;">Closed</span>
                <el-switch
                    v-model="value2"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch>
                <span style="margin-left: 10px;">Launched</span>
            </div>
        </div>
        <div class="Grid-Column">
            <div class="Grid-Row">
                <span style="font-weight: bold;margin-top: 20px;">Menu QR Code</span>
            </div>
            <div class="Grid-Row">
                <div class="Grid-Column" style="width: 200px;margin-right: 20px;">
                    <span>(View on Wechat Only)</span>
                </div>
                <div class="Grid-Column" style="align-items: center;">
                    <!-- <span>Scan the code</span> -->
                    <!-- <img style="width: 200px;" src="static/qrcode.jpeg" class="pan-thumb"> -->
                    <!-- <vue-q-art :config="config"></vue-q-art> -->
                    <!-- <div id="qrcode" ref="qrcode"></div> -->
                    <vueLogoQrcode
                        style="align-items: center"
                        ref="qrcode"
                        :content="content"
                        :width="width"
                        logoSrc="/static/logo.png"
                        :autoGen="true"
                        logoRadius="20"
                        @click.native="downloadImage">
                    </vueLogoQrcode>
                    
                    <div class="Grid-Column" style="align-items: center">
                        <span style="align-items: center">Download the QR Code for printing</span>
                        <el-form ref="postForm" :model="postForm" class="form-container">
                            <el-button type="primary" @click.native="downloadImage">Download</el-button>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="Grid-Column">
            <div class="title" style="width: 800px; margin-right: 20px;margin-top: 20px;display:flex; justify-content: space-between">
                <span style="font-weight: bold;">DIY QR Code Generator</span>
            </div>
        </div> -->
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
                list: null,
                listLoading: true,
                config: {
                    value: 'https://www.baidu.com',
                    imagePath: '/static/logo.png',
                    filter: 'color',
                },
                content: "http://gastronome.linglinkmenu.cn/?restaurantCode=KraziKebob-USA-MD-20740&isAuthorization=no",
                width: 200,
            };
        },
        created() {
            //this.fetchData();
            //this.qrcode();
        },
        mounted(){
            this.qrcode();
        },
        methods: {
            fetchData() {
                this.listLoading = true;
                getList(this.listQuery).then(response => {
                    this.list = response.data.items;
                    this.listLoading = false;
                });
            },
            qrcode () {
                let qrcode = new QRCode('qrcode', {  
                    width: 180,  // 设置宽度 
                    height: 180, // 设置高度
                    text: 'http://gastronome.linglinkmenu.cn/?restaurantCode=KraziKebob-USA-MD-20740&isAuthorization=no'
                })
            },
            downloadImage() {
                this.$refs.qrcode.genQrCodeImageDownload();
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