<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <the-aside></the-aside>
    </el-aside>
    <el-container>
      <el-header height="80px">
        <the-header></the-header>
      </el-header>
      <el-main style="overflow: hidden;">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue'
import TheAside from '../components/layout/TheAside.vue'

export default {
    components: {
      TheHeader,
      TheAside
    }
}
</script>

<style lang="scss" scoped>

.el-header {
    background-color: #e7f2f9;
    color: #333;
}

  
</style>