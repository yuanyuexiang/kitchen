<template>
    <div class="app-container">
        <div class="Grid-Column" style="align-items: center;width: 800px;">
            <div>Become an advanced plan customer and enjoy more services!</div>
            <div>Simply click the button below to request a free demo.</div>
            <el-button style="margin-top:30px" type="primary" @click="upgrade">Upgrade Now</el-button>
        </div>
        <div class="Grid-Row">
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                filterText: '',
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
            },
            upgrade(){
                this.$notify({
                    title: 'Get ready for more',
                    message: "It's great that Linglink helps to boost your business! We will get back to you shortly with more info on our advanced plan options.",
                    type: 'success'
                });
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
        }
    }
    .title {
        line-height: 0px;
    }
}
</style>
