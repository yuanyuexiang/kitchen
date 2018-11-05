<template>
    <div class="app-container">
        <div class="Grid-Row">
            <div class="Grid-Column" style="width: 200px;margin-right: 20px;">
                <el-form ref="postForm" :model="postForm" class="form-container">
                    <span class="title" style="line-height: 10px;font-weight: bold;">Upload PDF/Picture: </span>
                </el-form>
            </div>
            <div class="Grid-Column" style="width: 300px;margin-right: 20px;"> 
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span style="margin-top: 20px;">Only xx format accepted.</span>
            </div>
        </div>
        <div class="Grid-Row" style="margin-top: 20px;">
            <div class="Grid-Column" style="width: 150px;margin-right: 20px;">
                <el-form ref="postForm" :model="postForm" class="form-container">
                    <span class="title" style="line-height: 10px;font-weight: bold;">DIY Upload Menu: </span>
                </el-form>
            </div>
            <div class="Grid-Column" style="width: 300px;margin-right: 20px;"> 
                <el-form ref="formData" label-width="110px" class="demo-formData">
                    <el-form-item label="Dish Name*" prop="name_cn">
						<el-input></el-input>
					</el-form-item>
					<el-form-item label="Category" prop="name_en">
						<el-input></el-input>
					</el-form-item>
					<el-form-item label="price*$" prop="least">
						<el-input></el-input>
					</el-form-item>
                    <el-form-item label="Image" prop="price">
						<el-upload
						  class="avatar-uploader"
						  :action="baseUrl + '/camaro/v1/file'"
						  :show-file-list="false"
						  :on-success="uploadImg"
						  :before-upload="beforeImgUpload">
						  <img v-if="formData.pic_url" :src="formData.pic_url" class="avatar">
						  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</el-form-item>
                    <el-form-item label="Description" prop="least">
						<el-input></el-input>
					</el-form-item>
                    <el-form-item label="Ingredients" prop="rule">
						<el-select style="width: 100%;" v-model="formData.ingredients" value-key="id" multiple placeholder="请选择">
							<el-option
							v-for="item in ingredients"
							size="medium"
							:label="item.name_cn"
							:key="item.id"
							:value="item">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="Add option" prop="rule">
						<el-select style="width: 100%;" v-model="formData.steps" value-key="id" multiple placeholder="请选择">
							<el-option
							v-for="item in steps"
							size="medium"
							:label="item.name_cn"
							:key="item.id"
							:value="item">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="button_submit">
						<el-button type="primary" @click="submitForm('formData')">Subbmit</el-button>
					</el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getList
    } from "@/api/table";
    //import {baseUrl, baseImgPath} from '@/config/env'

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
                listLoading: true,
				baseUrl:"",
    			city: {},
    			formData: {
					pic_url:'',
					//restaurant_id:0,
				},
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
			uploadImg(res, file) {
				if (res.status == 1) {
					this.formData.pic_url = res.data.aws_url;
				}else{
					this.$message.error('上传图片失败！');
				}
			},
			beforeImgUpload(file) {
				const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png');
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isRightType) {
					this.$message.error('上传图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传图片大小不能超过 2MB!');
				}
				return isRightType && isLt2M;
			},
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