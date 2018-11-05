<template>
    <div class="app-container">
        <div class="Grid-Title">
            <span style="font-weight: bold;">Settings</span>
        </div>
        <div class="Grid-Row" style="margin-top: 50px;">
            <div class="Grid-Column" style="width: 800px;margin-right: 20px;">
                <div class="title" style="display:flex; justify-content: space-between">
                    <span style="line-height: 30px;font-weight: bold;">Reset Password</span>
                    <el-button type="primary">Save</el-button>
                </div>
                <el-form ref="postForm" :model="postForm" label-width="140px" class="form-container">
                    <el-form-item style="margin-bottom: 0px; text-align: left;" label="Old Password">
                        <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 0px; "  label="New Password">
                        <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 0px; " label="Confirm Password">
                        <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="Grid-Row" style="margin-top: 50px;">
            <div class="Grid-Column" style="width: 800px;margin-right: 20px;">
                <div class="title" style="display:flex; justify-content: space-between">
                    <span style="line-height: 30px;font-weight: bold;">Terms of Service and Privacy Policy</span>
                    <el-button type="primary">View</el-button>
                </div>
                <span style="margin-top: 20px;">
                    Linglink Terms of Service and Privacy Policy explains how we use, store, and process information about you to provide, understand, improve, and develop the Instapage Platform, create and maintain a trusted and safer environment and comply with our legal obligations.
                </span>
            </div>
        </div>
        <div class="Grid-Row" style="margin-top: 50px;">
            <div class="Grid-Column" style="width: 800px;margin-right: 20px;">
                <div class="title" style="display:flex; justify-content: space-between">
                    <span style="line-height: 30px;font-weight: bold;">Marketing and Communications</span>
                    <el-button type="primary">Save</el-button>
                </div>
                <span style="margin-top: 20px;">
                    We process your personal information for the purposes of marketing activities to offer you products or services that may be of interest based on your preferences. 
                </span>
            </div>
        </div>
        <div style="margin-top: 50px;">
            <el-radio v-model="radio" label="1">I would like to receive relevant marketing communications</el-radio>
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
            height: 36px !important;
        }
    }
    .title {
        line-height: 0px;
    }
}
</style>