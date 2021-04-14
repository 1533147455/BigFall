<template>
  <div class="manage">
    <base-table
      ref="tableDom"
      :height="658"
      :table-api="tableApi"
      :tableColumns="tableColumns">
      <template #operate="{row}">
        <el-button @click="canm(row.id)" type="text" size="medium">查看</el-button>
        <el-button type="text" size="medium">编辑</el-button>
      </template>
    </base-table>
  </div>
</template>

<script>
import BaseTable from '../components/common/BaseTable'
import HomeApi from "@/api/home";
export default {
  components: {
    BaseTable,
  },
  data() {
    return {
      tableApi: HomeApi.getUserTable.bind(HomeApi),
      tableColumns: [
        { prop: 'id', label: '序号', width: '110px', align: 'center' },
        { prop: 'content', label: '待办事项' },
        { prop: 'time', label: '时间' },
        { prop: 'status', label: '状态' }
      ]
    }
  },
  methods: {
  },
  created() {
  }
}

</script>

<style lang="scss" scoped>
@import '~@/assets/scss/common.scss';
</style>