<template>
    <div class="app-container">
        <div class="Grid-Title">
            <span style="font-weight: bold;">Restaurant Details</span>
        </div>
        <div class="Grid-Row" style="margin-top: 50px;">
            <div class="Grid-Column" style="width: 200px;padding-right: 20px;">
                <span style="font-weight: bold;">Upload Logo:</span>
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
            <div class="Grid-Column" style="width: 300px;padding-right: 20px;">
                <el-form ref="postForm" :model="postForm" class="form-container">
                    <span class="title" style="line-height: 10px;">Restaurant Name:</span>
                    <el-form-item>
                        <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                    </el-form-item>
                    <span class="title" style="line-height: 10px;">Contact Person:</span>
                    <el-form-item>
                        <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                    </el-form-item>
                    <span class="title" style="line-height: 10px;">Restaurant Type:</span>
                    <el-form-item>
                        <el-select v-model="value" placeholder="Select">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <div class="Grid-Column" style="width: 300px;padding-right: 20px;">
                <el-form ref="postForm" class="form-container">
                    <span class="title" style="line-height: 10px;">Contact Email:</span>
                    <el-form-item>
                        <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                    </el-form-item>
                    <span class="title" style="line-height: 10px;">Contact Phone Number:</span>
                    <el-form-item>
                        <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                    </el-form-item>
                    <span class="title" style="line-height: 10px;">Cuisine Type:</span>
                    <el-form-item>
                        <el-select v-model="value" placeholder="Select">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="Grid-Row">
            <div class="Grid-Column" style="width: 800px;margin-top: 20px;">
                <span class="title" style="line-height: 10px;font-weight: bold;">Restaurant Address:</span>
                <el-form ref="postForm" :model="postForm" class="form-container">
                    <el-form-item style="margin-bottom: 0px;" label-width="45px" label="Street:">
                        <el-input type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 0px;" label-width="45px" label="Unit:">
                        <el-input type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                    </el-form-item>
                    <div style="display:flex;">
                        <el-form-item style="margin-bottom: 0px;" label-width="45px" label="City:">
                            <el-input type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 0px;" label-width="45px" label="State:">
                            <el-input type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 0px;" label-width="55px" label="Country:">
                            <el-input type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 0px;" label-width="85px" label="Zip Code:">
                            <el-input type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                        </el-form-item>
                    </div>
                    <el-form-item style="margin-bottom: 0px;" label-width="45px" label="Website:">
                        <el-input type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="Grid-Row">
            <div class="Grid-Column" style="width: 800px;margin-top: 80px;">
                <span class="title" style="line-height: 10px;font-weight: bold;">Features:</span>
                <el-form ref="postForm" :model="postForm" class="form-container">
                    <el-form-item style="margin-bottom: 0px;" label="Opening Hours:">
                        <el-time-picker
                            v-model="value2"
                            :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
                            placeholder="任意时间点">
                        </el-time-picker>
                        <span>---</span>
                        <el-time-picker
                            arrow-control
                            v-model="value3"
                            :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
                            placeholder="任意时间点">
                        </el-time-picker>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 0px;" label="Take Reservations:">
                        <el-select v-model="value" style="width:100px" placeholder="Select">
                            <el-option>Yes</el-option>
                            <el-option>No</el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 0px;" label="Delivery:">
                        <el-select v-model="value" placeholder="Select">
                            <el-option>Yes</el-option>
                            <el-option>No</el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 0px;" label="Wifi:">
                        <el-select v-model="value" placeholder="Select">
                            <el-option>Yes</el-option>
                            <el-option>No</el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 0px;" label="Payment:">
                        <el-radio v-model="radio" label="1">Cash</el-radio>
                        <el-radio v-model="radio" label="2">Credit Card</el-radio>
                        <el-radio v-model="radio" label="1">WeChat Pay</el-radio>
                        <el-radio v-model="radio" label="2">Apple Pay</el-radio>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="Grid-Row">
            <div class="Grid-Column" style="width: 800px;margin-top: 80px;">
                <span class="title" style="line-height: 10px;font-weight: bold;">About Us:</span>
                <el-form ref="postForm" :model="postForm" class="form-container" style="margin-top: 20px;">
                    <el-input
                        type="textarea"
                        rows="5"
                        placeholder="A brief introduction about your restaurant"
                        v-model="textarea2">
                    </el-input>
                </el-form>
                <span class="title" style="line-height: 10px;margin-top: 20px;">More About Us:</span>
                <el-form ref="postForm" :model="postForm" class="form-container" style="margin-top: 20px;">
                    <el-input
                        type="textarea"
                        rows="5"
                        placeholder="Fun facts or stories about your dishes, staff, history, restaurant culture, etc. you would like to share with your customers."
                        v-model="textarea2">
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
    import MdInput from '@/components/MDinput';
    import {
        getList
    } from "@/api/table";

    export default {    
        components:{
            MdInput,
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
                imageUrl: '',
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                postForm: {},
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
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
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
        }
    }
    .title {
        line-height: 0px;
    }
}
</style>
