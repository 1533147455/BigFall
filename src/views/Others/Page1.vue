<template>
  <div class="page-one">
    <query-form :formItems="formItems" :form="form" inline>
      <template #button>
        <el-button type="primary" @click="cancel">主要按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
      </template>
    </query-form>
  </div>
</template>

<script>
import QueryForm from "@/components/common/QueryForm";
export default {
  components: {
    QueryForm
  },
  data() {
    return{
      inputValue: '',
      selectValue: '',
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
      ]
    }
  },
  methods: {
    cancel() {
      console.log(this.form);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>