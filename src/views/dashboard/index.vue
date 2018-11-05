<template>
    <div class="dashboard-container">
        <!-- <div class="dashboard-text">name:{{ name }}</div>
        <div class="dashboard-text">role:<span>{{ role }}</span></div> -->
        <div class="Grid-Column">
            <div class="Grid-Column overview">
                <div style="margin:20px 0px 0px 20px">
                   <span style="font-weight:blod;font-size:20px">Overview</span>
                </div>
                <div class="Grid-Row" style="margin:20px 0px 0px 20px;justify-content:center">
                    <div style="display:felx;flex-direction:column;justify-content:space-between;width:150px;">
                        <div style="display:flex;justify-content:center;">0</div>
                        <div style="display:flex;justify-content:center;">Sales</div>
                    </div>
                    <div style="border:1px solid; width: 1px;height:50px"></div>
                    <div style="display:felx;flex-direction:column;justify-content:space-between;width:150px;">
                        <div style="display:flex;justify-content:center;">0</div>
                        <div style="display:flex;justify-content:center;">Orders</div>
                    </div>
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
                </div>
            </div>
            <div class="Grid-Column overview" style="margin-top:30px;">
                <div style="margin:20px 0px 0px 20px">
                   <span style="font-weight:blod;font-size:20px">Hot Dishes</span>
                </div>
                <div style="display:flex;flex-direction:column;margin:20px 0px 0px 20px;justify-content:center;">
                    <div style="display:flex;flex-direction:row;justify-content:center;">
                        <div style="display:flex;justify-content:flex-end;width:200px;">Set Menu</div>
                        <div style="margin-left:10px;border:1px solid; width: 1px;height:20px"></div>
                        <div style="display:flex;justify-content:center;width:400px;">Set A</div>
                    </div>
                    <div style="display:flex;flex-direction:row;justify-content:center;">
                        <div style="display:flex;justify-content:flex-end;width:200px;">Main Dish</div>
                        <div style="margin-left:10px;border:1px solid; width: 1px;height:20px"></div>
                        <div style="display:flex;justify-content:center;width:400px;">Beef</div>
                    </div>
                    
                    <div style="display:flex;flex-direction:row;justify-content:center;">
                        <div style="display:flex;flex-direction:row;justify-content:center;border:1px solid; width: 600px;height:1px"></div>
                    </div>
                    <div style="display:flex;flex-direction:row;justify-content:center;">
                        <div style="display:flex;justify-content:flex-end;width:200px;">Side</div>
                        <div style="margin-left:10px;border:1px solid; width: 1px;height:20px"></div>
                        <div style="display:flex;justify-content:center;width:400px;">Chips</div>
                    </div>
                    <div style="display:flex;flex-direction:row;justify-content:center;">
                        <div style="display:flex;justify-content:flex-end;width:200px;">Drink</div>
                        <div style="margin-left:10px;border:1px solid; width: 1px;height:20px"></div>
                        <div style="display:flex;justify-content:center;width:400px;">Coco-cola</div>
                    </div>
                    <div style="display:flex;flex-direction:row;justify-content:center;">
                        <div style="display:flex;flex-direction:row;justify-content:center;border:1px solid; width: 600px;height:1px"></div>
                    </div>
                    <div style="display:flex;flex-direction:row;justify-content:center;">
                        <div style="display:flex;justify-content:flex-end;width:200px;">Alcohol</div>
                        <div style="margin-left:10px;border:1px solid; width: 1px;height:20px"></div>
                        <div style="display:flex;justify-content:center;width:400px;">Spirit</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'

    export default {
        name: 'Dashboard',
        computed: {
            ...mapGetters([
                'name',
                'role'
            ])
        }
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
    width: 600px;
    display: flex;
    justify-content: center;
}
.overview {
    border-color: black;
    border-width: 20px;
    width: 800px;
    height: 200px;
    border:2px solid;
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