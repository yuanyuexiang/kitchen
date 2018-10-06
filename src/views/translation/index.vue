<template>
    <div class="app-container">
        <div class="Grid-Title">
            <span style="font-weight: bold;">Restaurant Details</span>
        </div>
        <div class="Grid-Column" style="margin-top: 50px;">
            <div class="Grid-Row">
                <span style="font-weight: bold;">Translator Info</span>
            </div>
            <div class="Grid-Row">
                <div class="Grid-Column" style="width: 200px;margin-right: 40px;margin-top: 20px;">
                    <img style="width: 200px;" src="static/logo.png" class="pan-thumb">
                </div>
                <div class="Grid-Column" style="width: 400px;margin-right: 20px;margin-top: 20px;">
                    <el-form ref="postForm" :model="postForm" class="form-container">
                    <el-form-item style="margin-bottom: 0px;" label-width="45px" label="Name:">
                        <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                    </el-form-item>
                    <el-input
                        style="width:100%;margin-top: 20px;"
                        type="textarea"
                        :rows="2"
                        placeholder="Leave me a message"
                        v-model="textarea">
                    </el-input>
                    </el-form>
                </div>
            </div>
            <div class="Grid-Row" style="margin-top: 20px;">
                <span style="font-weight: bold;">Working Progress</span>
            </div>
            <div class="Grid-Column">
                <div class="Grid-Row" style="width: 400px;margin-right: 20px;margin-top: 20px;justify-content:space-between">
                    <span>1. Content under review</span>
                    <el-radio v-model="radio" label=""></el-radio>
                </div>
                <div class="Grid-Row" style="width: 400px;margin-right: 20px;margin-top: 20px;justify-content:space-between">
                    <span>2. Translation in progress</span>
                    <el-radio v-model="radio" label=""></el-radio>
                </div>
                <div class="Grid-Row" style="width: 400px;margin-right: 20px;margin-top: 20px;justify-content:space-between">
                    <span>Delivery date: </span>
                </div>
                <div class="Grid-Row" style="width: 400px;margin-right: 20px;margin-top: 20px;justify-content:space-between">
                    <span>3. Ready to go</span>
                    <el-radio v-model="radio" label=""></el-radio>
                </div>
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
            min-height: 35px;
            height: 35px;
        }
    }
    .title {
        line-height: 0px;
    }
}
.article-textarea {
    textarea {
        padding-right: 0px;
        resize: none;
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid #bfcbd9;
    }
}
</style>