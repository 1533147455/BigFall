<template>
  <div class="manage">
    <div class="manage-header">
      <query-form :form-items="formItems" :form="form" inline>
        <template #button>
          <el-button type="primary">添加用户</el-button>
          <el-button type="primary" @click="openDialog">批量删除</el-button>
        </template>
      </query-form>
      <common-dialog ref="dialogDom" v-bind="dialogConfig"></common-dialog>
    </div>
    <div class="manage-content">
      <common-table
        :height="658"
        :tableData="tableData"
        :tableColumns="tableColumns"
        :config="config"
        @pageSizeChange="getTableData"
        @currentPageChange="getTableData">
        <template #operate="{row}">
          <el-button @click="canm(row.id)" type="text" size="medium">查看</el-button>
          <el-button type="text" size="medium">编辑</el-button>
        </template>
      </common-table>
    </div>
  </div>
</template>

<script>
import CommonTable from '../components/common/Table'
import CommonDialog from '../components/common/Dialog'
import QueryForm from "@/components/common/QueryForm";
export default {
  components: {
    QueryForm,
    CommonTable,
    CommonDialog
  },
  data() {
    return {
      form: {},
      formItems: [
        {
          inputType: 'RemoteInput',
          formKey: 'name',
          label: '姓名',
        },
        {
          inputType: 'RemoteSelect',
          staticOptions: [
            { label: '鸡蛋', value: 'egg' },
            { label: '牛奶', value: 'milk' },
            { label: '面包', value: 'bread' }
          ],
          formKey: 'food',
          label: '大哥大'
        }
      ],
      visible: false,
      dialogConfig: {
        title: '操作记录',
        width: '432px',
        certain: this.closeDialog
      },
      tableData: [],
      tableColumns: [
        { prop: 'name', label: '姓名' },
        { prop: 'age', label: '年龄' },
        { prop: 'sexLabel', label: '性别' },
        { prop: 'birth', label: '出生日期' },
        { prop: 'addr', label: '地址' },
        { prop: 'operate', label: '操作', slotName: 'operate',width: "150" }
      ],
      config: { currentPage: 1, pageSize: 10, loading: false }
    }
  },
  methods: {
    getTableData() {
      this.config.loading = true
      this.$http.get('/user/getUser', {
        params: {
          currentPage: this.config.currentPage,
          pageSize: this.config.pageSize
        }
      }).then(res => {
        this.tableData = res.data.list.map(item => {
          item.sexLabel = item.sex === 0 ? '女' : '男'
          return item
        })
        this.config.total = res.data.total
        this.config.loading = false
      })
    },
    canm () {
      console.log('sada')
    },
    openDialog() {
      this.$refs.dialogDom.init();
    },
    closeDialog() {
      this.visible = false;
    }
  },
  created() {
    this.getTableData()
    }
  }

</script>

<style lang="scss" scoped>
@import '~@/assets/scss/common.scss';
</style>