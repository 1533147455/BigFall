<template>
  <batch-adjust-dialog
      :visible="visible"
      :confirm-loading="confirmLoading"
      :selection="selection"
      @radioChange="radioChange"
      @close="close"
      @confirm="confirm">
    <template #form>
      <base-form ref="checkFormDom" :formItems="checkFormItems" :form="checkForm" inline label-width="65px" v-show="!adjustAll">
      </base-form>
      <base-form ref="allFormDom" :formItems="allFormItems" :form="allForm" inline label-width="65px" v-show="adjustAll">
        <template #nameDescribe="{item}">
          {{ item.describe }}
        </template>
        <template #foodDescribe="{item}">
          {{ item.describe }}
        </template>
      </base-form>
    </template>
  </batch-adjust-dialog>
</template>

<script>
import BatchAdjustDialog from "@/components/common/BatchAdjustDialog";
export default {
  components: {
    BatchAdjustDialog
  },
  data() {
    return{
      visible: false,
      confirmLoading: false,
      adjustAll: true,
      selection: [2], // 接收要调整的id数组
      checkForm: {},
      checkFormItems: [
        {
          inputType: 'RemoteSelect',
          label: '属性',
          formKey: 'checkFormOption',
          class: 'checkFormOption',
          staticOptions: [
            { value: '6', label: '车品牌'},
            { value: '7', label: '车系'},
            { value: '8', label: '车型'},
            { value: '9', label: '备注'},
            { value: '10', label: '线上备注'}
          ]
        },
        {
          inputType: 'el-input',
          formKey: 'checkFormValue',
          class: 'checkFormValue',
          label: '调整为',
          rules: { required: true, message: '请输入调整后的值' },
        },
      ],
      allForm: {},
      allFormItems: [
        {
          inputType: 'RemoteInput',
          formKey: 'name',
          label: '属性',
          class: 'allFormOption',
          rules: { required: true, message: '请输入需要调整的属性' },
          staticOptions: [ '车品牌', '车系', '车型', '备注', '线上备注' ],
          slotName: 'nameDescribe',
          describe: '='
        },
        {
          inputType: 'RemoteSelect',
          formKey: 'food',
          class: 'allFormBeforeValue',
          staticOptions: [
            { value: '6', label: '六全食品'},
            { value: '7', label: '七全食品'},
            { value: '8', label: '八全食品'},
          ],
          slotName: 'foodDescribe',
          describe: '的数据'
        },
        {
          inputType: 'el-input',
          formKey: 'dog',
          label: '调整为',
          class: 'allFormAfterValue',
          rules: { required: true, message: '请输入调整后的值' },
        },
      ]
    }
  },
  methods: {
    open() {
      this.visible = true
    },
    radioChange(value) {
      this.adjustAll = value
      this.$refs.checkFormDom.$refs.form.clearValidate() // 切换时清除将离开的表单的校验
      this.$refs.allFormDom.$refs.form.clearValidate()

    },
    close() {
      this.visible = false
      setTimeout(() => {
        this.$refs.checkFormDom.$refs.form.resetFields()
        this.$refs.allFormDom.$refs.form.resetFields()
      })
    },
    confirm() {
      const formName = this.adjustAll ? 'allFormDom' : 'checkFormDom'
      this.$refs[formName].$refs.form.validate((valid) => {
        if (!valid) return
        this.confirmLoading = true
        setTimeout(() => {
          this.$emit('refresh')
          this.$message.success('操作成功')
          this.confirmLoading = false
          this.close()
        }, 2000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// 调整勾选数据
::v-deep .checkFormOption,::v-deep .checkFormValue{
  width: 250px;
}
.not-allowed ::v-deep .el-radio-button__inner {
  cursor: not-allowed; // 当没勾选数据时，调整勾选数据按钮改用禁用光标
}
// 调整全部数据
::v-deep .allFormBeforeValue,::v-deep .allFormOption {
  width: 110px;
}
::v-deep .allFormAfterValue{
  width: 250px;
}
</style>