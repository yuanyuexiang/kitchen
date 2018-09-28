<template>
    <div class="app-container">
        <div class="Grid-Title">
            <span style="font-weight: bold;">Launch Menu</span>
        </div>
        <div class="Grid-Row" style="height: 50px;">
            <div class="Grid-Row">
                <span>Menu Status</span>
            </div>
            <div class="Grid-Row" style="margin-left: 20px;">
                <span>Onhold</span>
                <el-switch
                    v-model="value2"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch>
                <span>Launched</span>
            </div>
        </div>
        <div class="Grid-Column">
            <div class="Grid-Row">
                <span>Menu QR Code</span>
            </div>
            <div class="Grid-Row">
                <div class="Grid-Column" style="width: 200px;height: 200px;margin-right: 20px;">
                    <span>(View on Wechat Only)</span>
                </div>
                <div class="Grid-Column" style="width: 200px;height: 200px;margin-right: 20px;">
                    <span>Scan the code</span>
                    <img style="width: 200px;" src="static/logo.png" class="pan-thumb">
                </div>
                <div class="Grid-Column" style="width: 200px;height: 200px;margin-right: 20px;">
                    <el-form ref="postForm" :model="postForm" class="form-container">
                        <el-button type="primary">Download</el-button>
                    </el-form>
                    <span>Download to Print</span>
                </div>
            </div>
        </div>
        <div class="Grid-Column">
            <div class="title" style="width: 600px; margin-right: 20px;display:flex; justify-content: space-between">
                <span style="line-height: 30px;">DIY QR Code Generator</span>
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
    width: 600px;
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