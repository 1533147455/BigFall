<template>
<div class="common-table">
  <el-table
    :data="tableData"
    :height="height"
    style="width: 100%" 
    :v-loading="config.loading">
      <el-table-column
        label="序号"
        width="85"
        align="center">
      <template slot-scope="scope">
        <span>{{ (config.page - 1) * 20 + scope.$index + 1 }}</span>
      </template>
    </el-table-column>
    <el-table-column 
      v-for="item in tableLabel"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label">
      <template slot-scope="scope">
        <span>{{ scope.row[item.prop] }}</span>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      :current-page.sync="config.page"
      :page-size="10"
      :page-sizes="[10, 20, 50, 100]"
      layout="jumper, prev, pager, next, sizes"
      :total="config.total"
      @current-change="currentPageChange">
  </el-pagination>
</div>
    
</template>

<script>
export default {
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
    height: Number,
  },
  methods: {
    currentPageChange (page) {
      this.$emit('currentPageChange', page);
    }
  }
}
</script>

<style lang="scss" scoped>
.el-pagination {
  text-align: right;
  margin: 20px;
}
</style>