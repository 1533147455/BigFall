<template>
  <div class="page-one">
    <base-form :formItems="formItems" :form="form" inline>
      <el-button type="primary" @click="getTableData">查询</el-button>
      <el-button type="primary" plain @click="add(null)">新增</el-button>
    </base-form>
    <add-dialog ref="addDialog" @refresh="getTableData"></add-dialog>
    <common-table
        :height="614"
        :tableData="tableData"
        :config="config"
        :tableColumns="tableColumns"
        @pageSizeChange="getTableData"
        @currentPageChange="getTableData">
      <template #operate="{row}">
        <el-button @click=add(row) type="text" >编辑</el-button>
        <el-button @click="remove(row)" type="text">删除</el-button>
      </template>
    </common-table>
  </div>
</template>

<script>
import BaseForm from "@/components/common/BaseForm";
import AddDialog from "@/views/Others/addDialog";
import CommonTable from '../../components/common/Table';
export default {
  components: {
    BaseForm,
    AddDialog,
    CommonTable
  },
  data() {
    return{
      visible: false,
      form: {
        name: ''
      },
      formItems: [
        {
          inputType: 'el-input',
          formKey: 'name',
          label: '姓名',
          clearable: true
        }
      ],
      tableData: [],
      tableColumns: [
        { prop: 'name', label: '姓名' },
        { prop: 'age', label: '年龄' },
        { prop: 'sexLabel', label: '性别' },
        { prop: 'birth', label: '出生日期' },
        { prop: 'addr', label: '地址', showOverflowTooltip: true },
        { prop: 'operate', label: '操作', slotName: 'operate',width: "150" }
      ],
      config: { currentPage: 1, pageSize: 10, loading: false }
    }
  },
  methods: {
    add(row) {
      // this.visible = true;
      this.$refs.addDialog.init(row);
    },
    remove(row) {
      this.$confirm(`删除用户${row.name}, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.sendRemoveRequest(row.id);
      })
    },
    sendRemoveRequest(id) {
      this.$http.get('/user/deleteUser', {
        params: {
          id
        }
      }).then(res => {
        this.$message.success(res.data?.message);
        this.getTableData();
      })
    },
    getTableData() {
      this.config.loading = true
      this.$http.get('/user/getUser', {
        params: {
          currentPage: this.config.currentPage,
          pageSize: this.config.pageSize,
          name: this.form.name
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
  },
  created() {
    this.getTableData();
  }
}
</script>

<style lang="scss" scoped>

</style>