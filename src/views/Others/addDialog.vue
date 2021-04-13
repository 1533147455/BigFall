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
      form: {
        name: '',
        addr: '',
        age: '',
        sex: ''
      },
      formItems: [
        {
          inputType: 'el-input',
          formKey: 'name',
          label: '姓名',
          clearable: true
        },
        {
          inputType: 'el-input',
          formKey: 'age',
          label: '年龄',
          clearable: true
        },
        {
          inputType: 'el-input',
          formKey: 'sex',
          label: '性别',
          clearable: true
        },
        {
          inputType: 'el-input',
          formKey: 'addr',
          label: '地址',
          clearable: true
        }
      ],
      path: '/user/createUser',
    }
  },
  methods: {
    init(row) {
      this.visible = true;
      if (row) {
        this.form = Object.assign({}, row)
        this.path = '/user/updateUser'
      }
    },
    close() {
      this.visible = false;
      setTimeout(() => {
        this.$refs.formDom.$refs.form.resetFields();
      },200);
    },
    confirm() {
      this.$refs.formDom.$refs.form.validate(async (valid) => {
        if (!valid) return;
        this.loading = true;
        await this.$http.post(this.path, this.form).then((res) => {
          console.log(res);
          this.loading = false;
          this.close();
          this.$emit('refresh');
          this.$message.success(res.data?.message);
        });
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>