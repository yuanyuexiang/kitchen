<template>
    <div class="app-container">
        <el-tabs v-model="activeName">
            <el-tab-pane label="Dish List" name="first">
                <div class="Grid-Row" style="margin-bottom: 20px;" v-for="item in dishList" :key="item.id" >
                    <div class="Grid-Column" style="width: 200px;margin-right: 20px;">
                        <img style="width: 200px;" :src="item.pic_url" class="pan-thumb">
                    </div>
                    <div class="Grid-Column" style="width: 400px;margin-right: 20px;">
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Dish Name:</span>
                            <span style="margin-top: 20px;">{{item.name_en}}</span>
                        </div>
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Category:</span>
                            <span style="margin-top: 20px;">{{item.category_en}}</span>
                        </div>
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Price:</span>
                            <span>{{item.price}}</span>
                        </div>
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Description:</span>
                            <span>{{item.discription_en}}</span>
                        </div>
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Ingredients:</span>
                            <span>{{item.ingredientList}}</span>
                        </div>
                        <div style="width: 400px;margin-right: 20px;">
                            <span style="font-weight:bold;">Options:</span>
                            <span>{{item.stepList}}</span>
                        </div>
                    </div>
                    <div class="Grid-Column" style="width: 150px;margin-right: 20px;">
                        <router-link :to="{path:'/menuManagement/reviewContent',query: {name: id}}">
                            <el-button type="primary">Make Changes</el-button>
                        </router-link>
                    </div>
                </div>
                <div class="Pagination" style="text-align: left;margin-top: 10px;">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="10"
                        layout="total, prev, pager, next"
                        :total="count">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="Wait for Update" name="second"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import {
        getDishList,
        getDishCount,
    } from '@/api/foodie'
    import {
        mapGetters,
        mapActions
    } from 'vuex'

    export default {
        data() {
            return {
                filterText: '',
                activeName: 'first',
                dishList:[],
                offset: 0,

                limit: 10,
                count: 0,
                currentPage: 1,
                dialogFormVisible: false,
                selectTable: {},
                params: {
                    offset: 0,
                    limit: 10,
                    sortby: "id",
                    order: "desc",
                    query: "",
                    timestamp: new Date().getTime()
                },
            }
        },
        computed: {
            ...mapGetters(['restaurant'])
        },
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val)
            }
        },
        mounted(){
            this.initData()
            this.params.query = "restaurant_id:"+this.restaurant.id
        },
        methods: {
            initData(){
                try{
                    const params = {
                        query: "",
                        timestamp:new Date().getTime(),
                    }
                    params.query = "restaurant_id:"+this.restaurant.id
                    getDishCount(params).then(response => {
                        const responseData = response.data
                        const status = response.status
                        console.log(responseData)
                        if (status == 1) {
                            this.count = responseData
                        }
                    }).catch(error => {
                        console.log(error);
                    });

                    this.getDishes(this.params)
                }catch(err){
                    console.log('get data error', err);
                }
            },
            filterNode(value, data) {
                if (!value) return true
                return data.label.indexOf(value) !== -1
            },
            getDishes(params){
				getDishList(params).then(response => {
					const responseData = response.data;
                    const status = response.status;
                    console.log(responseData);
					if (status != 1) {
						const message = responseData.message;
						console.log(message);
					}else{
						const data = responseData;
                        this.dishList = data;
                        this.dishList.forEach(function(dish){
                            let ingredients = dish.ingredients
                            let ingredientList = ""
                            ingredients.forEach(function(ingredient){
                                ingredientList+=ingredient.name_en+","
                            })
                            dish.ingredientList = ingredientList
                            let steps = dish.steps
                            let stepList = ""
                            steps.forEach(function(step){
                                stepList+=step.name_en+","
                            })
                            dish.stepList = stepList
                        })
                        console.log(this.dishList);
					}
				}).catch(error => {
					console.log(error);
				});
			},
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1) * this.limit;
                this.params.offset = this.offset;
                this.getDishes(this.params);
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
