<template>
    <el-dialog
        :visible="visible"
        center
        v-bind="$attrs"
        @close="close">
      <slot></slot>
      <template #footer>
        <el-button v-if="cancelButton" @click="close">取 消</el-button>
        <el-button type="primary" :loading="confirmLoading" @click="confirm">确 定</el-button>
      </template>
    </el-dialog>
</template>
<script>
export default  {
  props: {
    visible: Boolean,
    confirmLoading: Boolean,
    cancelButton: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    confirm() {
      this.$emit('confirm');
    }
  }
}
</script>
<style lang="scss" scoped>
</style>