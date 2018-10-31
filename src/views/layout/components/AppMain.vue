<template>
    <section class="app-main">
        <transition name="fade" mode="out-in">
            <!-- <router-view :key="key"></router-view> -->
            <router-view />
        </transition>
        <div class="foot">Copyright © 2018-2018 LingLink,LLC. All Rights Reserved.</div>
    </section>
</template>

<script>
    export default {
        name: 'AppMain',
        computed: {
            // key() {
            //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
            // }
        }
    }

</script>

<style scoped>
    .app-main {
        /*50 = navbar  */
        min-height: calc(100vh - 50px);
        position: relative;
        overflow: hidden;
    }
    .foot{
        margin-top: 10px;
        margin-bottom: 0px;
        bottom:0;
        position:absolute;
        border-Top: solid 1px #e6e6e6;
        padding: 0 10px;
        width: 100%;
        font-size: .2em;
    }
</style>
