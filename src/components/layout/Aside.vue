<template>
  <el-menu
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router 
      :collapse="isCollapse"
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
import { mapGetters } from 'vuex';
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
                  label: "笔记",
                  icon: 'el-icon-position',
              },
              {
                  path: '/user',
                  label: '用户管理',
                  icon: 'el-icon-s-custom'
              },
              {
                path: '/resume',
                label: '简历',
                icon: 'el-icon-s-custom'
              },
              {
                  path: '/others',
                  label: '其它',
                  icon: 'el-icon-bell',
                  children: [
                      {
                          path: '/others/page1',
                          label: '浮浮沉沉',
                          icon: 'el-icon-heavy-rain'
                      },
                      {
                          path: '/others/page2',
                          label: '起起落落',
                          icon: 'el-icon-lightning'
                      }
                  ]
              }
          ]
      }
  },
  computed: {
    ...mapGetters(['isCollapse'])
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
