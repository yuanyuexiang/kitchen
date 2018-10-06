<template>
    <div class="app-container">
        <div class="Grid-Title">
            <span style="font-weight: bold;">My Demos</span>
        </div>
        <div class="Grid-Column" style="margin-top: 50px;">
            <div>
                <div>To receive the best outcome, you are highly recommended to view demos on your mobile phone.</div>
                <div>You can choose any one of the following ways to access your demo.</div>
            </div>
            <div class="Grid-Row" style="margin-top: 20px;">
                <span style="font-weight: bold;">English Version</span>
            </div>
            <div class="Grid-Row" style="margin-top: 20px;">
                <div class="Grid-Column" style="width: 200px;margin-right: 20px;">
                    <span>Scan the code</span>
                    <img style="width: 200px;" src="static/qrcode.jpeg" class="pan-thumb">
                </div>
                <div class="Grid-Column" style="width: 200px;margin-right: 20px;">
                    <span>Message me the link</span>
                    <el-form style="margin-top: 20px;" ref="postForm" :model="postForm" class="form-container">
                        <span class="title" style="line-height: 10px;">Mobile Number</span>
                        <el-form-item>
                            <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                        </el-form-item>
                        <el-button type="primary">Send</el-button>
                    </el-form>
                </div>
                <div class="Grid-Column" style="width: 200px;margin-right: 20px;">
                    <span>Copy link</span>
                    <span style="margin-top: 20px;">link</span>
                </div>
            </div>
        </div>
        <div class="Grid-Column">
            <div class="Grid-Row" style="margin-top: 20px;">
                <span style="font-weight: bold;">Chinese Version</span>
            </div>
            <div class="Grid-Row" style="margin-top: 20px;">
                <div class="Grid-Column" style="width: 200px;margin-right: 20px;">
                    <span>Scan the code</span>
                    <img style="width: 200px;" src="static/qrcode.jpeg" class="pan-thumb">
                </div>
                <div class="Grid-Column" style="width: 200px;margin-right: 20px;">
                    <span>Message me the link</span>
                    <el-form style="margin-top: 20px;" ref="postForm" :model="postForm" class="form-container">
                        <span class="title" style="line-height: 10px;">Mobile Number</span>
                        <el-form-item>
                            <el-input :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please input contents"/>
                        </el-form-item>
                        <el-button type="primary">Send</el-button>
                    </el-form>
                </div>
                <div class="Grid-Column" style="width: 200px;margin-right: 20px;">
                    <span>Copy link</span>
                    <span style="margin-top: 20px;">link</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                filterText: '',
                data2: [{
                    id: 1,
                    label: 'Level one 1',
                    children: [{
                        id: 4,
                        label: 'Level two 1-1',
                        children: [{
                            id: 9,
                            label: 'Level three 1-1-1'
                        }, {
                            id: 10,
                            label: 'Level three 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: 'Level one 2',
                    children: [{
                        id: 5,
                        label: 'Level two 2-1'
                    }, {
                        id: 6,
                        label: 'Level two 2-2'
                    }]
                }, {
                    id: 3,
                    label: 'Level one 3',
                    children: [{
                        id: 7,
                        label: 'Level two 3-1'
                    }, {
                        id: 8,
                        label: 'Level two 3-2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val)
            }
        },

        methods: {
            filterNode(value, data) {
                if (!value) return true
                return data.label.indexOf(value) !== -1
            }
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