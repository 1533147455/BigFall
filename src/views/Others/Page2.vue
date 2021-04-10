<template>
  <div class="page-two">
    <el-button type="primary" plain @click="add">新增</el-button>
    <common-dialog
        width="960px"
        title="新增"
        :visible="addVisible"
        :confirm-loading="addLoading"
        @close="addClose"
        @confirm="addConfirm">
      <common-form ref="addForm" :formItems="addFormItems" :form="addForm" label-width="88px"/>
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
      </el-table>
    </common-dialog>
  </div>
</template>

<script>
import CommonForm from "@/components/common/CommonForm";
import CommonDialog from "@/components/common/CommonDialog"
export default {
  components: {
    CommonForm,
    CommonDialog
  },
  data() {
    return{
      addVisible: false,
      addLoading: false,
      addForm: {},
      addFormItems: [
        {
          inputType: 'RemoteInput',
          formKey: 'name',
          label: '姓名',
          rules: { required: true, message: '请输入活动名称' },
          staticOptions: [ '三全食品', '四全食品', '五全食品' ]
        },
        {
          inputType: 'RemoteSelect',
          formKey: 'food',
          label: '食物',
          staticOptions: [
            { value: '6', label: '六全食品'},
            { value: '7', label: '七全食品'},
            { value: '8', label: '八全食品'},
          ]
        },
        {
          inputType: 'el-input',
          formKey: 'dog',
          label: '拉布拉多',
        },
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    add() {
      this.addVisible = true;
    },
    addClose() {
      this.addVisible = false;
      this.$refs.addForm.$refs.form.resetFields();
    },
    addConfirm() {
      this.$refs.addForm.$refs.form.validate((valid) => {
        if (!valid) return;
        this.addLoading = true;
        setTimeout(() => {
          this.$message.success('操作成功');
          this.addLoading = false;
          this.addClose();
        }, 2000)
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>