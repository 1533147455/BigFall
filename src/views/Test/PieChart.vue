
<template>
<el-card class="box-card" style="height: 440px;width: 940px">
  <div class="text item" ref="lineChartDom" style="height: 400px;width: 900px"></div>
</el-card>
</template>
<script>
  export default {
    data() {
      return {
       
      }
    },
    methods: {
      initChart() {
        this.$echarts.init(this.$refs.lineChartDom).setOption({
          tooltip: {},
          legend: {
              top: '5%',
              left: '5%',
              orient: 'vertical',
              selectedMode: false
          },
          series: [
              {
                  type: 'pie',
                  center: ['60%', '50%'],
                  radius: ['20%', '50%'],
                  label: {
                      formatter: '{b}：{d}%',
                      fontSize: '20',
                      fontWeight: 'bold',
                      color: '#8c8c8c'
                  },
                  data: [
                      {value: 1048, name: '搜索引擎'},
                      {value: 735, name: '直接访问'},
                      {value: 580, name: '邮件营销'},
                      {value: 484, name: '联盟广告'},
                      {value: 300, name: '视频广告'}
                  ]
              }
          ]
        })
      }
    },
    mounted() {
      this.initChart()
    }
  }
</script>