<template>
  <el-dialog title="新增" :visible.sync="visible" @close="close" center width="400px">
    <common-form ref="queryForm" :formItems="formItems" :form="form" label-width="88px"/>
    <template #footer>
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" :loading="confirmLoading" @click="confirm">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script>
import CommonForm from "@/components/common/CommonForm";
export default {
  components: {
    CommonForm
  },
  data() {
    return{
      visible: false,
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
          inputType: 'RemoteInput',
          formKey: 'dog',
          label: '拉布拉多',
          staticOptions: [ '三全食品', '四全食品', '五全食品' ]
        },
      ],
      confirmLoading: false,
      rules: {
        name: [
          { required: true, message: '请输入名称' }
        ]
      }
    }
  },
  methods: {
    init() {
      this.visible = true;
    },
    close() {
      this.visible = false;
      this.$refs.queryForm.$refs.form.resetFields();
    },
    confirm() {
      console.log(this.form);
      this.$refs.queryForm.$refs.form.validate((valid) => {
        if (!valid) return;
        this.confirmLoading = true;
        setTimeout(() => {
          this.$emit('updateData');
          this.$message.success('操作成功');
          this.confirmLoading = false;
          this.close();
        }, 2000)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .width-form {
  width: 330px;
}
</style>