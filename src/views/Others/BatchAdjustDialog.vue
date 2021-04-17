<template>
  <base-dialog
    width="430px"
    title="批量调整"
    v-bind="$attrs"
    v-on="$listeners">
    <el-radio-group v-model="adjustAll" @change="radioChange" size="small" v-if="showRadioGroup">
      <el-radio-button
          :label="false"
          :class="{ 'not-allowed': !this.selection.length }">
        调整勾选数据
      </el-radio-button>
      <el-radio-button :label="true">
        调整所有数据
        <el-tooltip effect="light" placement="bottom-end" content="调整查询结果的所有数据">
          <i class="el-icon-question"></i>
        </el-tooltip>
      </el-radio-button>
    </el-radio-group>
    <slot name="form"/>
  </base-dialog>
</template>

<script>
import BaseDialog from "@/components/common/BaseDialog"
export default {
  components: {
    BaseDialog
  },
  props: {
    showRadioGroup: {
      type: Boolean,
      default: true
    },
    selection: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return{
      adjustAll: true,
      // selection: [1], // 接收要调整的id数组
    }
  },
  methods: {
    radioChange(value) {
      if (!value && !this.selection.length) {
        this.adjustAll = true
        return this.$message.warning('请至少勾选一条数据')
      }
      this.$emit('radioChange', this.adjustAll);
    }
  }
}
</script>

<style lang="scss" scoped>
// 按钮
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
// 当没勾选数据时，调整勾选数据按钮改用禁用光标
.not-allowed ::v-deep .el-radio-button__inner {
  cursor: not-allowed;
}
</style>