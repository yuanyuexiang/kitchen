<template>
    <div class="app-container">
        <div class="Grid-Title">
            <span style="font-weight: bold;">Subscription</span>
        </div>
        <div class="Grid-Row" style="margin-top: 50px;">
            <div class="Grid-Column" style="width: 800px;margin-right: 20px;">
                <div class="title" style="display:flex; justify-content: space-between">
                    <span style="line-height: 30px;font-weight: bold;">Subscription Summary</span>
                    <el-button type="primary">Upgrade</el-button>
                </div>
                <el-form ref="postForm" :model="postForm" class="form-container">
                    <el-form-item style="margin-bottom: 10px; " label="My Plan:">
                        <div style="margin-right: 30px; margin-top: 15px; display:flex; flex-direction: column;">
                            <el-radio style="margin-left: 30px;" v-model="radio" label="1">Cash</el-radio>
                            <el-radio style="margin-top: 10px;" v-model="radio" label="2">Credit Card</el-radio>
                            <el-radio style="margin-top: 10px;" v-model="radio" label="3">WeChat Pay</el-radio>
                            <el-radio style="margin-top: 10px;" v-model="radio" label="4">Apple Pay</el-radio>
                        </div>
                    </el-form-item>
                    <span class="title" style="line-height: 10px;">Menu Published:</span>
                    <span class="title">1/1</span>
                    <span class="title">(可发布数量根据plan计算，可一账户管理多个menu）</span>
                </el-form>
            </div>
        </div>
        <div class="Grid-Column" style="margin-top: 50px;">
            <div class="title" style="width: 800px; margin-right: 20px;display:flex; justify-content: space-between">
                <span style="line-height: 30px;font-weight: bold;">Billing Information</span>
                <el-button type="primary">Save</el-button>
            </div>
            <div class="Grid-Row">
                <div class="Grid-Column" style="width: 350px;margin-right: 20px;">
                    <el-form ref="postForm" :model="postForm" class="form-container">
                        <span class="title" style="line-height: 10px;">Card Holder Name</span>
                        <el-form-item>
                            <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                        </el-form-item>
                        <span class="title" style="line-height: 10px;">Credit Card Number</span>
                        <el-form-item>
                            <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                        </el-form-item>
                        <div class="Grid-Row" style="width: 350px;margin-right: 20px;">
                            <div style="width: 250px;margin-right: 20px;">
                                <span class="title" style="line-height: 10px;">Expiration Date</span>
                                <el-form-item>
                                    <el-date-picker
                                        style="width:150px;"
                                        v-model="value1"
                                        type="date"
                                        placeholder="Select">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                            <div>
                                <span class="title" style="line-height: 10px;">CVV</span>
                                <el-form-item>
                                    <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="input"/>
                                </el-form-item>
                            </div>
                        </div>
                    </el-form>
                </div>
                <div class="Grid-Column" style="width: 350px;">
                    <el-form ref="postForm" class="form-container">
                        <span class="title" style="line-height: 10px;">Street Address</span>
                        <el-form-item>
                            <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                        </el-form-item>
                        <div class="Grid-Row" style="width: 350px;margin-right: 20px;">
                            <div style="margin-right: 20px;">
                                <span class="title" style="line-height: 10px;">City:</span>
                                <el-form-item>
                                    <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="input"/>
                                </el-form-item>
                            </div>
                            <div>
                                <span class="title" style="line-height: 10px;">Zip Code:</span>
                                <el-form-item>
                                    <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="input"/>
                                </el-form-item>
                            </div>
                        </div>
                        <span class="title" style="line-height: 10px;">Country:</span>
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
        </div>
        <div class="Grid-Column" style="margin-top: 20px;">
            <div class="title" style="width: 800px; margin-right: 20px;display:flex; justify-content: space-between">
                <span style="line-height: 30px;font-weight: bold;">Invoice Information (optional)</span>
                <el-button type="primary">Save</el-button>
            </div>
            <div class="Grid-Row">
                <div class="Grid-Column" style="width: 350px;margin-right: 20px;">
                    <el-form ref="postForm" :model="postForm" class="form-container">
                        <span class="title" style="line-height: 10px;">First Name</span>
                        <el-form-item>
                            <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                        </el-form-item>
                        <span class="title" style="line-height: 10px;">Company Name</span>
                        <el-form-item>
                            <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                        </el-form-item>
                        <span class="title" style="line-height: 10px;">Street Address</span>
                        <el-form-item>
                            <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="Grid-Column" style="width: 350px;margin-right: 20px;">
                    <el-form ref="postForm" class="form-container">
                        <span class="title" style="line-height: 10px;">Last Name</span>
                        <el-form-item>
                            <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                        </el-form-item>
                        <span class="title" style="line-height: 10px;">VAT Number</span>
                        <el-form-item>
                            <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                        </el-form-item>
                        <span class="title" style="line-height: 10px;">Street Address 2</span>
                        <el-form-item>
                            <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
        <div class="Grid-Column" style="margin-top: 20px;">
            <div class="title" style="width: 800px; margin-right: 20px;display:flex; justify-content: space-between">
                <span style="line-height: 30px;font-weight: bold;">Payment History</span>
            </div>
        </div>
        <div class="Grid-Column">
            <div class="title" style="width: 600px; margin-right: 20px;display:flex; justify-content: space-between">
                <span style="line-height: 30px;font-weight: bold;">Terms & Contract</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getList
    } from "@/api/table";

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
                listLoading: true
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