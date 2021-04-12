<template>
  <div class="page-two">
    <common-dialog
        width="430px"
        title="新增"
        :visible="visible"
        :confirm-loading="loading"
        @close="close"
        @confirm="confirm">
      <common-form ref="formDom" :formItems="formItems" :form="form" label-width="88px"/>
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
      visible: false,
      loading: false,
      form: {},
      formItems: [
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
      ]
    }
  },
  methods: {
    init() {
      this.visible = true;
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

</style>