<template>
    <div class="app-container">
        <!--
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Activity name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select v-model="form.region" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-col :span="11">
                    <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
                </el-col>
                <el-col :span="2" class="line">-</el-col>
                <el-col :span="11">
                    <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" />
                </el-col>
            </el-form-item>
            <el-form-item label="Instant delivery">
                <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="Online activities" name="type" />
                    <el-checkbox label="Promotion activities" name="type" />
                    <el-checkbox label="Offline activities" name="type" />
                    <el-checkbox label="Simple brand exposure" name="type" />
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
                <el-radio-group v-model="form.resource">
                    <el-radio label="Sponsor" />
                    <el-radio label="Venue" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
                <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button @click="onCancel">Cancel</el-button>
            </el-form-item>
        </el-form>
        -->
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
    export default {
        data() {
            return {
                form: {
                    name: "",
                    region: "",
                    date1: "",
                    date2: "",
                    delivery: false,
                    type: [],
                    resource: "",
                    desc: ""
                }
            };
        },
        methods: {
            onSubmit() {
                this.$message("submit!");
            },
            onCancel() {
                this.$message({
                    message: "cancel!",
                    type: "warning"
                });
            }
        }
    };

</script>

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
        }
    }
    .title {
        line-height: 0px;
    }
}
</style>
