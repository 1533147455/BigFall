<template>
    <el-container style="height: 100%">
        <el-aside width="auto">
            <common-aside></common-aside>
        </el-aside>
        <el-container>
            <el-header style="height:80px">
                <common-header></common-header>
            </el-header>
            <el-main><router-view/></el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonHeader from '../components/Header.vue'
import CommonAside from '../components/Aside.vue'

export default {
    components: {
        CommonHeader,
        CommonAside
    }
}
</script>

<style lang="scss" scoped>

.el-header {
    background-color: #B3C0D1;
    color: #333;
}
  
</style>