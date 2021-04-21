<template>
  <div class="test">
    <div class="line-chart"/>
    <echarts :chartData="echartsData.order" :v-loading="loading" style="height: 400px"></echarts>
    <echarts :chartData="echartsData.barChart" :v-loading="loading" style="height: 400px"></echarts>

  </div>
</template>

<script>
import Echarts from '../../components/common/EChart'
export default {
  components: {
    Echarts
  },
  data() {
    return {
      lineChartData: [],
      loading: false,
      echartsData: {
        order: {
          xData: [],
          series: []
        },
        barChart: {
          xData: [],
          series: [
            {
              data: []
            }
          ]
        },
        video: {
          series: []
        }
      }
    }
  },
  methods: {
    getLineChartData() {
      this.loading = true
      this.$http.get('/test/lineChart').then(res => {
        res = res.data
        const order = res.data.lineChart
        this.echartsData.order.xData = order.date
        let keyArray = Object.keys(order.data[0])
        keyArray.forEach(key => {
          this.echartsData.order.series.push({
            name: key === 'wechat'?'小程序':key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })
        console.log(res)
        // const barChart = res.data.barChart
        // barChart.map(key => {
        //   this.echartsData.barChart.xData.push(key.date)
        //   this.echartsData.barChart.series.push({
        //     data: key.active,
        //     type: 'bar'
        //   })
        // })
        this.loading = false
      })
    }
  },
  created() {
    this.getLineChartData();
  }
}
</script>

<style lang="scss" scoped>
//.test {
//  height: 100%;
//}
</style>