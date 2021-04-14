<template>
  <div class="header">
   <div class="left-content">
    <el-button type="primary" icon="el-icon-menu" size="small"
    @click="isCollapse"></el-button>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item  v-for="item in breadList" :key="item.path">
        {{ item.meta.title }}
        </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <el-dropdown @command="handleCommand">
    <img :src="userImg" class="user">
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="drawer">查看日历</el-dropdown-item>
      <el-dropdown-item command="exit">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  <el-drawer
      :with-header="false"
      :visible.sync="visible">
    <el-calendar/>
  </el-drawer>
 </div>
    
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
      return {
        visible: false,
        breadList: [],
        userImg: require('../../assets/images/user.jpg'),
        weatherData: []
      }
    },
    watch: {
      $route() {
        this.getBreadList()
      }
    },
    methods: {
      ...mapMutations(['isCollapse','clearToken']),
       getBreadList() {
        let matched = this.$route.matched.filter(item => item.meta.title)
         this.breadList = matched
      },
      handleCommand(command) {
        switch (command) {
          case 'drawer':
            this.visible = true;
            break;
          case 'exit':
            this.clearToken();
            location.reload();
            break;
        }
      },
    },
    created() {
      this.getBreadList(); // 刷新后保持面包屑
    }
}

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 100%;
  justify-content: space-between;
}
.left-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
 
}
.el-dropdown {
  display: flex;
  align-items: center;
  .user {
    width: 40px;
    border-radius: 50%;
  }
}


</style>