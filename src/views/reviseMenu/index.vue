<template>
    <div class="app-container">
        <div class="Grid-Title">
            <span style="font-weight: bold;">Revise Menu</span>
        </div>
        <el-tabs v-show="!changing" v-model="activeName" style="width: 800px;margin-top: 20px;">
            <el-tab-pane label="1. To Be Reviewed" name="first">
                <div class="Grid-Row" style="margin-bottom: 20px;" v-for="item in reviewDishList" :key="item.id" >
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
                        <!-- <router-link :to="{path:'/menuManagement/reviewContent',query: {restaurant_id: item.id}}">
                            <el-button type="primary">Make Changes</el-button>
                        </router-link> -->
                        <el-button style="width: 150px;" type="primary" @click="makeChange(item)">Make Changes</el-button>
                        <el-button style="margin-top: 20px;width: 150px;margin-left: 0px;" type="primary">Confirm</el-button>
                    </div>
                </div>
                <div class="Pagination" style="text-align: left;margin-top: 10px;">
                    <el-pagination
                        @size-change="handleSizeChangeReview"
                        @current-change="handleCurrentChangeReview"
                        :current-page="currentPageReview"
                        :page-size="10"
                        layout="total, prev, pager, next"
                        :total="countReview">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="2. Translation in Progress" name="second">
                <div class="Grid-Row" style="margin-bottom: 20px;" v-for="item in translationDishList" :key="item.id" >
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
                </div>
                <div class="Pagination" style="text-align: left;margin-top: 10px;">
                    <el-pagination
                        @size-change="handleSizeChangeTranslation"
                        @current-change="handleCurrentChangeTranslation"
                        :current-page="currentPageTranslation"
                        :page-size="10"
                        layout="total, prev, pager, next"
                        :total="countTranslation">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="3. Good to Go" name="third">
                <div class="Grid-Row" style="margin-bottom: 20px;" v-for="item in goDishList" :key="item.id" >
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
                        <!-- <router-link :to="{path:'/menuManagement/reviewContent',query: {restaurant_id: item.id}}">
                            
                        </router-link> -->
                        <el-button style="width: 150px;" type="primary" @click="makeChange(item)">Make Changes</el-button>
                    </div>
                </div>
                <div class="Pagination" style="text-align: left;margin-top: 10px;">
                    <el-pagination
                        @size-change="handleSizeChangeGo"
                        @current-change="handleCurrentChangeGo"
                        :current-page="currentPageGo"
                        :page-size="10"
                        layout="total, prev, pager, next"
                        :total="countGo">
                    </el-pagination>
                </div>
            </el-tab-pane>
        </el-tabs>

        <div v-show="changing">
            <div class="Grid-Row">
                <i class="el-icon-back" style="cursor: pointer;" @click="goback"></i>
            </div>
            <!-- <div class="Grid-Title">
                <span style="font-weight: bold;">Make Changes</span>
            </div> -->
            <div class="Grid-Row" style="margin-left: 20px;margin-top: 30px;width: 800px;">
                <div class="Grid-Column" style="width: 800px;margin-right: 20px;">
                    <el-form ref="postForm" :model="formData" label-width="150px" class="form-container">
                        <el-form-item style="margin-bottom: 0px; text-align: left;" label="Picture:">
                            <div class="Grid-Column" style="width: 300px;align-items: center;">
                                <img style="width: 300px;" :src="formData.pic_url" class="pan-thumb">
                            </div>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 0px; text-align: left;" label="Dish Name:">
                            <el-input :rows="1" v-model="formData.name_en" type="textarea" class="article-textarea" autosize placeholder=""/>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 0px; "  label="Category:">
                            <el-input :rows="1" v-model="formData.category_en" type="textarea" class="article-textarea" autosize placeholder=""/>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 0px; " label="Price:">
                            <el-input :rows="1" v-model="formData.price" type="textarea" class="article-textarea" autosize placeholder=""/>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 1px; " label="Description:">
                            <el-input :rows="1" v-model="formData.discription_en" type="textarea" class="article-textarea" autosize placeholder=""/>
                        </el-form-item>
                        <!-- <el-form-item style="margin-bottom: 0px; "  label="Ingredients:">
                            <el-input :rows="1" v-model="formData.ingredientList" type="textarea" class="article-textarea" autosize placeholder=""/>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 0px; " label="Options:">
                            <el-input :rows="1" autosize v-model="formData.stepList" type="textarea" class="article-textarea" autosize placeholder=""/>
                        </el-form-item> -->
                        <el-form-item style="margin-bottom: 1px; " label="Ingredients:">
                            <el-collapse>
                                <el-collapse-item title="Please unfold" name="1">
                                    
                                    <el-tag :key="ingredient.id" v-for="ingredient in formData.ingredients" closable :disable-transitions="false" @close="handleClose(ingredient)"> 
                                        {{ingredient.name_en}}
                                    </el-tag>
                                    <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
                                        @keyup.enter.native="handleInputConfirm"
                                        @blur="handleInputConfirm">
                                    </el-input>
                                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Ingredient</el-button>

                                </el-collapse-item>
                            </el-collapse>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 1px; " label="Options:">
                            <el-collapse>
                                <el-collapse-item title="Please unfold" name="1">
                                    <SlickList lockAxis="y" :distance="20" v-model="formData.steps" :value="formData.steps">
                                        <SlickItem v-for="(step, index) in formData.steps" :index="index" :key="index">
                                            <el-card class="box-card">
                                                <div slot="header" class="clearfix">
                                                    <el-input style="width: 130px;" v-model="step.name_en" size="mini"></el-input>
                                                    <el-input-number size="mini" v-model="step.most" :min="0"></el-input-number>
                                                    <i class="el-icon-arrow-right"></i>
                                                    <el-input-number size="mini" v-model="step.least" :max="step.most" :min="0"></el-input-number>
                                                    <i class="el-icon-delete" style="float: right;line-height: 26px;cursor: pointer;" @click="deleteStep(step)"></i>
                                                </div>
                                                
                                                <el-tag :key="option.id" v-for="option in step.options" closable :disable-transitions="false" @close="handleCloseOption(step.options,option)"> 
                                                    <span>{{option.name_en}}</span><span v-if="option.price" style="color:#C80E11;">-${{option.price}}</span>
                                                </el-tag>
                                                <el-input class="input-new-tag" v-show="step.inputVisibleOption" v-model="step.inputValueOption" ref="saveTagInputOption" size="small"
                                                    @keyup.enter.native="handleInputConfirmOption(step)"
                                                    @blur="handleInputConfirmOption(step)" placeholder="option name/price" v-focus="step.inputVisibleOption">
                                                </el-input>
                                                <el-button v-show="!step.inputVisibleOption" class="button-new-tag" size="small" @click="showInputOption(step)">+ New Option</el-button>

                                            </el-card>
                                        </SlickItem>
                                    </SlickList>
                                    <div style="display:flex;flex-direction:row;justify-content:flex-end;">
                                        <el-button type="primary" style="margin-top:10px;margin-bottom:10px;" @click="addStep" icon="el-icon-plus" circle></el-button>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 1px; " label="">
                            <div class="Grid-Row" style="margin-top: 20px;">
                                <el-button type="primary" @click="submitForm('formData')">Submit</el-button>
                                <el-button @click="goback">Cancel</el-button>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
                <!-- <div class="Grid-Column" style="width: 200px;margin-top: 50px;align-items: center;">
                    <img style="width: 200px;" :src="formData.pic_url" class="pan-thumb">
                </div> -->
            </div>
            <!-- <div class="Grid-Column" style="margin-left: 20px;margin-top: 20px;margin-bottom: 20px;">
                <div class="title" style="width: 800px; margin-right: 20px;display:flex; justify-content: space-between">
                    <span style="line-height: 30px;font-weight: bold;">Make Changes:</span>
                </div>
                <div class="hr2" style="width: 800px; margin-right: 20px;margin-bottom: 20px;"/> 
                <div class="Grid-Column">
                    <div class="Grid-Row" style="margin-top: 20px;">
                        <el-button type="primary" @click="submitForm('formData')">Submit</el-button>
                        <el-button @click="goback">Cancel</el-button>
                    </div>
                </div>
            </div> -->
        </div>

        <div>
            <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
                <span>这是一段信息</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </div>

    </div>
</template>

<script>
    import {
        getStepsListByDishID,
        getDishList,
        getDishCount,
        updateDishForCustomer,
    } from '@/api/foodie'
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    import { SlickList, SlickItem,} from 'vue-slicksort';
    export default {
        directives: {
            focus: {
                inserted: function (el, {value}) {
                    if (value) {
                        el.focus();
                    }
                }
            }
        },
        data() {
            return {
                filterText: '',
                activeName: 'first',
                dishList:[],
                offset: 0,

                limit: 10,

                count: 0,
                countGo: 0,
                countReview: 0,
                countTranslation: 0,

                currentPageGo: 1,
                currentPageReview: 1,
                currentPageTranslation: 1,

                dialogFormVisible: false,
                selectTable: {},
                params: {
                    offset: 0,
                    limit: 1000,
                    sortby: "id",
                    order: "asc",//"desc",
                    query: "",
                    timestamp: new Date().getTime()
                },
                scroll:0,
                changing:false,
                dish:{},
                scrollBack:0,
                reviewDishList:[],
                translationDishList:[],
                goDishList:[],

                reviewDishes:[],
                translationDishes:[],
                goDishes:[],
                formData:{steps:[]},

                //
                inputVisible: false,
                inputValue: '',
                inputVisibleOption: false,
                inputValueOption: '',
                items: [false, false, false, false, false, false, false, false],
                timeOut:{},

                //
                dialogVisible: false,
                currentDish:{},
            }
        },
        components: {
            SlickItem,
            SlickList
        },
        activated() {
            console.log("this.activated")
            if(this.scroll > 0){
                window.scrollTo(0, this.scroll);
                this.scroll = 0;
                window.addEventListener('scroll', this.handleScroll);
            }
        },
        deactivated(){
            console.log("this.deactivated")
            window.removeEventListener('scroll', this.handleScroll);
        },
        computed: {
            ...mapGetters(['restaurant'])
        },
        watch:{
            restaurant(newRestaurant, oldRestaurant){
                this.params.query = "restaurant_id:"+this.restaurant.id
                this.initData()
            },
        },
        created(){
            console.log("-----------------------created-------------------------")
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll);
            console.log("-----------------------mounted-------------------------")
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
                        this.dishList = data
                        if(!data){
                            this.reviewDishList = []
                            this.translationDishList = []
                            this.goDishList = []

                            this.countGo = 0
                            this.countTranslation = 0
                            this.countReview = 0
                            return
                        }
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
                        this.reviewDishList = this.dishList.slice(0,10)
                        console.log(this.dishList);
                        let me = this
                        this.dishList.forEach(function(item){
                            if(item.status == -2){
                                me.reviewDishes.push(item)
                            }else if(item.status == -1){
                                me.translationesDishes.push(item)
                            }else{
                                me.goDishes.push(item)
                            }
                            me.reviewDishList = me.reviewDishes.slice(0,10)
                            me.translationDishList = me.translationDishes.slice(0,10)
                            me.goDishList = me.goDishes.slice(0,10)

                            me.countGo = me.goDishes.length
                            me.countTranslation = me.translationDishes.length
                            me.countReview = me.reviewDishes.length
                        })
					}
				}).catch(error => {
					console.log(error);
				});
			},
            handleSizeChangeReview(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChangeReview(val) {
                this.currentPageReview = val;
                this.reviewDishList = this.reviewDishes.slice((val - 1) * this.limit,(val - 1) * this.limit+10)
            },
            handleSizeChangeTranslation(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChangeTranslation(val) {
                this.currentPageTranslation = val;
                this.translationDishList = this.translationDishes.slice((val - 1) * this.limit,(val - 1) * this.limit+10)
            },
            handleSizeChangeGo(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChangeGo(val) {
                this.currentPageGo = val;
                this.goDishList = this.goDishes.slice((val - 1) * this.limit,(val - 1) * this.limit+10)
            },
            handleScroll () {
                this.scroll  = document.documentElement &&  document.documentElement.scrollTop
                if(this.scroll>0){
                    this.scrollBack = this.scroll
                }
            },
            makeChange(item){
                //this.changing = true
                this.currentDish = item
                this.formData = JSON.parse(JSON.stringify(item))
                //
                this.changing = true
                getStepsListByDishID(item.id).then(response => {
					const responseData = response.data;
                    const status = response.status;
                    console.log(responseData);
					if (status != 1) {
						const message = responseData.message;
						console.log(message);
					}else{
                        this.formData.steps = responseData;
                        this.formData.steps.forEach(function(step){
                            step.inputVisibleOption = false
                        })
					}
				}).catch(error => {
					console.log(error);
				});
            },
            goback(){
                this.changing = false
                console.log("this.scrollBack")
                console.log(this.scrollBack)
                //console.log(window)
                //window.scrollTo(0, this.scrollBack);
                window.scrollTo(0,this.scrollBack)
            },
            submitForm(){
                updateDishForCustomer(this.formData).then(response => {
                    const data = response.data
                    if(response.status == 1){
                        this.$message({
                            message: 'modify dish success',
                            type: 'success'
                        });
                        
                        let ingredients = this.formData.ingredients
                        let ingredientList = ""
                        ingredients.forEach(function(ingredient){
                            ingredientList+=ingredient.name_en+","
                        })
                        this.formData.ingredientList = ingredientList
                        let steps = this.formData.steps
                        let stepList = ""
                        steps.forEach(function(step){
                            stepList+=step.name_en+","
                        })
                        this.formData.stepList = stepList

                        this.changing = false
                        
                        this.goDishes.splice(this.goDishes.indexOf(this.currentDish), 1)
                        this.goDishList.splice(this.goDishList.indexOf(this.currentDish), 1)
                        this.translationDishes.push(this.formData)

                        this.translationDishList = this.translationDishes.slice(0,10)
                        this.countGo = this.goDishes.length
                        this.countTranslation = this.translationDishes.length
                        /*
                        this.reviewDishList = this.reviewDishes.slice(0,10)
                        this.translationDishList = this.translationDishes.slice(0,10)
                        this.goDishList = this.goDishes.slice(0,10)

                        this.countGo = this.goDishes.length
                        this.countTranslation = this.translationDishes.length
                        this.countReview = this.reviewDishes.length
                        */
                    }else{
                        this.$message.error('modify dish fail')
                    }
                }).catch(error => {
                    this.$message.error(error);
                })
            },

            //
            handleClose(tag) {
                console.log("handleClose")
                console.log(tag)
                this.formData.ingredients.splice(this.formData.ingredients.indexOf(tag), 1)
            },
            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
                console.log("showInput")
            },
            handleInputConfirm() {
                console.log("handleInputConfirm")
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.formData.ingredients.push({name_en:inputValue})
                }
                this.inputVisible = false;
                this.inputValue = '';
            },

            handleCloseOption(options,option) {
                console.log("handleCloseOption")
                console.log(option)
                options.splice(options.indexOf(option), 1)
            },
            showInputOption(step) {
                let x = step.name_en
                step.name_en = ""
                step.name_en = x
                console.log(step)
                step.inputVisibleOption = true;
                console.log(step)
                // this.$nextTick(_ => {
                //     this.$refs.saveTagInputOption.$refs.input.focus();
                // // });
            },
            handleInputConfirmOption(step) {
                let x = step.name_en
                step.name_en = ""
                step.name_en = x
                console.log(step)
                console.log("handleInputConfirmOption")
                let inputValueOption = step.inputValueOption;
                if (inputValueOption) {
                    let nameAndPrice = inputValueOption.split('/')
                    let name = nameAndPrice[0]
                    let price = 0
                    if(nameAndPrice.length>1){
                        let _price = nameAndPrice[1].match(/\d+(?:\.\d+)?/);
                        console.log("--------------------------")
                        price = _price[0]
                    }
                    step.options.push({name_en:name,price:price})
                }
                step.inputVisibleOption = false;
                step.inputValueOption = '';
            },


            deleteStep(step){
                this.formData.steps.splice(this.formData.steps.indexOf(step), 1)
            },
            addStep(){
                this.formData.steps.push({name_en:"new option",price:0,most:0,least:0,options:[]})
            }
        }
    }

</script>
<style scoped>

.el-input-number--mini {
    width: 100px;
    line-height: 26px;
}

.el-tag + .el-tag {
    margin-right: 10px;
    margin-bottom: 10px;
}
.el-tag {
    margin-right: 10px;
    margin-bottom: 10px;
}
.button-new-tag {
    margin-right: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
    width: 150px;
}
.input-new-tag {
    width: 150px;
    margin-right: 10px;
}

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
