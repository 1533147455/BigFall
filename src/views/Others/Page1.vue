<template>
  <div class="page-one">
    <query-form :formItems="formItems" :form="form" inline>
      <template #testSlot="{item}">
        <el-tooltip :content="item.description" placement="bottom" effect="light">
            <i class="el-icon-mouse" style="font-size: 20px;"></i>
        </el-tooltip>
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
          value: '',
          staticOptions: [
            { value: '三全食品', label: 'bbqa'},
            { value: '四全食品', label: 'bbqb'},
            { value: '五全食品', label: 'bbqc'},
          ]
        },
        {
          inputType: 'RemoteSelect',
          formKey: 'food',
          label: '食物',
          staticOptions: [
            { value: '六全食品', label: 'bbqa'},
            { value: '七全食品', label: 'bbqb'},
            { value: '八全食品', label: 'bbqc'},
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
          slotName: 'testSlot',
          description: '日期的提示内容balabala'
        }
      ],

    }
  }
}
</script>

<style lang="scss" scoped>

</style>