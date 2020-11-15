<template>
  <div style="height: 100%" ref="echart">
      echart
  </div>
</template>

<script>
import echart from 'echarts'
import { mapState } from 'vuex'
export default {
    props: {
        chartData: {
            type: Object,
            default() {
                return {
                    xData: [],
                    series: []
                }
            }
        },
        isAxisChart: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        ...mapState(['isCollapse']),
        options() {
            return this.isAxisChart?this.axisOption : this.normalOption
        }
        
    },
    watch: {
        chartData: {
            handler: function() {
                this.initChart()
            },
            deep: true
        },
        isCollapse() {
            setTimeout(() => {
                this.resizeChart()
            },300)
        }
    },
    data() {
        return {
            echart: null,
            //  有坐标轴的配置
            axisOption: {
                xAxis: 
                {
                    type: 'category',
                    data: []
                },
              yAxis: [
                {
                    type: 'value'
                }
              ],
              series: []
            },
            //  没有坐标轴的配置
            normalOption: {
                series: []
            }
        }
    },
    methods: {
        initChart() {
            this.initChartData()
            if (this.echart) {
                this.echart.setOption(this.options)
            } else {
                this.echart = echart.init(this.$refs.echart)
                this.echart.setOption(this.options)                
            }
        },
        initChartData() {
            if (this.isAxisChart) {
                this.axisOption.xAxis.data = this.chartData.xData
                this.axisOption.series = this.chartData.series
            } else {
                this.normalOption .series = this.chartData.series
            }
        },
        resizeChart() {
            this.echart ? this.echart.resize() : ''
        }
    },
    mounted() {
        window.addEventListener('resize',this.resizeChart)
    },
    destroyed() {
        window.removeEventListener('resize',this.resizeChart)
    }
}
</script>

<style lang="scss" scoped>

</style>