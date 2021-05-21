<template>
  <div class="common-table">
    <div v-if="showColumnsControl">
      <el-popover
          v-model="columnsControl"
          placement="bottom-start"
          width="400"
          trigger="manual">
          <el-checkbox-group v-model="checkedTableColumns" @change="checkedTableColumnsChange">
            <el-checkbox v-for="item in tableColumns" :key="item.prop" :label="item.label"></el-checkbox>
          </el-checkbox-group>
          <div class="popover-footer">
            <el-button @click="columnsControl = false">取消</el-button>
            <el-button @click="confirm" type="primary">确认</el-button>
          </div>
        <el-button slot="reference" icon="el-icon-setting" @click="columnsControl = !columnsControl">
        </el-button>
      </el-popover>
    </div>
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
      <template v-for="item in tableColumns">
        <el-table-column
            v-if="item.showColumn"
            :key="item.prop"
            v-bind="item"
            showOverflowTooltip>
          <template slot-scope="scope">
            <slot :name="item.slotName" :row="scope.row">{{ scope.row[item.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
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
      @current-change="currentPageChange"/>
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
    isSimpleQuery: Boolean, // 是否是简单查询
    showColumnsControl: Boolean // 动态增删列
  },

  data() {
    return {
      loading: false,
      params: {}, // 查询参数
      currentPage: 0,
      pageSize: 10,
      total: 0,
      tableData: [],
      checkedTableColumns: [], // 选中要显示的列
      columnsControl: false, // 显示控制动态表格的面板
    }
  },

  created() {
    this.getTableData();
    this.checkedTableColumns = this.tableColumns?.map((item) => {
      this.$set(item, 'showColumn', true)
      return item.label
    });
  },

  methods: {
    async getTableData () {
      this.loading = true;
      const { currentPage, pageSize } = this;
      this.params = this.isSimpleQuery ? {
        ...this.simpleQuery
      } : {
        ...this.complexQuery
      };
      this.params.pageDTO = {
        currentPage,
        pageSize
      };
      await this.tableApi().then(res => {
        this.tableData = res?.data || [];
        this.total = res?.data.length;
        if (this.provideTableData) {
          this.provideTableData(this.tableData);
          this.$nextTick(() => {
            this.$refs.tableDom.doLayout();
          });
        }
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        this.loading = false;
      })
    },

    checkedTableColumnsChange (value) {
      this.tableColumns?.map((item) => {
        if (value.includes(item.label)) {
          this.$set(item, 'showColumn', true);
        } else {
          this.$set(item, 'showColumn', false);
        }
      });
      this.$nextTick(() => {
        this.$refs.tableDom.doLayout()
      });
    },

    confirm () {
      this.columnsControl = false

    },

    pageSizeChange (pageSize) {
      this.pageSize = pageSize;
      this.currentPage = 0;
      this.getTableData();
    },

    currentPageChange (currentPage) {
      this.currentPage = currentPage;
      this.getTableData();
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
