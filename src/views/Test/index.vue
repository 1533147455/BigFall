<template>
  <div class="test">
    <bar-chart/>
    <line-chart/>
    <pie-chart/>
  </div>
</template>

<script>
import LineChart from './LineChart.vue'
import BarChart from './BarChart.vue'
import PieChart from './PieChart.vue'
export default {
  components: {
    LineChart,
    BarChart,
    PieChart
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
//.test {
//  height: 100%;
//}
</style>