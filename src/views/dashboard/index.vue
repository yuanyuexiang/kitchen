<template>
    <div class="dashboard-container">
        <div class="Grid-Title">
            <span v-if="restaurant" style="font-weight: bold;">{{restaurant.name_en}}</span>
            <span v-else style="font-weight: bold;">Please Create Restaurant</span>
        </div>
        <div class="Grid-Column" style="width: 800px;margin-top: 50px;">
            <div class="Grid-Column overview" style="height: 270px;">
                <div style="margin:20px 0px 0px 20px">
                   <span style="font-weight:blod;font-size:20px">Overview</span>
                </div>
                <div class="Grid-Row" style="justify-content:center;margin-top: 40px;">
                    <div style="display:felx;flex-direction:column;justify-content:space-between;width:150px;">
                        <div style="display:flex;justify-content:center;margin-top: 10px;font-weight:blod;">0</div>
                        <div style="display:flex;justify-content:center;margin-top: 40px;">Up-to-date</div>
                        <div style="display:flex;justify-content:center;margin-top: 5px;">Sales</div>
                    </div>
                    <div style="display:flex;flex-direction:column;justify-content:space-between;width: 90px;align-items: center;">
                        <svg-icon icon-class="trending-up" style="height:30px;width: 30px;">sd</svg-icon>
                        <div style="border-left:1px solid; width: 1px;height:100px"></div>
                    </div>
                    <div style="display:felx;flex-direction:column;justify-content:space-between;width:150px;">
                        <div style="display:flex;justify-content:center;margin-top: 10px;font-weight:blod;">0</div>
                        <div style="display:flex;justify-content:center;margin-top: 40px;">Total</div>
                        <div style="display:flex;justify-content:center;margin-top: 5px;">Orders</div>
                    </div>
                    <!--
                    <div style="border:1px solid; width: 1px;height:50px"></div>
                    <div style="display:felx;flex-direction:column;justify-content:space-between;width:150px;">
                        <div style="display:flex;justify-content:center;">0</div>
                        <div style="display:flex;justify-content:center;">Total visits</div>
                    </div>
                    <div style="border:1px solid; width: 1px;height:50px"></div>
                    <div style="display:felx;flex-direction:column;justify-content:space-between;width:150px;">
                        <div style="display:flex;justify-content:center;">$0</div>
                        <div style="display:flex;justify-content:center;">Avg order price</div>
                    </div>
                    -->
                </div>
            </div>
            <div class="Grid-Column overview" style="margin-top:30px;height: 270px;">
                <div style="margin:20px 0px 0px 20px">
                   <span style="font-weight:blod;font-size:20px">Top 3 Popular Items</span>
                </div>
                <div style="display:flex;flex-direction:row;margin:20px 0px 0px 20px;justify-content:space-around;">
                    
                    <div v-for="(item, key,) in dishList" :key="key" style="display:flex;flex-direction:row; width: 260px;">
                        <div style="display:flex;flex-direction:row; width: 75px;justify-content: flex-end;">
                            <div style="display:flex;flex-direction:row; justify-content: center;align-items: center;width: 60px;height:60px;background-size:100% 100%;background-image:url(/static/five-pointed-star.png)">
                                <span style="font-size: 1.5em;">{{key+1}}</span>
                            </div>
                        </div>
                        <div style="display:flex;flex-direction:column; width: 150px;justify-content: flex-end;align-items: center;">
                            <img :src="item.pic_url" style="background-color: #E5E5E5;width: 150px;height: 90px;margin-top:55px;">
                            <span style="margin-top:15px;">{{item.name_en}}</span>
                        </div>
                    </div>
                    <!--
                    <div style="display:flex;flex-direction:row; width: 260px;">
                        <div style="display:flex;flex-direction:row; width: 75px;justify-content: flex-end;">
                            <div style="display:flex;flex-direction:row; justify-content: center;align-items: center;width: 60px;height:60px;background-size:100% 100%;background-image:url(/static/five-pointed-star.png)">
                                <span style="font-size: 1.5em;">2</span>
                            </div>
                        </div>
                        <div style="display:flex;flex-direction:column; width: 150px;justify-content: flex-end;align-items: center;">
                            <div style="background-color: #E5E5E5;width: 150px;height: 90px;margin-top:55px;"></div>
                            <span style="margin-top:15px;">Dish Name B</span>
                        </div>
                    </div>
                    <div style="display:flex;flex-direction:row; width: 260px;">
                        <div style="display:flex;flex-direction:row; width: 75px;justify-content: flex-end;">
                            <div style="display:flex;flex-direction:row; justify-content: center;align-items: center;width: 60px;height:60px;background-size:100% 100%;background-image:url(/static/five-pointed-star.png)">
                                <span style="font-size: 1.5em;">3</span>
                            </div>
                        </div>
                        <div style="display:flex;flex-direction:column; width: 150px;justify-content: flex-end;align-items: center;">
                            <div style="background-color: #E5E5E5;width: 150px;height: 90px;margin-top:55px;"></div>
                            <span style="margin-top:15px;">Dish Name C</span>
                        </div>
                    </div>
                    -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import {
        getDishList,
    } from '@/api/foodie'

    export default {
        name: 'Dashboard',
        computed: {
            ...mapGetters([
                'name',
                'role',
                'restaurant',
            ])
        },
        watch:{
            restaurant(newRestaurant, oldRestaurant){
                this.getDishes()
                this.params.query = "restaurant_id:"+this.restaurant.id
            },
        },
        data() {
            return {
                params: {
                    offset: 0,
                    limit: 3,
                    sortby: "id",
                    order: "asc",//"desc",
                    query: "",
                },
                dishList:[],
            }
        },
        created(){
            if(this.restaurant!=null){
                this.params.query = "restaurant_id:"+this.restaurant.id
                this.getDishes()
            }
        },
        methods:{
            getDishes(){
				getDishList(this.params).then(response => {
					const responseData = response.data;
                    const status = response.status;
                    console.log(responseData);
					if (status != 1) {
						const message = responseData.message;
						console.log(message);
					}else{
						const data = responseData;
                        this.dishList = data
                    }
				}).catch(error => {
					console.log(error);
                });
            }
        },
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .dashboard {
        &-container {
            margin: 30px;
        }

        &-text {
            font-size: 30px;
            line-height: 46px;
        }
    }
</style>
<style scoped>
.Grid-Row {
    display: flex;
    flex-direction:row;
}
.Grid-Column {
    display: flex;
    flex-direction: column;
}
.Grid-Title {
    width: 800px;
    display: flex;
    justify-content: center;
}
.overview {
    border-color: black;
    border-width: 20px;
    width: 800px;
    height: 200px;
    border:1px solid;
}
</style>
<style lang="less">
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
            height: 36px !important;
        }
    }
    .title {
        line-height: 0px;
    }
}
</style>