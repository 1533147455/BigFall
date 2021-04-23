
<template>
<el-card class="box-card" style="height: 440px;width: 940px">
  <div class="text item" ref="lineChartDom" style="height: 400px;width: 900px" v-loading="loading"></div>
</el-card>
</template>
<script>
  export default {
    data() {
      return {
        loading: false
      }
    },
    methods: {
      initChart() {
        this.loading = true;
        setTimeout(() => {
          this.$echarts.init(this.$refs.lineChartDom).setOption({
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
            }]
          })
          this.loading = false
        }, 2000)
      }
    },
    mounted() {
      this.initChart()
    }
  }
</script>