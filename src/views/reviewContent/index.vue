<template>
    <div class="app-container">
        <div class="Grid-Row">
            <i class="el-icon-back" style="cursor: pointer;" @click="goback"></i>
        </div>
        <div class="Grid-Title">
            <span style="font-weight: bold;">Submit a Request</span>
        </div>
        <div class="Grid-Row" style="margin-left: 20px;margin-top: 30px;width: 800px;">
            <div class="Grid-Column" style="width: 400px;height: 250px;margin-right: 20px;">
                <div style="width: 400px;margin-top: 0px;">
                    <span style="font-weight:bold;">Dish Name:</span>
                    <span style="margin-top: 20px;">{{dish.name_en}}</span>
                </div>
                <div style="width: 400px;margin-top: 20px;">
                    <span style="font-weight:bold;">Category:</span>
                    <span style="margin-top: 20px;">{{dish.category_en}}</span>
                </div>
                <div style="width: 400px;margin-top: 20px;">
                    <span style="font-weight:bold;">Price:</span>
                    <span>{{dish.price}}</span>
                </div>
                <div style="width: 400px;margin-top: 20px;">
                    <span style="font-weight:bold;">Description:</span>
                    <span>{{dish.discription_en}}</span>
                </div>
                <div style="width: 400px;margin-top: 20px;">
                    <span style="font-weight:bold;">Ingredients:</span>
                    <span>{{dish.ingredientList}}</span>
                </div>
                <div style="width: 400px;margin-top: 20px;">
                    <span style="font-weight:bold;">Options:</span>
                    <span>{{dish.stepList}}</span>
                </div>
            </div>
            <div class="Grid-Column" style="width: 200px;margin-right: 20px;">
                <img style="width: 200px;" :src="dish.pic_url" class="pan-thumb">
            </div>
        </div>
        <div class="Grid-Column" style="margin-left: 20px;margin-top: 20px;margin-bottom: 20px;">
            <div class="title" style="width: 800px; margin-right: 20px;display:flex; justify-content: space-between">
                <span style="line-height: 30px;font-weight: bold;">Make Changes:</span>
            </div>
            <div class="hr2" style="width: 800px; margin-right: 20px;margin-bottom: 20px;"/> 
            <div class="Grid-Column">
                <div class="Grid-Column" style="width: 400px;margin-right: 20px;">
                    <el-form ref="formData" :model="formData" class="form-container">
                        <el-form-item class="form-item-label" style="margin-bottom: 10px;" label-width="120px" label="Content Tab:">
                            <el-select v-model="formData.field" placeholder="Select">
                                <el-option
                                v-for="item in fieldList"
                                :key="item"
                                :label="item"
                                :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="form-item-label" style="width: 800px;margin-bottom: 10px;" label-width="120px" label="New Content:">
                            <el-input type="textarea" :rows="3" v-model="formData.content" placeholder="Leave a message"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="Grid-Row" style="margin-top: 20px;">
                    <el-button type="primary" @click="submitForm('formData')">Submit</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getDish,
    } from '@/api/foodie'
    export default {

        data() {
            return {
                filterText: '',
                restaurant_id:0,
                dish:{},
                formData:{},
                fieldList:["Dish Name","Category","Price","Description","Ingredients","Options",],
            }
        },
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val)
            }
        },
        mounted(){
            let restaurant_id = this.$route.query.restaurant_id
            this.getDish(restaurant_id)
        },
        methods: {
            filterNode(value, data) {
                if (!value) return true
                return data.label.indexOf(value) !== -1
            },
            goback(){
                this.$router.go(-1)
            },
            getDish(id){
				getDish(id).then(response => {
					const responseData = response.data;
                    const status = response.status;
					if (status != 1) {
						const message = responseData.message;
					}else{
						this.dish = responseData;
					}
				}).catch(error => {
					console.log(error);
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
.hr2{ 
    height:3px;
    border:none;
    border-top:1px solid #bfcbd9;
    margin-top: 10px;
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
