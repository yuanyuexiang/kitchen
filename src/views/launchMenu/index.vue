<template>
    <div class="app-container">
        <div class="Grid-Title">
            <span style="font-weight: bold; color: #FB001F;">Launch Menu</span>
        </div>
        <div class="Grid-Row" style="margin-top: 50px;">
            <div class="Grid-Row">
                <span style="font-weight: bold;">Menu Status</span>
            </div>
            <div class="Grid-Row" style="margin-left: 20px;">
                <span style="margin-right: 10px;">Closed</span>
                <el-switch
                    v-model.number="formData.status"
                    @change="updateRestaurantStatus"
                    :active-value="1"
                    :inactive-value="0"
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
                    <!-- <vueLogoQrcode
                        style="align-items: center"
                        ref="qrcode"
                        :content="content"
                        :width="width"
                        logoSrc="/static/logo.png"
                        :autoGen="true"
                        logoRadius="20"
                        @click.native="downloadImage">
                    </vueLogoQrcode> -->
                    <div class="imageWrapper" ref="imageWrapper">
                        <img src="/static/up.png" style="width:525px;margin-top: 30px;margin-bottom: 15px;">
                        <!-- 
                        <vueLogoQrcode
                            style="align-items: center"
                            ref="qrcode"
                            :content="content"
                            :width="width"
                            logoSrc="/static/logo.png"
                            :autoGen="true"
                            :logoRadius="20"
                            @click.native="downloadImage">
                        </vueLogoQrcode>
                        -->
                        <div style="padding:15px; background-color: white;">
                            <vue-qr :text="content" :size="300" :margin="0" :logoScale=".23" logoSrc="/static/logo.png" :logoMargin="5"></vue-qr>
                        </div>
                        <span style="color: white; margin-top: 10px;margin-bottom: 20px;font-size:1.5em">Menu in Chinese Available on Wechat!</span>
                        
                    </div>
                    <div class="Grid-Column" style="align-items: center;margin-top: 20px;">
                        <span style="align-items: center">Download the QR Code for printing</span>
                        <el-button type="primary" @click.native="createImage">Download</el-button>
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
        updateRestaurantStatus,
    } from "@/api/foodie";
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    import vueLogoQrcode from '@njshaoshao/vue-logo-qrcode';
    import html2canvas from 'html2canvas'
    import downloadjs from "downloadjs";
    import VueQr from 'vue-qr'
    export default {
        components: {
            //QRCode
            vueLogoQrcode ,
            VueQr
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
                baseURL:"http://gastronome.linglinkmenu.cn/?restaurantCode={0}",
                content: "",
                width: 200,
                dataURL:"",
                value2:"",
                formData:{status:1},
            };
        },
        computed: {
            ...mapGetters(['restaurant'])
        },
        created() {
            //this.fetchData();
            //this.qrcode();
            this.extendsString()
            this.content = this.baseURL.format(this.restaurant.code)
            this.formData = JSON.parse(JSON.stringify(this.restaurant))
        },
        mounted(){
            //this.qrcode();
        },
        watch:{
            restaurant(newRestaurant, oldRestaurant){
                this.content = this.baseURL.format(this.restaurant.code)
            },
        },
        methods: {
            // qrcode () {
            //     let qrcode = new QRCode('qrcode', {  
            //         width: 180,  // 设置宽度 
            //         height: 180, // 设置高度
            //         text: 'http://gastronome.linglinkmenu.cn/?restaurantCode=KraziKebob-USA-MD-20740&isAuthorization=no'
            //     })
            // },
            downloadImage() {
                this.$refs.qrcode.genQrCodeImageDownload();
            },
            createImage(){
                html2canvas(this.$refs.imageWrapper,{
                    backgroundColor: null
                }).then((canvas) => {
                    let dataURL = canvas.toDataURL("image/png");
                    this.dataURL = dataURL;
                    downloadjs(dataURL,"qrcode.png","image/png")
                });
            },
            extendsString(){
                String.prototype.format = function(args) {
                    var result = this;
                    if (arguments.length > 0) {
                        if (arguments.length == 1 && typeof (args) == "object") {
                            for (var key in args) {
                                if(args[key]!=undefined){
                                    var reg = new RegExp("({" + key + "})", "g");
                                    result = result.replace(reg, args[key]);
                                }
                            }
                        }
                        else {
                            for (var i = 0; i < arguments.length; i++) {
                                if (arguments[i] != undefined) {
                                    var reg= new RegExp("({)" + i + "(})", "g");
                                    result = result.replace(reg, arguments[i]);
                                }
                            }
                        }
                    }
                    return result;
                }
            },
            updateRestaurantStatus(){
                updateRestaurantStatus(this.formData).then(response => {
                    const data = response.data
                    if(response.status == 1){
                        this.$message({
                            message: 'modify restaurant status success',
                            type: 'success'
                        });
                        
                    }else{
                        this.$message.error('modify restaurant status fail')
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    };

</script>
<style scoped>
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
.imageWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ED1A3B;
    border-radius: 25px;
}
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