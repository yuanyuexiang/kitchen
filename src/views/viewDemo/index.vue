<template>
    <div class="app-container">
        <div class="Grid-Title">
            <span style="font-weight: bold; color: #FB001F;">My Demos</span>
        </div>
        <div class="Grid-Column" style="margin-top: 50px;">
            <div>
                <!-- <div>To receive the best outcome, you are highly recommended to view demos on your mobile phone.</div>
                <div>You can choose any one of the following ways to access your demo.</div> -->
                <!-- <div>Reminders:</div> -->
                <div class="title" style="width: 800px;margin-bottom: 20px;display:flex; justify-content: space-between;align-items: center;padding: 12px 5px 12px 5px; background-color: #898989;">
                    <span style="line-height: 30px;font-weight: bold;color: white;">Reminders:</span>
                </div>
                <div>1. To receive the best outcome, please <span style="font-weight:bold">view demos on your mobile phone.</span></div>
                <div>2. These two versions are demos for 
                    <el-popover
                        placement="top-start"
                        title=""
                        ref="reference"
                        width="400"
                        trigger="hover"
                        content='The codes here are NOT the same as the one printed for your dine-in customers. If you need to print extra copies for display, please refer to the code in "Launch Menu" page under "Menu Management".'>
                        <span style="color:#1890FF;cursor:pointer;" slot="reference" @click="visible = !visible">restaurants' use only.</span>
                    </el-popover>
                </div>

                <div>3. To scan QR code blow, use the smart phone's 
                    <el-popover
                        placement="top-start"
                        title=""
                        ref="reference"
                        width="400"
                        trigger="hover"
                        content='You can choose one of the following ways to access your demo. To scan the code using the camera, hold your phone steady for 2-3 seconds towards the QR Code below. Click on the notification to open the website.'>
                        <span style="color:#1890FF;cursor:pointer;" slot="reference" @click="visible = !visible">Camera function.</span>
                    </el-popover>
                </div>

                <div class="Grid-Row" style="width: 800px;margin-top: 20px;justify-content:space-around;">
                    <div class="Grid-Column" style="width: 200px;margin-right: 20px;">
                        <span style="font-weight:bold;margin-top: 20px;">Demo in English</span>
                        <div style="font-weight:bold;margin-top: 20px;" id="qrcodeEnglish"></div>
                    </div>
                    <div class="Grid-Column" style="width: 200px;margin-right: 20px;">
                        <span style="font-weight:bold;margin-top: 20px;">Demo in Chinese</span>
                        <div style="font-weight:bold;margin-top: 20px;" id="qrcodeChinese"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QRCode from 'qrcodejs2'
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    import {
        getToken,
    } from '@/utils/auth'

    export default {
        data() {
            return {
                filterText: '',
                qrcodeChinese:{},
                qrcodeEnglish:{},
                qrcodeChineseText:'',
                qrcodeEnglishText:'',
                baseURL:'',
            }
        },
        computed: {
            ...mapGetters(['restaurant','user',])
        },
        watch:{
            restaurant(newRestaurant, oldRestaurant){
                this.qrcodeEnglishText = this.baseURL+this.restaurant.code+'&lang=en&token='+getToken()
                this.qrcodeChineseText = this.baseURL+this.restaurant.code+'&token='+getToken()
                this.qrcodeChinese.clear()
                this.qrcodeEnglish.clear()
                this.qrcodeChinese.makeCode(this.qrcodeChineseText);
                this.qrcodeEnglish.makeCode(this.qrcodeEnglishText);
            },
        },
        created(){
            if(process.env.NODE_ENV == 'test'){
                this.baseURL = 'http://gastronome.test.linglinkmenu.cn/?restaurantCode='
            }else if(process.env.NODE_ENV == 'development'){
                this.baseURL = 'http://gastronome.test.youentang.org/?restaurantCode='
            }else{
                this.baseURL = 'http://gastronome.linglinkmenu.cn/?restaurantCode='
            }
            this.qrcodeEnglishText = this.baseURL+this.restaurant.code+'&lang=en&token='+getToken()
            this.qrcodeChineseText = this.baseURL+this.restaurant.code+'&token='+getToken()
        },
        mounted(){
            this.createQrcode()
        },
        methods: {
            filterNode(value, data) {
                if (!value) return true
                return data.label.indexOf(value) !== -1
            },
            createQrcode() {
                this.qrcodeChinese = new QRCode('qrcodeChinese', {  
                    width: 180,  // 设置宽度 
                    height: 180, // 设置高度
                    text: this.qrcodeChineseText,
	                correctLevel : QRCode.CorrectLevel.L
                })
                this.qrcodeEnglish = new QRCode('qrcodeEnglish', {  
                    width: 180,  // 设置宽度 
                    height: 180, // 设置高度
                    text: this.qrcodeEnglishText,
	                correctLevel : QRCode.CorrectLevel.L
                })
            },
        }
    }

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