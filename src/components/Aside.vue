<template>
  <el-menu
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router 
      :collapse="this.$store.state.tab.isCollapse"
      >
    <template  v-for="item in items">
        <!-- 没有子菜单 -->
        <el-menu-item v-if="!item.children"
                      :key="item.label" 
                      :index="item.path">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <!-- 有子菜单 -->
        <el-submenu v-if="item.children" 
                    :key="item.label"
                    :index="item.path">
        <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item v-for="child in item.children" 
                :key="child.label"
                :index="child.path">
                <i :class="child.icon"></i>
                <span slot="title">{{ child.label }}</span>
            </el-menu-item>
        </el-submenu>
    </template>
   
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {     
                        path: '/',
                        label: "首页",
                        icon: 'el-icon-s-home'
                },
                {          
                    path: '/blog',
                    label: "博客",
                    icon: 'el-icon-video-play',
                },           
                {                  
                        path: '/user',
                        label: '用户管理',
                        icon: 'el-icon-user'
                },
                {
                    path: '/others',
                    label: '其它',
                    icon: 'el-icon-bell',
                    children: [
                        {
                            path: '/page1',
                            label: '笔记列表',
                            icon: 'el-icon-setting'
                        },
                        {                   
                            path: '/page2',
                            label: '写笔记',
                            icon: 'el-icon-setting'                  
                        }                
                    ]
                }           
            ]
        }
    }
}
    

</script>

<style lang="scss" scoped>
    .el-menu {
        height: 100%;
        border-right: none
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
