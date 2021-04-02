<template>
    <div class="common-table">
      <el-table
          :data="tableData"
          :height="height"
          style="width: 100%"
          v-loading="config.loading">
        <el-table-column
            label="序号"
            width="85"
            align="center">
          <template slot-scope="scope">
            <span>{{ (config.currentPage - 1) * 20 + scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
            v-for="item in tableColumns"
            :key="item.prop"
            v-bind="item">
          <template slot-scope="scope">
            <slot :name="item.slotName" :row="scope.row">{{ scope.row[item.prop] }}</slot>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          :current-page.sync="config.currentPage"
          :page-size.sync="config.pageSize"
          :page-sizes="[10, 20, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="config.total"
          @size-change="pageSizeChange"
          @current-change="currentPageChange"
          hideOnSinglePage>
      </el-pagination>
    </div>
</template>

<script>
export default {
  props: {
    tableData: Array,
    tableColumns: Array,
    config: Object,
    height: Number,
  },
  data() {
    return {
      pageSize: 10
    }
  },
  methods: {
    pageSizeChange  (pageSize) {
      this.$emit('pageSizeChange', pageSize);
    },
    currentPageChange (currentPage) {
      this.$emit('currentPageChange', currentPage);
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