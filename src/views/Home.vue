<template>
      <el-row class="home" :gutter="20">
        <el-col id="home-left" :span="8">
          <el-card shadow="hover"  style="margin-bottom:20px">
            <div class="user-info">
              <img :src="userImg">
              <p class="user-name">灯火可亲</p>
              <p class="user-access">Love the process，not the goal.</p>
              <div id="login-container">
                <div class="login-info">
                  <p>上次登陆时间：<span>{{ new Date().toLocaleDateString('cn',{hour12:false}) }}</span></p>
                  <p>上次登录地点：<span>广州</span></p>
                </div> 
              </div>    
            </div>
          </el-card>
          <el-card shadow="hover" id="left-bottom" body-style="height: 425px">
            <div style="height: 100%" ref="echarts" :v-loding="loading" id="skill-echarts">
            </div>
<!--            <echart :chartData="echartsData.order" :v-loading="loading"></echart>-->
          </el-card>
        </el-col>
        <el-col id="home-right" :span="16">
            <div class="right-top">
                <el-card shadow="hover" v-for="item in rightTopData" :key="item.name">
                  <i class="icon" :class="item.icon" :style="{background:item.color}"></i>
                  <div class="detail">
                    <el-link :underline="false" :href="item.url" target="_blank">{{ item.name }}</el-link>
                  </div>
              </el-card>
            </div>
          <div class="right-middle">
            <el-card shadow="hover" body-style="height: 529px" >
              <common-table
                  ref="tableDom"
                  :height="530"
                  :table-api="tableApi"
                  :tableColumns="tableColumns"
                  :show-pagination="false">
                <template #operate="{row}">
                  <el-button @click="canm(row.id)" type="text" size="medium">查看</el-button>
                  <el-button type="text" size="medium">编辑</el-button>
                </template>
              </common-table>
            </el-card>
          </div>
        </el-col>
      </el-row>
</template>

<script>
// import echarts from 'echarts'
// import Echarts from '../components/common/EChart'
import CommonTable from '../components/common/CommonTable'
import HomeApi from "@/api/home";
export default {
  components: {
    // Echart,
    CommonTable
  },
  data() {
    return {
      loading: true,
      tableApi: HomeApi.getBookTable.bind(HomeApi),
      userImg: require('../assets/images/user.jpg'),
      rightTopData: [
        { name: 'Vue2',url: 'https://vuejs.bootcss.com/guide/',icon: 'el-icon-star-on',color: '#409eff' },
        { name: 'Vue3',url: 'https://vue3js.cn/',icon: 'el-icon-star-on',color: '#409eff' },
        { name: 'Element UI',url: 'https://element.eleme.cn/#/zh-CN/component/installation',icon: 'el-icon-star-on',color: '#409eff' },
        { name: 'MDN',url: 'https://developer.mozilla.org/zh-CN/docs/Web',icon: 'el-icon-star-on',color: '#409eff' },
        { name: '点赞量：',url: 'https://developer.mozilla.org/zh-CN/docs/Web',icon: 'el-icon-star-on',color: '#409eff' },
        { name: '评论量：',url: 'https://developer.mozilla.org/zh-CN/docs/Web',icon: 'el-icon-star-on',color: '#409eff' },
      ],
      tableData: [],
      tableColumns: [
        { prop: 'id', label: '编号', width: '55px', align: 'center' },
        { prop: 'name', label: '书名' },
        { prop: 'author', label: '作者' },
        { prop: 'price', label: '价格' }
      ],
      echartsData: {
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
    // getEchartsData() {
    //   this.$http.get('/home/getData').then(res => {
    //       res = res.data
    //       const order = res.data.orderData
    //       this.echartsData.order.xData = order.date
    //       let keyArray = Object.keys(order.data[0])
    //       keyArray.forEach(key => {
    //         this.echartsData.order.series.push({
    //           name: key === 'wechat'?'小程序':key,
    //           data: order.data.map(item => item[key]),
    //           type: 'line'
    //         })
    //       })
    //       this.loading = false;
    //     })
    // }
    getEchartsData() {
      debugger;
      const skillEcharts = this.$echarts.init(document.getElementById('skill-echarts'));
        skillEcharts.setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                {value: 246, name: 'HTML5'},
                {value: 246, name: 'CSS3'},
                {value: 680, name: 'JavaScript'},
                {value: 384, name: 'ES6'},
                {value: 1048, name: 'Vue'},
                {value: 300, name: '其它'},
              ]
            }
          ]
        });
        this.loading = false;
    }
  },
  created() {
    this.$nextTick(() => {
      this.$refs.tableDom.getData();
    })
  },
  mounted() {
    this.getEchartsData();
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/home.scss';
</style>