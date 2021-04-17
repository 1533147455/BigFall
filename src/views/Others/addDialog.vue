<template>
  <div class="page-two">
    <base-dialog
        width="430px"
        title="新增"
        :visible.sync="visible"
        :confirm-loading="loading"
        @close="close"
        @confirm="confirm">
      <base-form ref="formDom" :formItems="formItems" :form="form" label-width="88px"/>
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
  // props: {
  //   visible: Boolean
  // },
  data() {
    return{
      visible: false,
      loading: false,
      form: {
        name: '',
        addr: '',
        age: undefined,
        sex: '',
        birth: ''
      },
      formItems: [
        {
          inputType: 'RemoteInput',
          formKey: 'name',
          label: '姓名',
          clearable: true,
        },
        {
          inputType: 'NumberInput',
          formKey: 'age',
          label: '年龄',
          clearable: true,
          min: 0,
          max: 80
        },
        {
          inputType: 'RemoteSelect',
          formKey: 'sex',
          label: '性别',
          clearable: true,
          staticOptions: [
            { label: '男', value: '男' },
            { label: '女', value: '女' }
          ]
        },
        {
          inputType: 'el-date-picker',
          formKey: 'birth',
          label: '日期',
          clearable: true,
          format: 'yyyy-MM-dd',
          valueFormat: 'yyyy-MM-dd'
        },
        {
          inputType: 'RemoteInput',
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
        // this.form = Object.assign({}, row)
        this.form = { ...row }
      }
    },
    close() {
      // this.$emit('update:visible', false);
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