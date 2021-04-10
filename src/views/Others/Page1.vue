<template>
  <div class="page-one">
    <query-form :formItems="formItems" :form="form" inline>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">综合查询</el-button>
      <template #rightSlot>
        <el-button type="primary" plain @click="add">新增</el-button>
      </template>
    </query-form>
    <add-dialog ref="addDialog" @updateData="updateData"></add-dialog>
  </div>
</template>

<script>
import QueryForm from "@/components/common/CommonForm";
import AddDialog from "@/views/Others/addDialog"
export default {
  components: {
    QueryForm,
    AddDialog
  },
  data() {
    return{
      inputValue: '',
      selectValue: '',
      visible: false,
      form: {},
      formItems: [
        {
          inputType: 'RemoteInput',
          formKey: 'name',
          label: '姓名',
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
          inputType: 'el-date-picker',
          formKey: 'date',
          label: '日期',
          type: 'daterange',
          rangeSeparator: '-',
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
          valueFormat: 'yyyy-MM-dd'
        },
        {
          inputType: 'NumberInput',
          formKey: 'stockNum',
          label: '库存',
          min: 0.00,
          max: 999.99,
          precision: 2
        }
      ],
      batchAdjustForm: {},
      confirmLoading: false,
      rules: {
        name: [
          { required: true, message: '请输入活动名称' }
        ]
      }
    }
  },
  methods: {
    add() {
      this.$refs.addDialog.init();
    },
    updateData() {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>