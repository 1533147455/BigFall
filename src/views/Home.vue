<template>
      <el-row class="home"  :gutter="20">
        <!-- 左边显示用户信息 -->
        <el-col :span="8">
          <el-card shadow="hover"  style="margin-bottom:20px">
            <div class="user">
              <img :src="userImg">
              <div class="user-info">
                <p class="name">Nick</p>
                <p class="access">超级管理员</p>
              </div>
            </div>
            <div class="login-info">
              <p>上次登陆时间：<span>2020/10/19</span></p>
              <p>上次登录地点：<span>广州</span></p>
            </div>
          </el-card>
          <el-card shadow="hover" body-style="height: 460px">
              <el-table :data="tableData">
                <el-table-column show-overflow-tooltip
                v-for="(val,key) in tableLabel" 
                :key="key" :prop="key" 
                :label="val"></el-table-column>
              </el-table>
          </el-card>
        </el-col>
        <!-- 右边显示数据 -->
        <el-col :span="16">
            <!-- 今日支付订单 -->
            <div class="right-top">
                <el-card shadow="hover" v-for="item in countData" :key="item.name">
                  <i class="icon" :class="item.icon" :style="{background:item.color}"></i>
                  <div class="detail">
                    {{ item.name }}人数：{{ item.value }}
                  </div>
              </el-card>
            </div>
          <!-- 课程购买图表 -->
          <el-card shadow="hover" body-style="height: 320px">
              <echart :chartData="echartData.order"></echart>
          </el-card>
          <!-- 用户活跃图表 -->
          <div class="right-bottom">
              <el-card shadow="hover" body-style="height: 300px">
                <echart></echart>
              </el-card>
              <el-card shadow="hover" body-style="height: 300px">
                <echart></echart>
              </el-card>
              </div>
            
        </el-col>
      </el-row>
</template>

<script>
import Echart from '../components/EChart'
export default {
  components: {
    Echart
  },
  data() {
    return {
      userImg: require('../assets/images/user.jpg'),
      countData: [
        { name: '今日浏览',value: '1234',icon: 'el-icon-star-on',color: '#409eff' },
        { name: '今日收藏',value: '123',icon: 'el-icon-star-on',color: '#409eff' },
        { name: '今日支付',value: '12',icon: 'el-icon-star-on',color: '#409eff' },
        { name: '昨日浏览',value: '4321',icon: 'el-icon-star-on',color: '#409eff' },
        { name: '昨日收藏',value: '432',icon: 'el-icon-star-on',color: '#409eff' },
        { name: '昨日支付',value: '43',icon: 'el-icon-star-on',color: '#409eff' },
      ],
      tableData: [],
      tableLabel: {
        name: '课程名',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {
          series: []
        }
      }
    }
  },
  methods: {
    getTableData() {
    this.$http.get('/home/getData').then(res => {
        res = res.data
        this.tableData = res.data.tableData
        // 订单折线图
        const order = res.data.orderData
        this.echartData.order.xData = order.data
        // 第一步：取出series中的name部分-->键名
        let keyArray = Object.keys(order.data[0])
        keyArray.forEach(key => {
          this.echartData.order.series.push({
            name: key === 'wechat'?'小程序':key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })
      })
    }
  },
  created() {
    this.getTableData()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/home.scss'
</style>