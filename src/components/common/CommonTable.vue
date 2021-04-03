<template>
  <div class="common-table">
    <el-table
      ref="tableDom"
      v-loading="loading"
      :data="tableData"
      style="margin-bottom: 10px;"
      v-bind="$attrs"
      v-on="$listeners"
      highlight-current-row
      border
      tooltip-effect="light">
      <el-table-column
        v-if="showSelection"
        type="selection"
        width="55px">
      </el-table-column>
      <el-table-column
          v-for="item in tableColumns"
          :key="item.key"
          v-bind="item"
          v-on="$listeners"
          showOverflowTooltip>
        <template slot-scope="scope">
          <slot :name="item.slotName" :row="scope.row">{{ scope.row[item.prop] }}</slot>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="showPagination"
      :current-page="currentPage + 1"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      style="text-align:right;"
      @size-change="pageSizeChange"
      @current-change="currentPageChange"
      hideOnSinglePage/>
  </div>
</template>

<script>
export default {
  props: {
    tableColumns: Array,
    showSelection: Boolean, // 表格是否显示多选框
    showPagination: {
      type: Boolean,
      default: true
    }, // 是否显示分页
    provideTableData: Function, // 提供列表数据，父组件可能会用到
    tableApi: Function, // 列表api
    totalApi: Function, // 合计api
    selectionChange: Function, // 当表格的当前行发生变化的时候会触发该事件
    simpleQuery: Object, // 简单查询表单
    complexQuery: Object, // 复杂查询表单
    isSimpleQuery: Boolean // 是否是简单查询
  },

  data() {
    return {
      loading: false,
      currentPage: 0,
      pageSize: 10,
      total: 0,
      tableData: [],
      totalRowMap: new Map(), // 合计显示字段
      multipleSelection: []
    }
  },

  // created() {
  //   this.getData();
  // },
  methods: {
    async getData () {
      this.loading = true;
      // const { currentPage, pageSize } = this;
      // const params = this.isSimpleQuery ? {
      //   ...this.simpleQuery
      // } : {
      //   ...this.complexQuery
      // };
      // const params = {
      //   currentPage,
      //   pageSize
      // };
      // const res = await this.tableApi();
      //  this.tableData = res?.data || [];
      //  this.total = res?.data.length;
      //  if (this.provideTableData) {
      //    this.provideTableData(res?.data);
      //  }
      //  console.log('tableData', res);
      this.tableApi().then(res => {
        this.tableData = res?.data || [];
        this.total = res?.data.length;
        if (this.provideTableData) {
             this.provideTableData(res?.data);
           }
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        this.loading = false;
      })


      // this.$nextTick(() => {
      //   this.$refs.tableDom.doLayout();
      // });


    },

    pageSizeChange (pageSize) {
      this.pageSize = pageSize;
      this.currentPage = 0;
      this.getData();
    },

    currentPageChange (currentPage) {
      this.currentPage = currentPage;
      this.getData();
    },
  }
}
</script>

<style lang="scss" scoped>
.el-pagination {
  text-align: right;
  margin: 20px;
}
</style>
