<template>
      <el-row class="home" :gutter="20">
        <el-col id="home-left" :span="8">
          <el-card shadow="hover"  style="margin-bottom:20px">
            <div class="user-info">
              <img :src="require('../assets/images/user.jpg')">
              <p class="user-name">灯火可亲</p>
              <p class="user-access">Love the process，not the goal.</p>
              <div id="login-container">
                <div class="login-info">
                  <p>最近登陆时间：<span>{{ new Date().toLocaleDateString('cn',{hour12:false}) }}</span></p>
                  <p>最近登录地点：<span>广州</span></p>
                </div> 
              </div>    
            </div>
          </el-card>
          <el-card shadow="hover" id="left-bottom" body-style="height: 425px">
            <div style="height: 100%" ref="echarts" :v-loding="loading" id="skill-echarts">
            </div>
          </el-card>
        </el-col>
        <el-col id="home-right" :span="16">
          <el-card class="box-card" style="margin-bottom: 20px;height: 250px">
            <div slot="header" class="clearfix">
              <span>技术社区</span>
            </div>
            <div class="right-top">
              <el-card v-for="item in rightTopData" :key="item.name" shadow="never">
                <img :src="item.src">
                <div class="detail">
                  <el-link :underline="false" :href="item.url" target="_blank">{{ item.name }}</el-link>
                </div>
              </el-card>
            </div>
          </el-card>
          <div class="right-middle">
            <el-card shadow="hover" body-style="height: 466px;padding:10px 20px" >
              <div slot="header" class="clearfix">
                <span>资料文档</span>
              </div>
              <base-table
                  ref="tableDom"
                  :height="461"
                  :table-api="tableApi"
                  :tableColumns="tableColumns"
                  :show-header="false"
                  :show-pagination="false">
                <template #url="{ row }">
                  <el-link :href="row.url" target="_blank" :underline="false">{{ row.name }}</el-link>
                </template>
                <template #urlRight="{ row }">
                  <el-link :href="row.urlRight" target="_blank" :underline="false">{{ row.nameRight }}</el-link>
                </template>
              </base-table>
            </el-card>
          </div>
        </el-col>
      </el-row>
</template>

<script>
import BaseTable from '../components/common/BaseTable'
import HomeApi from "@/api/home";
export default {
  components: {
    BaseTable
  },
  data() {
    return {
      loading: true,
      tableApi: HomeApi.getResource.bind(HomeApi),
      rightTopData: [
        { name: '掘金',url: 'https://juejin.cn/', src: require('../assets/images/home/juejin.png') },
        { name: 'SF思否',url: 'https://segmentfault.com/', src: require('../assets/images/home/sf.png') },
        { name: '菜鸟教程',url: 'https://www.runoob.com/', src: require('../assets/images/home/cn.png') },
        { name: 'W3school',url: 'https://www.w3school.com.cn/', src: require('../assets/images/home/w3.png') },
        { name: '慕课网',url: 'https://www.imooc.com/', src: require('../assets/images/home/imooc.png') },
        { name: '简书',url: 'https://www.jianshu.com/p/a7550c0e164f', src: require('../assets/images/home/jian.png') },
        { name: 'CSDN',url: 'https://www.csdn.net/', src: require('../assets/images/home/csdn.png') },
        { name: '51CTO',url: 'https://www.51cto.com/', src: require('../assets/images/home/51.png') }
      ],
      tableData: [],
      tableColumns: [
        { prop: 'category', label: '分类', align: 'center', width: '100px' },
        { prop: 'name', label: '官方文档', slotName: 'url', align: 'center' },
        { prop: 'categoryRight', label: '分类', align: 'center', width: '100px' },
        { prop: 'nameRight', label: '官方文档', slotName: 'urlRight', align: 'center' }
      ]
    }
  },
  methods: {
    getEchartsData() {
      const skillEcharts = this.$echarts.init(document.getElementById('skill-echarts'));
        skillEcharts.setOption({
          title: {
            text: '结构分布图',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          series: [
            {
              type: 'pie',
              radius: ['40%', '70%'],
              data: [
                {value: 78, name: 'HTML'},
                {value: 102, name: 'CSS'},
                {value: 196, name: 'JavaScript'},
                {value: 70, name: 'ES6'},
                {value: 360, name: 'Vue'},
                {value: 114, name: '其它'},
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