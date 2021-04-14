<template>
  <div class="page-two">
    <el-button type="primary" plain @click="batchAdjust">批量调整</el-button>
    <base-dialog
        width="430px"
        title="批量调整"
        :visible="visible"
        :confirm-loading="loading"
        @close="close"
        @confirm="confirm">
      <el-radio-group v-model="updateAll" @change="radioChange" size="small">
        <el-radio-button :label="false" class="check-data">调整勾选数据</el-radio-button>
        <el-radio-button :label="true" class="all-data">调整全部数据</el-radio-button>
      </el-radio-group>
      <base-form ref="formDom" :formItems="formItems" :form="form" inline label-width="65px">
        <template #nameDescribe="{item}">
          {{ item.describe }}
        </template>
        <template #foodDescribe="{item}">
          {{ item.describe }}
        </template>
      </base-form>
    </base-dialog>
  </div>
</template>

<script>
import BaseForm from "@/components/common/BaseForm";
import BaseDialog from "@/components/common/BaseDialog"
export default {
  components: {
    BaseForm,
    BaseDialog
  },
  data() {
    return{
      visible: false,
      loading: false,
      updateAll: true,
      form: {},
      formItems: [
        {
          inputType: 'RemoteInput',
          formKey: 'name',
          label: '属性',
          class: 'name',
          rules: { required: true, message: '请输入需要调整的属性' },
          staticOptions: [ '三全食品', '四全食品', '五全食品' ],
          slotName: 'nameDescribe',
          describe: '='
        },
        {
          inputType: 'RemoteSelect',
          formKey: 'food',
          class: 'food',
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
          class: 'afterValue',
          rules: { required: true, message: '请输入调整后的值' },
        },
      ]
    }
  },
  methods: {
    batchAdjust() {
      this.init();
    },
    init() {
      this.visible = true;
    },
    radioChange(value) {
      this.$refs.formDom.$refs.form.resetFields();
      if (value) {
        console.log('点了调整全部按钮')
      } else {
        console.log('点了调整勾选按钮')
      }
    },
    close() {
      this.visible = false;
      this.$refs.formDom.$refs.form.resetFields();
    },
    confirm() {
      this.$refs.formDom.$refs.form.validate((valid) => {
        if (!valid) return;
        this.loading = true;
        setTimeout(() => {
          this.$message.success('操作成功');
          this.loading = false;
          this.close();
        }, 2000)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-radio-group {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
::v-deep .el-radio-button:first-child .el-radio-button__inner {
  border-radius: 20px 0 0 20px;
}
::v-deep .el-radio-button:last-child .el-radio-button__inner {
  border-radius: 0 20px 20px 0;
}
::v-deep .el-form-item.name .el-input,::v-deep .el-form-item.food .el-input {
  width: 110px;
}
::v-deep .el-form-item.afterValue .el-input{
  width: 243px;
}
</style>