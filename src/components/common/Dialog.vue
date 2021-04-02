<template>
  <div class="common-dialog">
    <el-dialog
        :title="title"
        :visible.sync="visible"
        center
        :width="width"
        @close="close">
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="certain">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default  {
  props: {
    title: String,
    width: String,
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    init() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    certain() {
      this.close();
    }
  }
}
</script>
<style lang="scss" scoped>
</style>