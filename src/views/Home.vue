<template>
      <el-row class="home"  :gutter="20">
        <!-- 左边显示用户信息 -->
        <el-col id="home-left" :span="8">
          <el-card shadow="hover"  style="margin-bottom:20px">
            <div class="user-info">
              <img :src="userImg">
              <p class="user-name">大秋</p>
              <p class="user-access">管理员</p>
              <div id="login-container">
                <div class="login-info">
                  <p>上次登陆时间：<span>2020/11/17</span></p>
                  <p>上次登录地点： <span>广州</span></p>
                </div> 
              </div>    
            </div>
          </el-card>
          <el-card shadow="hover" id="left-bottom">
              <el-table :data="tableData">
                <el-table-column show-overflow-tooltip align="center"
                  v-for="(val,key) in tableLabel" 
                  :key="key" :prop="key" 
                  :label="val">
                </el-table-column>
              </el-table>
          </el-card>
        </el-col>
        <!-- 右边显示数据 -->
        <el-col id="home-right" :span="16">
            <div class="right-top">
                <el-card shadow="hover" v-for="item in rightTopData" :key="item.name">
                  <i class="icon" :class="item.icon" :style="{background:item.color}"></i>
                  <div class="detail">
                    {{ item.name }}{{ item.value }}
                  </div>
              </el-card>
            </div>
          <!-- ECharts组件展示 -->
          <div class="right-middle">
            <el-card id="home-echart" shadow="hover"  body-style="height: 320px" >
              <echart :chartData="echartData.order" :v-loading="loading"></echart>
          </el-card>
          </div>
          <!-- 用户活跃图表 -->
          <div class="right-bottom">
              <el-card shadow="hover">
                <echart></echart>
              </el-card>
              <el-card shadow="hover">
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
      loading: true,
      userImg: require('../assets/images/user.jpg'),
      rightTopData: [
        { name: '文章数：',value: '12',icon: 'el-icon-star-on',color: '#409eff' },
        { name: '关注数：',value: '3',icon: 'el-icon-star-on',color: '#409eff' },
        { name: '粉丝数：',value: '120',icon: 'el-icon-star-on',color: '#409eff' },
        { name: '阅读量：',value: '1721',icon: 'el-icon-star-on',color: '#409eff' },
        { name: '点赞量：',value: '432',icon: 'el-icon-star-on',color: '#409eff' },
        { name: '评论量：',value: '843',icon: 'el-icon-star-on',color: '#409eff' },
      ],
      tableData: [],
      tableLabel: {
        id: '编号',
        name: '书名',
        author: '作者',
        price: '价格',
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
        const order = res.data.orderData
        this.echartData.order.xData = order.date
        let keyArray = Object.keys(order.data[0])
        keyArray.forEach(key => {
          this.echartData.order.series.push({
            name: key === 'wechat'?'小程序':key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })
        this.loading = "false"
      })
    }
  },
  created() {
    this.getTableData();
    const _this = this;
    _this.$http.get('http://localhost:8181/booklist/findAll').then((res) => {
        console.log(res);
        _this.tableData = res.data;
        
    }) 
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/home.scss';
</style>