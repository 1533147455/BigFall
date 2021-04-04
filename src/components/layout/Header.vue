<template>
 <header>
   <div class="left-content">
    <el-button type="primary" icon="el-icon-menu" size="small"
    @click="isCollapse()"></el-button>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item  v-for="bread in breadList" :key="bread.name">
        {{ bread.meta.title }}
        </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="right-content">
    <el-dropdown trigger="click"> 
        <img :src="userImg" class="user">
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click.native="exit">退出</el-dropdown-item>   
      </el-dropdown-menu>
    </el-dropdown>
  </div>
 </header>
    
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
      return {
        breadList: [],
        userImg: require('../../assets/images/user.jpg')
      }
    },
    watch: {
      $route() {
        this.getBreadList()
      }
    },
    methods: {
      ...mapMutations(['isCollapse','clearToken','clearMenu']),
       getBreadList() {
        let matched = this.$route.matched.filter(item => item.meta.title)      
         this.breadList = matched
      },
      exit() {
        this.clearToken()
        this.clearMenu()
        location.reload()
      }
    },
  created() {
    this.getBreadList() // 刷新后保持面包屑
  }
}

</script>

<style lang="scss" scoped>
header {
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

.right-content {
  
  .el-dropdown {
    height: 100%;
    display: flex;
    align-items: center;
    .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;    
    }
  }
  
  
}

</style>